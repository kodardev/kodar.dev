import kodarLogo from "@/assets/kodar.svg";
import { cn } from "@/lib/cn";

export type LogoSize = "sm" | "md" | "lg";

export interface LogoProps {
  /** Show the “Kodar” wordmark beside the mark. */
  showWordmark?: boolean;
  size?: LogoSize;
  className?: string;
}

const markSizes: Record<LogoSize, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-16",
};

/** Kodar brand mark — used in header, footer, and marketing surfaces. */
export function Logo({
  showWordmark = true,
  size = "md",
  className,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src={kodarLogo}
        alt=""
        aria-hidden={showWordmark}
        className={cn("shrink-0", markSizes[size])}
      />
      {showWordmark ? (
        <span className="text-heading-sm font-medium">Kodar</span>
      ) : null}
    </span>
  );
}
