import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "default" | "accent" | "dark" | "muted";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const cardBaseStyles = "rounded-card border-2 border-border p-8 shadow-elevation-md";

const variantStyles: Record<CardVariant, string> = {
  default: "bg-surface text-ink",
  accent: "bg-accent text-ink",
  dark: "bg-dark text-on-dark",
  muted: "bg-surface-muted text-ink",
};

/** Card shell — bordered surface with blocks.cloud-style hard offset elevation. */
export function Card({ variant = "default", className, children, ...props }: CardProps) {
  return (
    <div className={cn(cardBaseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
}
