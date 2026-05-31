import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { services } from "./homeContent";
import { CardTitle, LearnMoreLink, SectionHeading } from "./shared";

const cardSurfaces = {
  muted: "bg-surface-muted text-ink",
  accent: "bg-accent text-ink",
  dark: "bg-primary text-on-dark",
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 pt-[70px]">
      <Container className="space-y-[80px]">
        <SectionHeading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="flex flex-col gap-10">
          {[0, 2, 4].map((rowStart) => (
            <div
              key={rowStart}
              className="grid gap-10 lg:grid-cols-2"
            >
              {services.slice(rowStart, rowStart + 2).map((service) => (
                <article
                  key={service.title.join("-")}
                  className={cn(
                    "landing-card-shadow flex min-h-[310px] flex-col justify-between gap-8 rounded-card border border-border p-[50px] sm:flex-row sm:items-center",
                    cardSurfaces[service.variant],
                  )}
                >
                  <div className="flex flex-col gap-[93px]">
                    <CardTitle lines={service.title} tone={service.labelTone} />
                    <LearnMoreLink dark={service.darkLink} />
                  </div>
                  <img
                    src={service.illustration}
                    alt=""
                    className="mx-auto h-[170px] w-[210px] shrink-0 object-contain sm:mx-0"
                  />
                </article>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
