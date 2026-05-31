import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { processSteps } from "./homeContent";
import { SectionHeading } from "./shared";

export function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="process" className="scroll-mt-24 pt-[70px]">
      <Container className="space-y-[80px]">
        <SectionHeading
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
          descriptionClassName="lg:max-w-[292px]"
        />
        <div className="flex flex-col gap-5">
          {processSteps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={step.number}
                className={cn(
                  "landing-card-shadow overflow-hidden rounded-card border border-border px-10 py-[41px] md:px-[60px]",
                  isOpen ? "bg-accent" : "bg-surface-muted",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-[25px]">
                    <span className="text-display font-medium leading-none">{step.number}</span>
                    <span className="text-heading-md font-medium">{step.title}</span>
                  </span>
                  <span className="relative size-[58px] shrink-0">
                    <img src="/assets/home/icon-plus.svg" alt="" className="size-full" aria-hidden />
                    <img
                      src={isOpen ? "/assets/home/icon-minus-sign.svg" : "/assets/home/icon-plus-sign.svg"}
                      alt=""
                      className="absolute inset-[27%]"
                      aria-hidden
                    />
                  </span>
                </button>
                {isOpen && step.body ? (
                  <>
                    <hr className="my-[30px] border-border" />
                    <p className="max-w-[1114px] text-body text-ink">{step.body}</p>
                  </>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
