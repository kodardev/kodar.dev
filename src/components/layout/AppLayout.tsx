import { Outlet } from "react-router-dom";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { SiteHeader } from "./SiteHeader";

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border/10 bg-dark py-10 text-on-dark">
        <Container className="flex flex-col items-center gap-4">
          <Logo showWordmark={false} size="sm" className="opacity-90" />
          <p className="text-center text-body-sm text-on-dark/80">
            Kodar — learn by reading the code you run.
          </p>
        </Container>
      </footer>
    </div>
  );
}
