import { Product } from "@/app/interfaces/product";
import { atom } from "jotai";

export const productsAtom = atom<Product[]>([]);
