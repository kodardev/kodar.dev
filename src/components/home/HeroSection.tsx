import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import stundetsFuns from '@/assets/illustrations/student-learning.svg'

export function HeroSection() {
  return (
    <section className="pt-0">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-8">
          <div className="flex max-w-[531px] flex-col gap-[35px]">
            <h2 className="leading-12">Aprenda Programação, Ciência de Dados e Inteligência Artificial gratuitamente.
            </h2>
            <p className="max-w-[498px] text-heading-sm font-normal leading-7 text-ink">
            O Kodar.dev conecta estudantes de escolas públicas ao mundo da tecnologia, preparando a próxima geração para as oportunidades do futuro.
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
          <div className="w-full max-w-[601px] shrink-0 lg:w-auto">
            <img
              src={stundetsFuns}
              alt=""
              className="h-[515px] w-[601px]"
              width={601}
              height={515}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
