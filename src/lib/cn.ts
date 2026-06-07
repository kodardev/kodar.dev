import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      // Matches --text-* font-size tokens in src/styles/tokens.css
      text: ["display", "heading-lg", "heading-md", "heading-sm", "body", "body-sm"],
    },
  },
});

/** Merge Tailwind classes without conflicts — used across all UI components. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
