import { Container } from "@/components/layout/Container";
import { testimonial } from "./homeContent";
import { SectionHeading } from "./shared";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 pt-[70px]">
      <Container className="space-y-[80px]">
        <SectionHeading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          descriptionClassName="lg:max-w-[473px]"
        />
        <div
          className="surface-dark overflow-hidden rounded-card bg-primary px-6 py-16 md:px-12 md:py-[84px]"
          data-surface="dark"
        >
          <div className="mx-auto max-w-[606px]">
            <div className="relative min-h-[266px] w-full">
              <img
                src="/assets/home/testimonial-bubble.svg"
                alt=""
                className="block h-auto w-full"
                aria-hidden
              />
              <p className="absolute inset-x-[52px] top-12 bottom-24 text-body leading-relaxed text-on-dark md:top-[48px]">
                {testimonial.quote}
              </p>
            </div>
            <div className="mt-6 max-w-[526px] pl-[14%] text-on-dark">
              <p className="text-heading-sm font-medium text-accent">{testimonial.name}</p>
              <p className="text-body">{testimonial.role}</p>
            </div>
          </div>
          <div className="mx-auto mt-[124px] flex max-w-[564px] items-center justify-between">
            <button type="button" aria-label="Previous testimonial" className="p-2">
              <img src="/assets/home/icon-arrow-left.svg" alt="" className="h-5 w-5" />
            </button>
            <img src="/assets/home/icon-stars.svg" alt="" className="h-3.5 w-[146px]" aria-hidden />
            <button type="button" aria-label="Next testimonial" className="p-2">
              <img src="/assets/home/icon-arrow-right.svg" alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
