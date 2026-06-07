import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  labelClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, hint, error, id, labelClassName, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={inputId}
            className={cn("text-body-sm font-medium text-ink", labelClassName)}
          >
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-button border border-border bg-surface px-5 py-3 text-body",
            "placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark",
            error && "border-red-600 focus-visible:ring-red-600",
            className,
          )}
          {...props}
        />
        {error ? (
          <p className="text-body-sm text-red-600" role="alert">
            {error}
          </p>
        ) : hint ? (
          <p className="text-body-sm text-ink-muted">{hint}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
