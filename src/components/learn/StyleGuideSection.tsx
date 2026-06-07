import { type ReactNode } from "react";
import { cardBaseStyles } from "@/components/ui";
import { cn } from "@/lib/cn";
import { LearnCallout } from "./LearnCallout";

export interface StyleGuideSectionProps {
  id: string;
  title: string;
  description: string;
  learnFile: string;
  children: ReactNode;
}

export function StyleGuideSection({
  id,
  title,
  description,
  learnFile,
  children,
}: StyleGuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6 border-b border-border/10 pb-section">
      <div className="grid gap-6 lg:grid-cols-[1fr_17.5rem]">
        <div>
          <h2 className="text-heading-md">{title}</h2>
          <p className="mt-2 max-w-prose text-body text-ink-muted">{description}</p>
        </div>
        <LearnCallout title="Open in your editor" filePath={learnFile} />
      </div>
      <div className={cn(cardBaseStyles, "border-border/10 bg-surface p-6 md:p-8")}>{children}</div>
    </section>
  );
}
