import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border/10 bg-dark py-10 text-surface">
        <p className="text-center text-body-sm text-surface/80">
          Bildung — learn by reading the code you run.
        </p>
      </footer>
    </div>
  );
}
