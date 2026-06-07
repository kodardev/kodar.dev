import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./shared";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    photo: "/assets/home/team-john.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    photo: "/assets/home/team-jane.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    photo: "/assets/home/team-michael.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    photo: "/assets/home/team-emily.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    photo: "/assets/home/team-john.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    photo: "/assets/home/team-john.png",
  },
] as const;

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 pt-17.5">
      <Container className="space-y-section">
        <SectionHeading
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
          descriptionClassName="lg:max-w-md"
        />
        <div className="grid gap-5 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="landing-card-shadow flex flex-col rounded-card border border-border bg-surface px-9 py-10"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                <div className="flex items-end gap-5">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-accent">
                    <img src={member.photo} alt="" className="size-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-heading-sm">{member.name}</h4>
                    <p className="text-body text-ink">{member.role}</p>
                  </div>
                </div>
                <img
                  src="/assets/home/icon-linkedin.svg"
                  alt="LinkedIn"
                  className="size-8.5 shrink-0"
                />
              </div>
              <p className="pt-5 text-body text-ink">{member.bio}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-end pt-2">
          <Button variant="primary" size="lg" className={cn("min-w-68")}>
            See all team
          </Button>
        </div>
      </Container>
    </section>
  );
}
