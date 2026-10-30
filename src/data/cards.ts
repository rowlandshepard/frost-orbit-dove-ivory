import { bloodCards } from "./blood.ts";
import { endocrineCards } from "./endocrine.ts";
import { heartCards } from "./heart.ts";
import { lymphCards } from "./lymph.ts";
import { vesselCards } from "./vessels.ts";
import type { Card } from "./types.ts";

export const CARDS: Card[] = [
  ...endocrineCards,
  ...bloodCards,
  ...heartCards,
  ...vesselCards,
  ...lymphCards,
];

const ids = new Set<string>();
for (const item of CARDS) {
  if (ids.has(item.id)) {
    throw new Error(`Duplicate card id ${item.id}`);
  }
  ids.add(item.id);
  if (item.choices.length < 2 || item.answer < 0 || item.answer >= item.choices.length) {
    throw new Error(`Bad choices on ${item.id}`);
  }
}
