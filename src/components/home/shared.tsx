import { type ReactNode } from "react";
import { SectionLabel } from "@/components/ui";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  title: string;
  description: string;
  descriptionClassName?: string;
  className?: string;
}

/** Figma section header — accent label + body copy, 40px gap on desktop. */
export function SectionHeading({
  title,
  description,
  descriptionClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 lg:items-center lg:gap-10", className)}>
      <SectionLabel className="flex-none">{title}</SectionLabel>
      <p className={cn("min-w-0 flex-1 text-body text-ink lg:max-w-2xl", descriptionClassName)}>
        {description}
      </p>
    </div>
  );
}

export interface CardTitleProps {
  lines: readonly string[];
  tone?: "accent" | "surface";
}

export function CardTitle({ lines, tone = "accent" }: CardTitleProps) {
  return (
    <span className="flex flex-col items-start">
      {lines.map((line) => (
        <span
          key={line}
          className={cn(
            "landing-card-label",
            tone === "accent" ? "landing-card-label--accent" : "landing-card-label--surface",
          )}
        >
          {line}
        </span>
      ))}
    </span>
  );
}

export interface LearnMoreLinkProps {
  dark?: boolean;
  className?: string;
}

export function LearnMoreLink({ dark = false, className }: LearnMoreLinkProps) {
  return (
    <span className={cn("inline-flex items-center gap-4", className)}>
      <img
        src={
          dark ? "/assets/home/icon-learn-more-light.svg" : "/assets/home/icon-learn-more-dark.svg"
        }
        alt=""
        aria-hidden
        className="size-10 shrink-0"
      />
      <span
        className={cn("text-heading-sm font-normal leading-7", dark ? "text-on-dark" : "text-ink")}
      >
        Learn more
      </span>
    </span>
  );
}

export function AccentArrowLink({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-4">
      <span className="text-heading-sm text-accent">{children}</span>
      <img src="/assets/home/icon-arrow-accent.svg" alt="" aria-hidden className="h-2.5 w-4" />
    </span>
  );
}
