import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";

export function CtaSection() {
  return (
    <section className="pt-[70px]">
      <Container>
        <div className="relative flex flex-col items-end lg:flex-row">
          <div className="landing-card-shadow w-full rounded-card bg-surface-muted px-10 py-[60px] lg:max-w-[1240px] lg:pr-[40%]">
            <div className="flex max-w-[500px] flex-col gap-[26px]">
              <h3>Let&apos;s make things happen</h3>
              <p className="text-body text-ink">
                Contact us today to learn more about how our digital marketing services can help
                your business grow and succeed online.
              </p>
              <Button variant="primary" size="lg" className="w-fit">
                Get your free proposal
              </Button>
            </div>
          </div>
          <img
            src="/assets/home/cta-illustration.svg"
            alt=""
            className="pointer-events-none relative -mt-10 h-[280px] w-auto max-w-[494px] object-contain lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:h-[394px] lg:-translate-y-1/2"
          />
        </div>
      </Container>
    </section>
  );
}
