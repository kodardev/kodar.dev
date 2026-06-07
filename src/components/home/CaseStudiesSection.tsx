import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { AccentArrowLink, SectionHeading } from "./shared";

const caseStudies = [
  { text: "10 escolas" },
  { text: "300 alunos" },
  { text: "5000 horas" },
] as const;

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="scroll-mt-24 pt-17.5">
      <Container className="space-y-section">
        <SectionHeading
          title="Nossa meta para 2030"
          description="Cada aluno, cada hora de aula, tudo isso afeta diretamente a vida nao so desse aluno mas tambem as pessoas ao seu redor."
        />
        <div
          className="surface-dark rounded-card bg-primary px-10 py-17.5 md:px-15"
          data-surface="dark"
        >
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {caseStudies.map((study, index) => (
              <div
                key={study.text.slice(0, 20)}
                className={cn(
                  "flex flex-col gap-5 md:px-15",
                  index === 1 && "md:border-x md:border-on-dark/30 md:py-0",
                  index === 0 && "md:pl-0",
                  index === 2 && "md:pr-0",
                )}
              >
                <p className="max-w-72 text-body text-on-dark">{study.text}</p>
                <AccentArrowLink>Learn more</AccentArrowLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
