import { Page } from "@/app/interfaces/online-shop";
import { atom } from "jotai";

export const pagesAtom = atom<Page[]>([]);

export const selectedPageAtom = atom<Page | null>(null);
