import { Container } from "@/components/layout/Container";

const partnerLogos = [
  { name: "Amazon", src: "/assets/home/logo-amazon.svg" },
  { name: "Dribbble", src: "/assets/home/logo-dribbble.svg" },
  { name: "HubSpot", src: "/assets/home/logo-hubspot.svg" },
  { name: "Notion", src: "/assets/home/logo-notion.svg" },
  { name: "Netflix", src: "/assets/home/logo-netflix.svg" },
  { name: "Zoom", src: "/assets/home/logo-zoom.svg" },
] as const;

export function PartnerLogosSection() {
  return (
    <section className="pt-17.5">
      <Container>
        <ul className="flex flex-wrap items-center justify-between gap-8 md:gap-6">
          {partnerLogos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto max-w-35 object-contain object-left mix-blend-luminosity md:h-12"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
