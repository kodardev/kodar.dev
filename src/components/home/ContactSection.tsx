import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./shared";

export function ContactSection() {
  const [intent, setIntent] = useState<"hi" | "quote">("hi");

  return (
    <section id="contact" className="scroll-mt-24 pt-17.5">
      <Container className="space-y-section">
        <SectionHeading
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <div className="relative flex flex-col items-end lg:flex-row">
          <div className="landing-card-shadow w-full rounded-card bg-surface-muted px-8 pb-20 pt-15 md:px-25 lg:max-w-310 lg:pr-9/20">
            <form className="flex max-w-xl flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <fieldset className="flex flex-wrap gap-9 border-0 p-0">
                <legend className="sr-only">Contact reason</legend>
                {(
                  [
                    ["hi", "Say Hi"],
                    ["quote", "Get a Quote"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className="inline-flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="intent"
                      value={value}
                      checked={intent === value}
                      onChange={() => setIntent(value)}
                      className="sr-only"
                    />
                    {intent === value ? (
                      <img
                        src="/assets/home/icon-radio-selected.svg"
                        alt=""
                        className="size-7"
                        aria-hidden
                      />
                    ) : (
                      <span
                        className="size-7 rounded-full border border-border bg-surface"
                        aria-hidden
                      />
                    )}
                    <span className="text-body text-ink">{label}</span>
                  </label>
                ))}
              </fieldset>
              <div className="flex flex-col gap-6">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Name"
                  className="px-7.5 py-4.5"
                  labelClassName="text-body-sm font-normal"
                />
                <Input
                  label="Email*"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="px-7.5 py-4.5"
                  labelClassName="text-body-sm font-normal"
                />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-body-sm text-ink">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    className={cn(
                      "min-h-48 w-full resize-y rounded-button border border-border bg-surface px-7.5 py-4.5 text-body",
                      "placeholder:text-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    )}
                  />
                </div>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <img
            src="/assets/home/contact-illustration.svg"
            alt=""
            className="pointer-events-none relative -mt-8 h-100 w-auto max-w-3xl object-contain lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-162"
          />
        </div>
      </Container>
    </section>
  );
}
