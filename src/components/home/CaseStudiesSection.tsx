import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { caseStudies } from "./homeContent";
import { AccentArrowLink, SectionHeading } from "./shared";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="scroll-mt-24 pt-[70px]">
      <Container className="space-y-[80px]">
        <SectionHeading
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <div className="rounded-card bg-primary px-10 py-[70px] md:px-[60px]">
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {caseStudies.map((study, index) => (
              <div
                key={study.text.slice(0, 20)}
                className={cn(
                  "flex flex-col gap-5 md:px-[60px]",
                  index === 1 && "md:border-x md:border-on-dark/30 md:py-0",
                  index === 0 && "md:pl-0",
                  index === 2 && "md:pr-0",
                )}
              >
                <p className="max-w-[286px] text-body text-on-dark">{study.text}</p>
                <AccentArrowLink>Learn more</AccentArrowLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
