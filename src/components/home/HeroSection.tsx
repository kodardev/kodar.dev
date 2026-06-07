import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import stundetsFuns from "@/assets/illustrations/student-learning.svg";

export function HeroSection() {
  return (
    <section className="pt-0">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-8">
          <div className="flex max-w-132.75 flex-col gap-9">
            <h2 className="leading-12">
              Aprenda Programação, Ciência de Dados e Inteligência Artificial gratuitamente.
            </h2>
            <p className="max-w-124.5 text-heading-sm font-normal leading-7 text-ink">
              O Kodar.dev conecta estudantes de escolas públicas ao mundo da tecnologia, preparando
              a próxima geração para as oportunidades do futuro.
            </p>
            <div className="flex items-center gap-10">
              <Button variant="primary" size="lg" className="flex-1">
                Para Escolas
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                Para Alunos
              </Button>
            </div>
          </div>
          <div className="w-full max-w-150.25 shrink-0 lg:w-auto">
            <img
              src={stundetsFuns}
              alt=""
              className="h-128.75 w-150.25"
              width={601}
              height={515}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
