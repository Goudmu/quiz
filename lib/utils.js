import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getShuffledIndexes(jml) {
  const indexes = Array.from({ length: jml }, (_, i) => i + 1);
  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}

export const getTitleQuestions = (tipeSoal) => {
  switch (tipeSoal) {
    case "bahasainggris/passage":
      return "English Passage Test";
    case "matematika/soal":
      return "Matematika Soal";
    case "matematika/soal2":
      return "Matematika Soal 2";
    default:
      return "Unknown Type";
  }
};
