import {
  CaseStudiesSection,
  ContactSection,
  CtaSection,
  HeroSection,
  PartnerLogosSection,
  ProcessSection,
  ServicesSection,
  TeamSection,
  TestimonialsSection,
} from "@/components/home";

export function HomePage() {
  return (
    <div className="overflow-x-hidden pb-0">
      <HeroSection />
      <PartnerLogosSection />
      <ServicesSection />
      <CtaSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
