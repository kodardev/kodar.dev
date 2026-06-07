import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./shared";

const processSteps = [
  {
    title: "Consultation",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Continual Improvement",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 pt-17.5">
      <Container className="space-y-section">
        <SectionHeading title="Como Funcina" description="10 passos para se tornar um guerreiro" />
        <div className="flex flex-col gap-5">
          {processSteps.map((step, index) => {
            const stepNumber = index + 1;
            return (
              <article
                key={step.title}
                className={cn(
                  "landing-card-shadow overflow-hidden rounded-card border border-border px-10 py-10 md:px-15",
                  "bg-surface-muted",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="flex items-center gap-6">
                    <span className="text-display font-medium leading-none">{stepNumber}</span>
                    <span className="text-heading-md font-medium">{step.title}</span>
                  </span>
                  <span className="relative size-15 shrink-0">
                    <img
                      src="/assets/home/icon-plus.svg"
                      alt=""
                      className="size-full"
                      aria-hidden
                    />
                  </span>
                </button>
                <hr className="my-7.5 border-border" />
                <p className="max-w-278.5 text-body text-ink">{step.body}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
