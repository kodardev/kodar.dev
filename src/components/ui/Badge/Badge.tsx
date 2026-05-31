import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant = "accent" | "dark" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent text-ink",
  dark: "bg-dark text-surface",
  outline: "bg-transparent text-ink border border-border",
};

export function Badge({
  variant = "accent",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-label px-2 py-0.5 text-body-sm font-medium",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
