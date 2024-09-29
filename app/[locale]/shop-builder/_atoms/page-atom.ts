import { atom } from "jotai";

export const pagesAtom = atom<
  {
    id: number;
    name: string;
  }[]
>([]);
