import { Container } from "@/components/layout/Container";
import { partnerLogos } from "./homeContent";

export function PartnerLogosSection() {
  return (
    <section className="pt-[70px]">
      <Container>
        <ul className="flex flex-wrap items-center justify-between gap-8 md:gap-6">
          {partnerLogos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto max-w-[140px] object-contain object-left mix-blend-luminosity md:h-12"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
