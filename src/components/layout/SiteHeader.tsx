import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { Container } from "./Container";
import { Logo } from "./Logo";

const navLinks = [
  { to: "#about", label: "About us" },
  { to: "#services", label: "Services" },
  { to: "#case-studies", label: "Use Cases" },
  { to: "#pricing", label: "Pricing" },
  { to: "#blog", label: "Blog" },
] as const;

export function SiteHeader() {
  return (
    <header className="bg-surface">
      <Container className="flex items-center justify-between gap-6 py-[30px] xl:my-[60px] xl:py-0">
        <Link to="/" className="text-ink">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 xl:flex" aria-label="Main">
          {navLinks.map(({ to, label }) => (
            <a
              key={label}
              href={to}
              className="text-heading-sm font-normal leading-7 text-ink hover:text-primary"
            >
              {label}
            </a>
          ))}
          <Button variant="secondary" size="lg" className="px-[35px] py-5">
            Request a quote
          </Button>
        </nav>

        <Button variant="secondary" size="md" className="xl:hidden">
          Request a quote
        </Button>
      </Container>
    </header>
  );
}
