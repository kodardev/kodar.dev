import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";

const footerLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"] as const;

export function SiteFooter() {
  return (
    <footer className="mt-[70px] bg-surface pt-10">
      <Container>
        <div
          className="surface-dark rounded-t-card bg-primary px-8 pb-[50px] pt-[55px] text-on-dark md:px-[60px]"
          data-surface="dark"
        >
          <div className="flex flex-col gap-[66px]">
            <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
              <Logo className="text-on-dark" />
              <nav
                className="flex flex-wrap gap-10 text-body underline underline-offset-4"
                aria-label="Footer"
              >
                {footerLinks.map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                ))}
              </nav>
              <img
                src="/assets/home/icon-social-footer.svg"
                alt="Social media"
                className="h-[30px] w-[130px]"
              />
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:gap-[154px]">
              <div className="space-y-[27px]">
                <span className="landing-card-label landing-card-label--accent w-fit whitespace-nowrap text-heading-sm font-medium">
                  Contact us:
                </span>
                <address className="space-y-5 text-body not-italic">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>
                    Address: 1234 Main St
                    <br />
                    Moonstone City, Stardust State 12345
                  </p>
                </address>
              </div>
              <div className="flex flex-col gap-5 rounded-button bg-[#292a32] p-10 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email for newsletter"
                  className="w-full rounded-button border border-on-dark bg-transparent px-[35px] py-[22px] text-body text-on-dark placeholder:text-on-dark/70 sm:max-w-[285px]"
                />
                <Button variant="accent" size="lg" className="shrink-0">
                  Subscribe to news
                </Button>
              </div>
            </div>
          </div>

          <hr className="my-[50px] border-on-dark/30" />
          <div className="flex flex-col gap-4 text-body sm:flex-row sm:gap-10">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="underline underline-offset-4">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
