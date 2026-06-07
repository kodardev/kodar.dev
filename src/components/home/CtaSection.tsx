import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";

export function CtaSection() {
  return (
    <section className="pt-17.5">
      <Container>
        <div className="relative flex flex-col items-end lg:flex-row">
          <div className="landing-card-shadow w-full rounded-card bg-surface-muted px-10 py-15 lg:max-w-310 lg:pr-2/5">
            <div className="flex max-w-lg flex-col gap-7">
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
            className="pointer-events-none relative -mt-10 h-70 w-auto max-w-lg object-contain lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:h-98.5 lg:-translate-y-1/2"
          />
        </div>
      </Container>
    </section>
  );
}
