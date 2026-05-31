import { Link } from "react-router-dom";
import {
  SectionLabel,
  buttonBaseStyles,
  buttonSizeStyles,
  buttonVariantStyles,
  cardBaseStyles,
} from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

export function HomePage() {
  return (
    <div>
      <section className="py-section">
        <Container>
          <div className="grid items-center gap-block lg:grid-cols-2">
            <div className="space-y-6">
              <SectionLabel>Learn by building</SectionLabel>
              <h1 className="max-w-xl">
                Understand the app you use — one file at a time
              </h1>
              <p className="max-w-lg text-body text-ink-muted">
                This project is structured for education: design tokens, UI components,
                and pages are organized so you can trace every pixel back to code. Design
                inspired by Positivus; layout rhythm influenced by blocks.cloud.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/style-guide"
                  className={cn(
                    buttonBaseStyles,
                    buttonVariantStyles.primary,
                    buttonSizeStyles.lg,
                  )}
                >
                  View style guide
                </Link>
                <Link
                  to="/style-guide#colors"
                  className={cn(
                    buttonBaseStyles,
                    buttonVariantStyles.secondary,
                    buttonSizeStyles.lg,
                  )}
                >
                  Start with tokens
                </Link>
              </div>
            </div>

            <div
              className="relative flex aspect-[4/3] items-center justify-center rounded-card border border-border bg-surface-muted p-8"
              aria-hidden
            >
              <div className="absolute inset-8 rounded-card border-2 border-dashed border-accent/60" />
              <p className="relative z-10 max-w-xs text-center text-body-sm text-ink-muted">
                Hero illustration placeholder — students will replace this when building
                the landing page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-section">
        <Container>
          <h2 className="text-heading-md">How to explore</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tokens",
                text: "Start in src/styles/tokens.css — colors and type scales live here.",
              },
              {
                step: "02",
                title: "Components",
                text: "Open src/components/ui — each folder is one primitive with variants.",
              },
              {
                step: "03",
                title: "Pages",
                text: "See how pieces compose in src/pages, especially the style guide.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className={cn(cardBaseStyles, "bg-surface p-6")}
              >
                <span className="text-heading-lg font-medium text-accent">{item.step}</span>
                <h3 className="mt-2">{item.title}</h3>
                <p className="mt-2 text-body-sm text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
