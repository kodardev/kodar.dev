import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { CardTitle, SectionHeading } from "./shared";

const cardSurfaces = {
  muted: "bg-surface-muted text-ink",
  accent: "bg-accent text-ink",
  dark: "bg-accent text-primary",
} as const;

const services = [
  {
    title: ["Evasão Escolar"],
    description:
      "Mais de 9 milhões de jovens entre 14 e 29 anos não concluíram o Ensino Médio, reduzindo suas oportunidades de desenvolvimento profissional.",
    labelTone: "accent" as const,
    variant: "muted" as const,
    illustration: "/assets/home/service-seo.png",
  },
  {
    title: ["Trabalho Precoce"],
    description:
      "Muitos estudantes precisam começar a trabalhar cedo para ajudar suas famílias, tornando a continuidade dos estudos um desafio diário.",
    labelTone: "surface" as const,
    variant: "accent" as const,
    illustration: "/assets/home/service-ppc.png",
  },
  {
    title: ["Desigualdade Regional"],
    description:
      "Jovens de áreas rurais frequentemente têm menos acesso a recursos educacionais e apresentam menor média de anos de estudo do que aqueles dos grandes centros urbanos.",
    labelTone: "surface" as const,
    variant: "dark" as const,
    illustration: "/assets/home/service-smm.png",
  },
  {
    title: ["Falta de Inclusão Digital"],
    description:
      "O acesso a computadores, internet de qualidade e ferramentas tecnológicas ainda é limitado para grande parte dos alunos da rede pública.",
    labelTone: "accent" as const,
    variant: "muted" as const,
    illustration: "/assets/home/service-email.png",
  },
  {
    title: ["Pouco Acesso à Tecnologia"],
    description:
      "Sem contato com programação, ciência de dados e inteligência artificial, muitos estudantes desconhecem carreiras e oportunidades que poderiam transformar suas vidas.",
    labelTone: "surface" as const,
    variant: "accent" as const,
    illustration: "/assets/home/service-content.png",
  },
  {
    title: ["Talentos Invisíveis"],
    description:
      "Milhares de jovens possuem potencial para inovar, criar e liderar, mas a falta de acesso ao conhecimento e às ferramentas certas impede que desenvolvam suas habilidades.",
    labelTone: "accent" as const,
    variant: "dark" as const,
    illustration: "/assets/home/service-analytics.png",
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 pt-17.5">
      <Container className="space-y-section">
        <SectionHeading
          title="O Desafio que Precisamos Enfrentar"
          description="Milhões de jovens brasileiros possuem talento e potencial, mas enfrentam barreiras que limitam seu acesso à educação, tecnologia e oportunidades profissionais."
        />
        <div className="flex flex-col gap-10">
          {[0, 2, 4].map((rowStart) => (
            <div key={rowStart} className="grid gap-10 lg:grid-cols-2">
              {services.slice(rowStart, rowStart + 2).map((service) => (
                <article
                  key={service.title.join("-")}
                  className={cn(
                    "landing-card-shadow flex min-h-80 flex-col justify-between gap-8 rounded-card border border-border p-12.5 sm:flex-row sm:items-start",
                    cardSurfaces[service.variant],
                  )}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-6">
                    <CardTitle lines={service.title} tone={service.labelTone} />
                    <p className="text-body leading-7">{service.description}</p>
                  </div>
                  <img
                    src={service.illustration}
                    alt=""
                    className="mx-auto h-full w-30 shrink-0 object-contain sm:mx-0"
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
