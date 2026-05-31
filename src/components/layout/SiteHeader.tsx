import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-body-sm font-medium transition-colors hover:text-dark",
    isActive ? "text-dark underline underline-offset-4" : "text-ink-muted",
  );

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/10 bg-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <NavLink to="/" className="flex items-center gap-2 text-heading-sm font-medium">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent text-ink">
            ★
          </span>
          Bildung
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/style-guide" className={navLinkClass}>
            Style guide
          </NavLink>
        </nav>

        <Button variant="secondary" size="md" className="hidden sm:inline-flex">
          Explore code
        </Button>
      </Container>
    </header>
  );
}
