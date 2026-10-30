import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Tag = "known" | "work";

type StudyState = {
  tags: Record<string, Tag>;
  setTag: (id: string, tag: Tag) => void;
  clearTag: (id: string) => void;
  resetTags: (ids: string[]) => void;
};

export const useStudy = create<StudyState>()(
  persist(
    (set) => ({
      tags: {},
      setTag: (id, tag) =>
        set((state) => ({ tags: { ...state.tags, [id]: tag } })),
      clearTag: (id) =>
        set((state) => {
          const tags = { ...state.tags };
          delete tags[id];
          return { tags };
        }),
      resetTags: (ids) =>
        set((state) => {
          const tags = { ...state.tags };
          for (const id of ids) delete tags[id];
          return { tags };
        }),
    }),
    { name: "conduit-tags-v1", skipHydration: true },
  ),
);
