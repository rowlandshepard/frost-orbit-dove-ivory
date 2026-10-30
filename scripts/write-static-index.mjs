import { writeFileSync } from "node:fs";
import { CARDS } from "../src/data/cards.ts";
import { DECKS } from "../src/data/types.ts";

const payload = JSON.stringify({ decks: DECKS, cards: CARDS }).replace(/</g, "\\u003c");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Conduit</title>
  <meta name="description" content="Unit IV flashcards. Tag a card Known and the next shuffle leaves it out." />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,650&family=Source+Sans+3:ital,wght@0,400;0,600;0,700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --paper: #f3eee6; --card: #fbf7f1; --ink: #1b1915; --muted: #6d665e;
      --line: #e3d9cb; --accent: #8c3038; --good: #1e5c48;
    }
    * { box-sizing: border-box; }
    html { -webkit-font-smoothing: antialiased; }
    body { margin: 0; background: var(--paper); color: var(--ink); font-family: "Source Sans 3", "Segoe UI", sans-serif; font-size: 1.0625rem; line-height: 1.5; }
    h1, h2 { font-family: Fraunces, Georgia, serif; letter-spacing: -0.02em; text-wrap: balance; font-weight: 560; }
    button { font: inherit; cursor: pointer; }
    button:disabled { cursor: default; }
    button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .wrap { max-width: 48rem; margin: 0 auto; padding: 2rem 1rem 3rem; }
    .kicker { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); }
    .muted { color: var(--muted); }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 1.5rem; }
    .stat, .panel { background: var(--card); border: 1px solid var(--line); border-radius: 0.85rem; }
    .stat { padding: 0.9rem; }
    .stat b { display: block; font-family: Fraunces, Georgia, serif; font-size: 1.8rem; font-variant-numeric: tabular-nums; }
    .row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; }
    .btn { min-height: 2.75rem; border-radius: 0.85rem; border: 1px solid var(--line); background: var(--card); color: var(--ink); padding: 0.7rem 1rem; font-weight: 600; }
    .btn.primary { background: var(--accent); color: var(--card); border-color: var(--accent); }
    .btn.ink { background: var(--ink); color: var(--card); border-color: var(--ink); }
    .btn.good { background: var(--good); color: var(--card); border-color: var(--good); }
    .lectures { list-style: none; margin: 0.5rem 0 0; padding: 0; border-top: 1px solid var(--line); }
    .lectures button { width: 100%; display: flex; gap: 1rem; align-items: center; text-align: left; background: none; border: 0; border-bottom: 1px solid var(--line); padding: 0.9rem 0; min-height: 2.75rem; color: inherit; }
    .num { width: 2.4rem; font-family: Fraunces, Georgia, serif; font-size: 1.5rem; color: var(--accent); }
    .study { max-width: 40rem; }
    .top { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
    progress { width: 100%; height: 0.35rem; margin-top: 0.8rem; accent-color: var(--accent); }
    .q { margin-top: 1rem; background: var(--card); border: 1px solid var(--line); border-radius: 1.25rem; padding: 1.25rem; }
    .choice { width: 100%; display: flex; gap: 0.75rem; text-align: left; margin-top: 0.7rem; padding: 0.85rem 1rem; border-radius: 0.85rem; border: 1px solid var(--line); background: var(--card); color: var(--ink); }
    .choice.good { border-color: var(--good); background: color-mix(in srgb, var(--good) 12%, var(--card)); }
    .choice.bad { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, var(--card)); }
    .verdict { margin-top: 1rem; border-radius: 0.85rem; padding: 0.9rem 1rem; }
    .verdict.good { border: 1px solid color-mix(in srgb, var(--good) 45%, var(--line)); background: color-mix(in srgb, var(--good) 10%, var(--card)); }
    .verdict.bad { border: 1px solid color-mix(in srgb, var(--accent) 45%, var(--line)); background: color-mix(in srgb, var(--accent) 8%, var(--card)); }
    .stamp { font-family: Fraunces, Georgia, serif; letter-spacing: 0.08em; text-transform: uppercase; margin: 0; }
    .stamp.good { color: var(--good); }
    .stamp.bad { color: var(--accent); }
    .actions { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: space-between; margin-top: 1rem; }
  </style>
</head>
<body>
  <div id="app" class="wrap"></div>
  <script>
    const DATA = ${payload};
    const KEY = "conduit-tags-v1";
    const letters = ["A","B","C","D","E","F"];
    let tags = load();
    let round = null;

    function load() {
      try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && parsed.state && parsed.state.tags ? parsed.state.tags : {};
      } catch { return {}; }
    }
    function save() {
      localStorage.setItem(KEY, JSON.stringify({ state: { tags }, version: 0 }));
    }
    function shuffle(list) {
      const next = list.slice();
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = next[i]; next[i] = next[j]; next[j] = t;
      }
      return next;
    }
    function collect(scope, kind) {
      let cards = scope === "all" ? DATA.cards : DATA.cards.filter((c) => c.deck === scope);
      if (kind === "unseen") cards = cards.filter((c) => tags[c.id] !== "known");
      if (kind === "work") cards = cards.filter((c) => tags[c.id] === "work");
      return shuffle(cards);
    }
    function counts() {
      let known = 0, work = 0;
      for (const card of DATA.cards) {
        if (tags[card.id] === "known") known++;
        else if (tags[card.id] === "work") work++;
      }
      return { known, work, left: DATA.cards.length - known, total: DATA.cards.length };
    }
    function start(scope, kind, queue) {
      round = { queue: queue || collect(scope, kind), index: 0, picked: null, correct: 0, wrong: 0, missed: [], scope, kind };
      render();
    }
    function el(html) {
      document.getElementById("app").innerHTML = html;
    }
    function render() {
      if (!round) return renderHome();
      const card = round.queue[round.index];
      if (!card) return renderDone();
      renderCard(card);
    }
    function renderHome() {
      const t = counts();
      const rows = DATA.decks.map((deck) => {
        const cards = DATA.cards.filter((c) => c.deck === deck.id);
        const known = cards.filter((c) => tags[c.id] === "known").length;
        const work = cards.filter((c) => tags[c.id] === "work").length;
        return \`<li><button data-deck="\${deck.id}"><span class="num">\${deck.lecture}</span><span><strong>\${deck.title}</strong><br><span class="muted">\${deck.line}</span></span><span class="muted" style="margin-left:auto;text-align:right">\${cards.length - known} left<br>\${known} known · \${work} work</span></button></li>\`;
      }).join("");
      el(\`<p class="kicker">Unit IV · Transportation</p>
        <h1>Conduit</h1>
        <p class="muted">Flashcards from the endocrine, blood, heart, vessel, and lymph lectures. Pick an answer and the card tells you if it is correct. Tag what you know. The next shuffle leaves those cards out.</p>
        <div class="stats">
          <div class="stat"><span class="muted">Still in the shuffle</span><b>\${t.left}</b></div>
          <div class="stat"><span class="muted">Known</span><b>\${t.known}</b></div>
          <div class="stat"><span class="muted">Needs work</span><b>\${t.work}</b></div>
        </div>
        <div class="row">
          <button class="btn primary" id="shuffle">Shuffle \${t.left} cards</button>
          <button class="btn" id="work">Needs work (\${t.work})</button>
        </div>
        <h2>Lectures</h2>
        <ul class="lectures">\${rows}</ul>
        <p class="muted">\${t.total} cards. Tags stay in this browser.</p>
        <p><button class="btn" id="clear">Clear all tags</button></p>\`);
      document.getElementById("shuffle").onclick = () => start("all", "unseen");
      document.getElementById("work").onclick = () => start("all", "work");
      document.getElementById("clear").onclick = () => { tags = {}; save(); render(); };
      document.querySelectorAll("[data-deck]").forEach((node) => {
        node.onclick = () => start(node.getAttribute("data-deck"), "unseen");
      });
    }
    function renderCard(card) {
      const deck = DATA.decks.find((d) => d.id === card.deck);
      const choices = card.choices.map((choice, i) => {
        let cls = "choice";
        if (round.picked !== null && i === card.answer) cls += " good";
        else if (round.picked !== null && i === round.picked) cls += " bad";
        return \`<button class="\${cls}" data-choice="\${i}" \${round.picked !== null ? "disabled" : ""}><span class="muted">\${letters[i]}</span><span>\${choice}</span></button>\`;
      }).join("");
      let verdict = \`<p class="muted">Choose an answer.</p>\`;
      if (round.picked !== null) {
        const ok = round.picked === card.answer;
        verdict = \`<div class="verdict \${ok ? "good" : "bad"}" role="status"><p class="stamp \${ok ? "good" : "bad"}">\${ok ? "Correct" : "Incorrect"}</p>\${ok ? "" : \`<p><strong>Answer: \${card.choices[card.answer]}</strong></p>\`}<p>\${card.explain}</p></div>\`;
      }
      const tag = tags[card.id];
      el(\`<div class="study"><div class="top"><button class="btn" id="home">Lectures</button><span class="muted">\${round.index + 1} / \${round.queue.length}</span><button class="btn" id="reshuffle">New shuffle</button></div>
        <progress value="\${round.index}" max="\${round.queue.length}"></progress>
        <p class="muted">\${round.correct} right, \${round.wrong} wrong · Known cards hidden on the next shuffle</p>
        <article class="q"><p class="kicker">Lecture \${deck.lecture} · \${deck.title}</p><h1>\${card.prompt}</h1>\${choices}\${verdict}</article>
        \${round.picked === null ? "" : \`<div class="actions"><span><button class="btn \${tag === "known" ? "good" : ""}" id="known">Known</button> <button class="btn \${tag === "work" ? "primary" : ""}" id="worktag">Needs work</button></span><button class="btn ink" id="next">Next</button></div>\`}
        <p class="muted">Known cards drop out of the next shuffle.</p></div>\`);
      document.getElementById("home").onclick = () => { round = null; render(); };
      document.getElementById("reshuffle").onclick = () => start(round.scope, round.kind);
      document.querySelectorAll("[data-choice]").forEach((node) => {
        node.onclick = () => {
          if (round.picked !== null) return;
          const choice = Number(node.getAttribute("data-choice"));
          const ok = choice === card.answer;
          round.picked = choice;
          if (ok) round.correct++; else { round.wrong++; round.missed.push(card.id); }
          render();
        };
      });
      const knownBtn = document.getElementById("known");
      const workBtn = document.getElementById("worktag");
      const nextBtn = document.getElementById("next");
      if (knownBtn) knownBtn.onclick = () => mark(card.id, "known");
      if (workBtn) workBtn.onclick = () => mark(card.id, "work");
      if (nextBtn) nextBtn.onclick = () => { round.index++; round.picked = null; render(); };
    }
    function mark(id, tag) {
      if (tags[id] === tag) delete tags[id];
      else tags[id] = tag;
      save();
      render();
    }
    function renderDone() {
      const empty = round.queue.length === 0;
      el(\`<p class="kicker">Shuffle</p><h1>\${empty ? "Nothing left to shuffle" : "Shuffle finished"}</h1>
        <p>\${empty ? "Known cards are hidden. Study them anyway, or clear those tags." : \`<b>\${round.correct}</b> correct · <b>\${round.wrong}</b> incorrect\`}</p>
        <p class="muted">Cards you mark Known stay out of the next shuffle.</p>
        <div class="row">
          \${empty ? "" : \`<button class="btn primary" id="again">Shuffle again</button>\`}
          \${round.missed.length ? \`<button class="btn" id="missed">Retry the ones you missed</button>\` : ""}
          \${empty ? \`<button class="btn primary" id="anyway">Study them anyway</button>\` : ""}
          <button class="btn" id="back">Back to lectures</button>
        </div>\`);
      const again = document.getElementById("again");
      if (again) again.onclick = () => start(round.scope, round.kind);
      const missed = document.getElementById("missed");
      if (missed) missed.onclick = () => start(round.scope, "unseen", shuffle(DATA.cards.filter((c) => round.missed.includes(c.id) && tags[c.id] !== "known")));
      const anyway = document.getElementById("anyway");
      if (anyway) anyway.onclick = () => start(round.scope, "all");
      document.getElementById("back").onclick = () => { round = null; render(); };
    }
    render();
  </script>
</body>
</html>
`;

writeFileSync(new URL("../index.html", import.meta.url), html);
console.log(`wrote index.html (${html.length} bytes, ${CARDS.length} cards)`);
