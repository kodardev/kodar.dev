import { Badge, Button, Card, Input, SectionLabel } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { StyleGuideSection } from "@/components/learn/StyleGuideSection";

const brandSwatches = [
  { name: "Black", hex: "#040403", className: "bg-black" },
  { name: "Dusty Olive", hex: "#5b7553", className: "bg-dusty-olive" },
  { name: "Muted Teal", hex: "#8eb897", className: "bg-muted-teal" },
  { name: "Tea Green", hex: "#c3e8bd", className: "bg-tea-green" },
  { name: "Celadon", hex: "#9ddbad", className: "bg-celadon" },
] as const;

const semanticSwatches = [
  { name: "Accent", token: "--color-accent", className: "bg-accent" },
  { name: "Dark", token: "--color-dark", className: "bg-dark" },
  { name: "Surface muted", token: "--color-surface-muted", className: "bg-surface-muted" },
  { name: "Ink", token: "--color-ink", className: "bg-ink" },
] as const;

export function StyleGuidePage() {
  return (
    <div className="py-section">
      <Container className="space-y-section">
        <header className="max-w-3xl space-y-4">
          <SectionLabel>Style guide</SectionLabel>
          <h1>Design system v0.1</h1>
          <p className="text-body text-ink-muted">
            Kodar brand palette — five greens anchored on black — with blocks.cloud-inspired 3D
            elevation, hover lift, and press feedback on interactive controls.
          </p>
          <nav className="flex flex-wrap gap-3 text-body-sm">
            {[
              ["colors", "Colors"],
              ["elevation", "Elevation"],
              ["typography", "Typography"],
              ["buttons", "Buttons"],
              ["cards", "Cards"],
              ["forms", "Forms"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-label border border-border px-3 py-1 hover:bg-surface-muted"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <StyleGuideSection
          id="colors"
          title="Color palette"
          description="Five brand colors in tokens.css, mapped to semantic utilities like bg-accent, text-ink, and text-on-dark."
          learnFile="src/styles/tokens.css"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-heading-sm">Brand</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {brandSwatches.map((swatch) => (
                  <div key={swatch.name} className="space-y-2">
                    <div
                      className={`h-24 rounded-button border border-border ${swatch.className}`}
                    />
                    <p className="font-medium">{swatch.name}</p>
                    <p className="font-mono text-body-sm text-ink-muted">{swatch.hex}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-heading-sm">Semantic</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {semanticSwatches.map((swatch) => (
                  <div key={swatch.name} className="space-y-2">
                    <div
                      className={`h-24 rounded-button border border-border ${swatch.className}`}
                    />
                    <p className="font-medium">{swatch.name}</p>
                    <p className="font-mono text-body-sm text-ink-muted">{swatch.token}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StyleGuideSection>

        <StyleGuideSection
          id="elevation"
          title="Elevation"
          description="Hard offset shadows (no blur) from blocks.cloud — the shadow reads as a solid edge below the surface. Buttons lift on hover and compress on press."
          learnFile="src/styles/tokens.css"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["Small", "shadow-elevation-sm", "--shadow-elevation-sm"],
                ["Medium", "shadow-elevation-md", "--shadow-elevation-md"],
                ["Large", "shadow-elevation-lg", "--shadow-elevation-lg"],
                ["Extra large", "shadow-elevation-xl", "--shadow-elevation-xl"],
              ] as const
            ).map(([name, className, token]) => (
              <div key={token} className="space-y-2">
                <div
                  className={`h-24 rounded-button border-2 border-border bg-surface ${className}`}
                />
                <p className="font-medium">{name}</p>
                <p className="font-mono text-body-sm text-ink-muted">{token}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-prose text-body-sm text-ink-muted">
            Cards use <code className="font-mono">shadow-elevation-md</code> at rest. Buttons add
            the <code className="font-mono">elevation-interactive</code> class for hover lift and
            active press — try clicking the samples below.
          </p>
        </StyleGuideSection>

        <StyleGuideSection
          id="typography"
          title="Typography"
          description="Space Grotesk at display, heading, and body scales for headings and body copy."
          learnFile="src/index.css"
        >
          <div className="space-y-6">
            <div>
              <p className="text-body-sm text-ink-muted">Display / h1</p>
              <h1>Navigating the digital landscape</h1>
            </div>
            <div>
              <p className="text-body-sm text-ink-muted">Heading / h2 + SectionLabel</p>
              <SectionLabel>Services</SectionLabel>
            </div>
            <div>
              <p className="text-body-sm text-ink-muted">Body</p>
              <p className="max-w-prose">
                At our digital marketing agency, we offer a range of services to help businesses
                grow and succeed online.
              </p>
            </div>
          </div>
        </StyleGuideSection>

        <StyleGuideSection
          id="buttons"
          title="Buttons"
          description="Brand color variants with blocks.cloud 3D elevation: 2px border, 4px hard shadow at rest, lift to 6px on hover, compress to 2px on press."
          learnFile="src/components/ui/Button/Button.tsx"
        >
          <div className="flex flex-wrap gap-6">
            <Button variant="primary">Book a consultation</Button>
            <Button variant="secondary">Request a quote</Button>
            <Button variant="accent">Subscribe to news</Button>
          </div>
          <p className="mt-4 text-body-sm text-ink-muted">
            Hover to lift, click to press — the shadow and position animate together.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge variant="accent">New</Badge>
            <Badge variant="dark">Featured</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </StyleGuideSection>

        <StyleGuideSection
          id="cards"
          title="Cards"
          description="Service tiles with brand surfaces and blocks.cloud-style elevation — 2px border plus a 4px hard offset shadow."
          learnFile="src/components/ui/Card/Card.tsx"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <Card variant="default">
              <Badge variant="accent" className="mb-3">
                SEO
              </Badge>
              <h4 className="text-heading-sm">Search engine optimization</h4>
              <p className="mt-2 text-body-sm text-ink-muted">White card — default variant.</p>
            </Card>
            <Card variant="accent">
              <Badge variant="dark" className="mb-3">
                PPC
              </Badge>
              <h4 className="text-heading-sm">Pay-per-click advertising</h4>
              <p className="mt-2 text-body-sm text-ink-muted">Celadon card — accent variant.</p>
            </Card>
            <Card variant="dark">
              <Badge variant="accent" className="mb-3">
                SMM
              </Badge>
              <h4 className="text-heading-sm text-on-dark">Social media marketing</h4>
              <p className="mt-2 text-body-sm text-on-dark/80">Dark card — dark variant.</p>
            </Card>
          </div>
        </StyleGuideSection>

        <StyleGuideSection
          id="forms"
          title="Form controls"
          description="Contact section inputs: rounded corners, black border, accessible labels."
          learnFile="src/components/ui/Input/Input.tsx"
        >
          <form className="mx-auto max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input label="Name" name="name" placeholder="Jane Doe" />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              hint="We never share your email."
            />
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </form>
        </StyleGuideSection>
      </Container>
    </div>
  );
}
