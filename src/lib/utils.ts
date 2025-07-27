import { type ClassValue, clsx } from "clsx";
import { twMerge } from "slack-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
