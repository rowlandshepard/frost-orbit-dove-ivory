import { useEffect, useMemo, useState } from "react";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { CARDS } from "@/data/cards";
import { DECKS, type Card, type DeckId } from "@/data/types";
import { useStudy, type Tag } from "@/lib/study-store";

type Scope = DeckId | "all";
type Kind = "unseen" | "work" | "all";

type Round = {
  queue: Card[];
  index: number;
  picked: number | null;
  correct: number;
  wrong: number;
  missed: string[];
  scope: Scope;
  kind: Kind;
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function shuffleCards(list: Card[]): Card[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const left = next[i];
    const right = next[j];
    if (left && right) {
      next[i] = right;
      next[j] = left;
    }
  }
  return next;
}

function collect(scope: Scope, kind: Kind, tags: Record<string, Tag>): Card[] {
  let cards = scope === "all" ? CARDS : CARDS.filter((item) => item.deck === scope);
  if (kind === "unseen") cards = cards.filter((item) => tags[item.id] !== "known");
  if (kind === "work") cards = cards.filter((item) => tags[item.id] === "work");
  return shuffleCards(cards);
}

function deckTitle(scope: Scope): string {
  if (scope === "all") return "All five lectures";
  return DECKS.find((deck) => deck.id === scope)?.title ?? "Lecture";
}

function kindLabel(kind: Kind): string {
  if (kind === "work") return "Needs work";
  if (kind === "all") return "Including known";
  return "Known cards hidden";
}

export function ConduitApp() {
  const tags = useStudy((state) => state.tags);
  const setTag = useStudy((state) => state.setTag);
  const clearTag = useStudy((state) => state.clearTag);
  const resetTags = useStudy((state) => state.resetTags);
  const [round, setRound] = useState<Round | null>(null);
  const [armedReset, setArmedReset] = useState(false);

  useEffect(() => {
    void useStudy.persist.rehydrate();
  }, []);

  const totals = useMemo(() => {
    let known = 0;
    let work = 0;
    for (const item of CARDS) {
      if (tags[item.id] === "known") known += 1;
      else if (tags[item.id] === "work") work += 1;
    }
    return { known, work, left: CARDS.length - known, total: CARDS.length };
  }, [tags]);

  function start(scope: Scope, kind: Kind, queue?: Card[]) {
    const next = queue ?? collect(scope, kind, useStudy.getState().tags);
    setRound({
      queue: next,
      index: 0,
      picked: null,
      correct: 0,
      wrong: 0,
      missed: [],
      scope,
      kind,
    });
    setArmedReset(false);
  }

  function pick(choice: number) {
    setRound((current) => {
      if (!current || current.picked !== null) return current;
      const item = current.queue[current.index];
      if (!item) return current;
      const right = choice === item.answer;
      return {
        ...current,
        picked: choice,
        correct: current.correct + (right ? 1 : 0),
        wrong: current.wrong + (right ? 0 : 1),
        missed: right ? current.missed : [...current.missed, item.id],
      };
    });
  }

  function tagCurrent(tag: Tag) {
    const item = round?.queue[round.index];
    if (!item || round?.picked === null) return;
    if (tags[item.id] === tag) clearTag(item.id);
    else setTag(item.id, tag);
  }

  function next() {
    setRound((current) => {
      if (!current || current.picked === null) return current;
      return { ...current, index: current.index + 1, picked: null };
    });
  }

  const current = round?.queue[round.index];

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!round || !current) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.tagName === "INPUT") return;
      if (round.picked === null) {
        const index = Number(event.key) - 1;
        if (index >= 0 && index < current.choices.length) {
          event.preventDefault();
          pick(index);
        }
        return;
      }
      if (event.key === "Enter" || event.key.toLowerCase() === "n") {
        event.preventDefault();
        next();
      } else if (event.key.toLowerCase() === "k") {
        event.preventDefault();
        tagCurrent("known");
      } else if (event.key.toLowerCase() === "w") {
        event.preventDefault();
        tagCurrent("work");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!round) {
    return (
      <Home
        totals={totals}
        tags={tags}
        armedReset={armedReset}
        onArm={() => setArmedReset(true)}
        onCancelArm={() => setArmedReset(false)}
        onReset={() => {
          resetTags(CARDS.map((item) => item.id));
          setArmedReset(false);
        }}
        onStart={start}
      />
    );
  }

  if (!current) {
    return (
      <Finished
        round={round}
        onHome={() => setRound(null)}
        onAgain={() => start(round.scope, round.kind)}
        onMissed={() => {
          const still = CARDS.filter(
            (item) =>
              round.missed.includes(item.id) &&
              useStudy.getState().tags[item.id] !== "known",
          );
          start(round.scope, "unseen", shuffleCards(still));
        }}
        onIncludeKnown={() => start(round.scope, "all")}
        onClearKnown={() => {
          const ids =
            round.scope === "all"
              ? CARDS.map((item) => item.id)
              : CARDS.filter((item) => item.deck === round.scope).map((item) => item.id);
          resetTags(ids.filter((id) => useStudy.getState().tags[id] === "known"));
          start(round.scope, "unseen");
        }}
      />
    );
  }

  const meta = DECKS.find((deck) => deck.id === current.deck);
  const right = round.picked === current.answer;
  const tag = tags[current.id];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-5 sm:px-6 sm:py-10">
      <header className="flex items-center justify-between gap-3">
        <button
          type="button"
          className="min-h-11 rounded-xl px-3 text-sm font-semibold text-ink"
          onClick={() => setRound(null)}
        >
          Lectures
        </button>
        <p className="text-sm text-muted tabular-nums">
          {round.index + 1} / {round.queue.length}
        </p>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-ink"
          onClick={() => start(round.scope, round.kind)}
        >
          <Shuffle className="size-4" aria-hidden="true" />
          New shuffle
        </button>
      </header>

      <progress
        className="meter mt-3"
        value={round.index}
        max={round.queue.length}
        aria-label="Cards finished in this shuffle"
      />

      <p className="mt-3 text-sm text-muted">
        {deckTitle(round.scope)} · {kindLabel(round.kind)} ·{" "}
        <span className="tabular-nums">
          {round.correct} right, {round.wrong} wrong
        </span>
      </p>

      <article className="mt-4 rounded-card border border-line bg-card px-4 py-5 sm:px-7 sm:py-7">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">
          Lecture {meta?.lecture} · {meta?.title}
        </p>
        <h1 className="mt-3 text-2xl leading-tight text-ink sm:text-3xl" data-testid="prompt">
          {current.prompt}
        </h1>

        <div className="mt-6 flex flex-col gap-3" role="group" aria-label="Answers">
          {current.choices.map((choice, index) => {
            let state = "choice";
            if (round.picked !== null && index === current.answer) state = "choice choice-good";
            else if (round.picked !== null && index === round.picked) state = "choice choice-bad";
            return (
              <button
                key={choice}
                type="button"
                className={state}
                disabled={round.picked !== null}
                onClick={() => pick(index)}
                data-testid="choice"
              >
                <span className="mt-0.5 font-display text-sm font-semibold text-muted">
                  {LETTERS[index]}
                </span>
                <span>{choice}</span>
              </button>
            );
          })}
        </div>

        {round.picked !== null ? (
          <div
            className={right ? "verdict-good mt-5" : "verdict-bad mt-5"}
            role="status"
            data-testid="verdict"
          >
            <p className={right ? "stamp text-good" : "stamp text-accent"}>
              {right ? (
                <Check className="size-5" aria-hidden="true" />
              ) : (
                <X className="size-5" aria-hidden="true" />
              )}
              {right ? "Correct" : "Incorrect"}
            </p>
            {!right ? (
              <p className="mt-2 font-semibold text-ink">
                Answer: {current.choices[current.answer]}
              </p>
            ) : null}
            <p className="mt-2 text-ink">{current.explain}</p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">Choose an answer. Keys 1–4 work too.</p>
        )}
      </article>

      {round.picked !== null ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              data-testid="tag-known"
              aria-pressed={tag === "known"}
              className={
                tag === "known"
                  ? "min-h-11 rounded-xl bg-good px-4 text-sm font-semibold text-paper"
                  : "min-h-11 rounded-xl border border-line bg-card px-4 text-sm font-semibold text-ink"
              }
              onClick={() => tagCurrent("known")}
            >
              Known
            </button>
            <button
              type="button"
              data-testid="tag-work"
              aria-pressed={tag === "work"}
              className={
                tag === "work"
                  ? "min-h-11 rounded-xl bg-accent px-4 text-sm font-semibold text-paper"
                  : "min-h-11 rounded-xl border border-line bg-card px-4 text-sm font-semibold text-ink"
              }
              onClick={() => tagCurrent("work")}
            >
              Needs work
            </button>
          </div>
          <button
            type="button"
            data-testid="next"
            className="min-h-11 rounded-xl bg-ink px-5 text-sm font-semibold text-paper"
            onClick={next}
          >
            Next
          </button>
        </div>
      ) : null}
      <p className="mt-4 text-sm text-muted">
        Known cards drop out of the next shuffle. Tags stay in this browser.
      </p>
    </main>
  );
}

function Home({
  totals,
  tags,
  armedReset,
  onArm,
  onCancelArm,
  onReset,
  onStart,
}: {
  totals: { known: number; work: number; left: number; total: number };
  tags: Record<string, Tag>;
  armedReset: boolean;
  onArm: () => void;
  onCancelArm: () => void;
  onReset: () => void;
  onStart: (scope: Scope, kind: Kind) => void;
}) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-14">
      <p className="text-xs font-semibold tracking-widest text-accent uppercase">
        Unit IV · Transportation
      </p>
      <h1 className="mt-2 text-5xl text-ink sm:text-6xl">Conduit</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Flashcards from the endocrine, blood, heart, vessel, and lymph lectures.
        Pick an answer and the card tells you if it is correct. Tag what you know.
        The next shuffle leaves those cards out.
      </p>

      <dl className="mt-8 grid grid-cols-3 gap-3">
        <Stat label="In the shuffle" value={totals.left} />
        <Stat label="Known" value={totals.known} />
        <Stat label="Needs work" value={totals.work} />
      </dl>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          data-testid="shuffle"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-base font-semibold text-paper"
          onClick={() => onStart("all", "unseen")}
        >
          <Shuffle className="size-4" aria-hidden="true" />
          Shuffle {totals.left} cards
        </button>
        <button
          type="button"
          data-testid="needs-work"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-line bg-card px-5 py-3 text-base font-semibold text-ink"
          onClick={() => onStart("all", "work")}
        >
          Needs work ({totals.work})
        </button>
      </div>

      <h2 className="mt-12 text-2xl text-ink">Lectures</h2>
      <ul className="mt-3 border-t border-line">
        {DECKS.map((deck) => {
          const cards = CARDS.filter((item) => item.deck === deck.id);
          const known = cards.filter((item) => tags[item.id] === "known").length;
          const work = cards.filter((item) => tags[item.id] === "work").length;
          const left = cards.length - known;
          return (
            <li key={deck.id} className="border-b border-line">
              <button
                type="button"
                className="flex w-full min-h-11 items-center gap-4 py-4 text-left"
                onClick={() => onStart(deck.id, "unseen")}
              >
                <span className="w-10 font-display text-2xl text-accent tabular-nums">
                  {deck.lecture}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-semibold text-ink">{deck.title}</span>
                  <span className="block text-sm text-muted">{deck.line}</span>
                </span>
                <span className="text-right text-sm text-muted tabular-nums">
                  <span className="block text-ink">{left} left</span>
                  <span className="block">
                    {known} known · {work} work
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-sm text-muted">{totals.total} cards. Tags stay in this browser.</p>

      <div className="mt-4">
        {armedReset ? (
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-ink">Clear every Known and Needs work tag?</p>
            <button
              type="button"
              className="min-h-11 rounded-xl bg-ink px-4 text-sm font-semibold text-paper"
              onClick={onReset}
            >
              Clear tags
            </button>
            <button
              type="button"
              className="min-h-11 rounded-xl px-3 text-sm font-semibold text-muted"
              onClick={onCancelArm}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted"
            onClick={onArm}
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Clear all tags
          </button>
        )}
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-line bg-card px-3 py-4">
      <dd className="font-display text-3xl text-ink tabular-nums">{value}</dd>
      <dt className="mt-1 text-sm text-muted">{label}</dt>
    </div>
  );
}

function Finished({
  round,
  onHome,
  onAgain,
  onMissed,
  onIncludeKnown,
  onClearKnown,
}: {
  round: Round;
  onHome: () => void;
  onAgain: () => void;
  onMissed: () => void;
  onIncludeKnown: () => void;
  onClearKnown: () => void;
}) {
  const empty = round.queue.length === 0;
  const retryable = round.missed.length > 0;
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-4 py-10">
      <p className="text-xs font-semibold tracking-widest text-accent uppercase">
        {deckTitle(round.scope)}
      </p>
      <h1 className="mt-2 text-4xl text-ink sm:text-5xl">
        {empty ? "Nothing left to shuffle" : "Shuffle finished"}
      </h1>
      {empty ? (
        <p className="mt-4 text-lg text-muted">
          {round.kind === "work"
            ? "No cards in this set are tagged Needs work."
            : "Every remaining card is marked Known, so this shuffle skipped them."}
        </p>
      ) : (
        <p className="mt-4 text-lg text-ink">
          <span className="font-display text-4xl tabular-nums">{round.correct}</span> correct
          <span className="text-muted"> · </span>
          <span className="font-display text-4xl tabular-nums">{round.wrong}</span> incorrect
        </p>
      )}
      <p className="mt-3 text-muted">
        Cards you mark Known stay out of the next shuffle. Needs work cards come back.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {!empty ? (
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-paper"
            onClick={onAgain}
          >
            <Shuffle className="size-4" aria-hidden="true" />
            Shuffle again
          </button>
        ) : null}
        {retryable ? (
          <button
            type="button"
            className="min-h-11 rounded-xl border border-line bg-card px-5 py-3 font-semibold text-ink"
            onClick={onMissed}
          >
            Retry the ones you missed
          </button>
        ) : null}
        {empty && round.kind !== "all" ? (
          <button
            type="button"
            className="min-h-11 rounded-xl bg-accent px-5 py-3 font-semibold text-paper"
            onClick={onIncludeKnown}
          >
            Study them anyway
          </button>
        ) : null}
        {empty ? (
          <button
            type="button"
            className="min-h-11 rounded-xl border border-line bg-card px-5 py-3 font-semibold text-ink"
            onClick={onClearKnown}
          >
            Clear Known tags for this set
          </button>
        ) : null}
        <button
          type="button"
          className="min-h-11 rounded-xl px-5 py-3 font-semibold text-muted"
          onClick={onHome}
        >
          Back to lectures
        </button>
      </div>
    </main>
  );
}
