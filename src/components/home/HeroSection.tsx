import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="pt-0">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-8">
          <div className="flex max-w-[531px] flex-col gap-[35px]">
            <h1>Navigating the digital landscape for success</h1>
            <p className="max-w-[498px] text-heading-sm font-normal leading-7 text-ink">
              Our digital marketing agency helps businesses grow and succeed online through a
              range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button variant="primary" size="lg">
              Book a consultation
            </Button>
          </div>
          <div className="w-full max-w-[601px] shrink-0 lg:w-auto">
            <img
              src="/assets/home/hero.png"
              alt=""
              className="h-auto w-full max-w-[601px]"
              width={601}
              height={515}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
