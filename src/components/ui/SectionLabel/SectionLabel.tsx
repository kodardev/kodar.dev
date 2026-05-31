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
        "w-fit shrink-0 whitespace-nowrap rounded-label bg-accent px-[7px] py-0.5 text-heading-lg font-medium leading-none text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
