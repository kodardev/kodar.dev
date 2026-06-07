import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { DISCORD_INVITE_URL } from "@/config/links";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Logo } from "./Logo";

const navLinks = [
  { to: "#about", label: "Sobre nós" },
  { to: "#services", label: "Calendario" },
] as const;

const navLinkClass = "text-heading-sm font-normal leading-7 text-ink hover:text-primary";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5 shrink-0", className)} aria-hidden>
      <use href="/icons.svg#discord-icon" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="bg-surface">
      <Container className="flex items-center justify-between gap-6 py-7.5 xl:my-15 xl:py-0">
        <Link to="/" className="text-ink">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 xl:flex" aria-label="Main">
          {navLinks.map(({ to, label }) => (
            <a key={label} href={to} className={navLinkClass}>
              {label}
            </a>
          ))}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(navLinkClass, "inline-flex items-center gap-2")}
          >
            <DiscordIcon />
            Discord
          </a>
          <Button variant="secondary" size="lg">
            Login
          </Button>
        </nav>

        <Button variant="secondary" size="md" className="xl:hidden">
          Login
        </Button>
      </Container>
    </header>
  );
}
