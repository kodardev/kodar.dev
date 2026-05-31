import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "accent";
export type ButtonSize = "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const buttonBaseStyles =
  "inline-flex items-center justify-center gap-2 rounded-button border-2 border-border font-medium elevation-interactive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-dark text-surface hover:bg-dark-hover focus-visible:ring-dark",
  secondary:
    "bg-surface text-ink hover:bg-surface-muted focus-visible:ring-ink",
  accent:
    "bg-accent text-ink hover:bg-accent-hover focus-visible:ring-accent",
};

export const buttonSizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-body-sm",
  lg: "px-8 py-4 text-body",
};

/**
 * Button — Positivus colors with blocks.cloud-style 3D elevation (hard offset shadow + press).
 * Open this file to see how variants map to Tailwind classes.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonBaseStyles,
          buttonVariantStyles[variant],
          buttonSizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
