import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface LearnCalloutProps {
  title: string;
  filePath: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Shown on the style guide so students know which file to open next.
 */
export function LearnCallout({ title, filePath, children, className }: LearnCalloutProps) {
  return (
    <aside
      className={cn(
        "rounded-card border border-dashed border-border/40 bg-surface-muted/80 p-4",
        className,
      )}
    >
      <p className="text-body-sm font-medium text-ink">{title}</p>
      <code className="mt-1 block text-body-sm text-ink-muted">{filePath}</code>
      {children ? <p className="mt-2 text-body-sm text-ink-muted">{children}</p> : null}
    </aside>
  );
}
