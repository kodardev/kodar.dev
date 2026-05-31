import { cn } from "@/lib/cn";

export interface SectionLabelProps {
  children: string;
  className?: string;
}

/** Highlight chip used for section titles — Celadon background from the Kodar palette. */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-label bg-accent px-2 py-0.5 text-heading-lg font-medium text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
