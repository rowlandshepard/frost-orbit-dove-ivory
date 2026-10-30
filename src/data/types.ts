export type DeckId = "endocrine" | "blood" | "heart" | "vessels" | "lymph";

export type Card = {
  id: string;
  deck: DeckId;
  prompt: string;
  choices: string[];
  answer: number;
  explain: string;
};

export type DeckMeta = {
  id: DeckId;
  lecture: number;
  title: string;
  line: string;
};

export const DECKS: DeckMeta[] = [
  {
    id: "endocrine",
    lecture: 14,
    title: "Endocrine system",
    line: "Hormones, feedback, and glands",
  },
  {
    id: "blood",
    lecture: 15,
    title: "Blood",
    line: "Cells, clotting, and transfusion",
  },
  {
    id: "heart",
    lecture: 16,
    title: "Heart",
    line: "Chambers, valves, and the double pump",
  },
  {
    id: "vessels",
    lecture: 17,
    title: "Beat and vessels",
    line: "Rhythm, output, and circulation",
  },
  {
    id: "lymph",
    lecture: 18,
    title: "Lymph and immunity",
    line: "Fluid return and defense",
  },
];

export function card(
  id: string,
  deck: DeckId,
  prompt: string,
  choices: string[],
  answer: number,
  explain: string,
): Card {
  return { id, deck, prompt, choices, answer, explain };
}
