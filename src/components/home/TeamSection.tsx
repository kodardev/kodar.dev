import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { teamMembers } from "./homeContent";
import { SectionHeading } from "./shared";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 pt-[70px]">
      <Container className="space-y-[80px]">
        <SectionHeading
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
          descriptionClassName="lg:max-w-[473px]"
        />
        <div className="grid gap-5 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="landing-card-shadow flex flex-col rounded-card border border-border bg-surface px-[35px] py-10"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                <div className="flex items-end gap-5">
                  <div className="relative size-[98px] shrink-0 overflow-hidden rounded-full bg-accent">
                    <img
                      src={member.photo}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-heading-sm">{member.name}</h4>
                    <p className="text-body text-ink">{member.role}</p>
                  </div>
                </div>
                <img
                  src="/assets/home/icon-linkedin.svg"
                  alt="LinkedIn"
                  className="size-[34px] shrink-0"
                />
              </div>
              <p className="pt-5 text-body text-ink">{member.bio}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-end pt-2">
          <Button variant="primary" size="lg" className={cn("min-w-[269px]")}>
            See all team
          </Button>
        </div>
      </Container>
    </section>
  );
}
