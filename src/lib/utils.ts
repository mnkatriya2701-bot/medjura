import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { DivisionId } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDivisionColor(division: DivisionId): string {
  return division === "ortho" ? "medjura-navy" : "medjura-lavender";
}

export function getDivisionAccent(division: DivisionId): string {
  return division === "ortho" ? "medjura-teal" : "medjura-pink";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
