import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./shared";

export function ContactSection() {
  const [intent, setIntent] = useState<"hi" | "quote">("hi");

  return (
    <section id="contact" className="scroll-mt-24 pt-[70px]">
      <Container className="space-y-[80px]">
        <SectionHeading
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <div className="relative flex flex-col items-end lg:flex-row">
          <div className="landing-card-shadow w-full rounded-card bg-surface-muted px-8 pb-20 pt-[60px] md:px-[100px] lg:max-w-[1240px] lg:pr-[45%]">
            <form
              className="flex max-w-[556px] flex-col gap-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <fieldset className="flex flex-wrap gap-[35px] border-0 p-0">
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
                      <span className="size-7 rounded-full border border-border bg-surface" aria-hidden />
                    )}
                    <span className="text-body text-ink">{label}</span>
                  </label>
                ))}
              </fieldset>
              <div className="flex flex-col gap-[25px]">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Name"
                  className="px-[30px] py-[18px]"
                  labelClassName="text-body-sm font-normal"
                />
                <Input
                  label="Email*"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="px-[30px] py-[18px]"
                  labelClassName="text-body-sm font-normal"
                />
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="message" className="text-body-sm text-ink">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    className={cn(
                      "min-h-[190px] w-full resize-y rounded-button border border-border bg-surface px-[30px] py-[18px] text-body",
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
            className="pointer-events-none relative -mt-8 h-[400px] w-auto max-w-[692px] object-contain lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[648px]"
          />
        </div>
      </Container>
    </section>
  );
}
