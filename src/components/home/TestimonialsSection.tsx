import { Container } from "@/components/layout/Container";
import { SectionHeading } from "./shared";

const testimonial = {
  quote:
    '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  name: "John Smith",
  role: "Marketing Director at XYZ Corp",
} as const;

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 pt-17.5">
      <Container className="space-y-section">
        <SectionHeading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          descriptionClassName="lg:max-w-md"
        />
        <div
          className="surface-dark overflow-hidden rounded-card bg-primary px-6 py-16 md:px-12 md:py-21"
          data-surface="dark"
        >
          <div className="mx-auto max-w-xl">
            <div className="relative min-h-64 w-full">
              <img
                src="/assets/home/testimonial-bubble.svg"
                alt=""
                className="block h-auto w-full"
                aria-hidden
              />
              <p className="absolute inset-x-13 top-12 bottom-24 text-body leading-relaxed text-on-dark md:top-12">
                {testimonial.quote}
              </p>
            </div>
            <div className="mt-6 max-w-lg pl-[14%] text-on-dark">
              <p className="text-heading-sm font-medium text-accent">{testimonial.name}</p>
              <p className="text-body">{testimonial.role}</p>
            </div>
          </div>
          <div className="mx-auto mt-31 flex max-w-xl items-center justify-between">
            <button type="button" aria-label="Previous testimonial" className="p-2">
              <img src="/assets/home/icon-arrow-left.svg" alt="" className="h-5 w-5" />
            </button>
            <img src="/assets/home/icon-stars.svg" alt="" className="h-3.5 w-36" aria-hidden />
            <button type="button" aria-label="Next testimonial" className="p-2">
              <img src="/assets/home/icon-arrow-right.svg" alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
