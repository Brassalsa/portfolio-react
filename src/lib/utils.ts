import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { skills, Skills } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function skillExtract(
  skillType: Skills[0]["type"],
  prop?: keyof Skills[0]
) {
  return skills
    .filter((i) => i.type === skillType)
    .map((i) => (prop ? i[prop] : i));
}
