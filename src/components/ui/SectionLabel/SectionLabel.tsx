import { cn } from "@/lib/cn";

export interface SectionLabelProps {
  children: string;
  className?: string;
}

/** Green highlight chip used for section titles in the Positivus design. */
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
