import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function FooterSection1() {
  return (
    <footer className="mt-10 border-t border-border bg-[var(--accent)] py-10 font-sans">
      <div className="container mx-auto flex flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-center">
        <div className="flex w-full max-w-md flex-col gap-3">
          <span className="text-lg font-semibold text-[var(--accent-foreground)] sm:text-xl">
            WEGE Lapak
          </span>
          <span className="text-sm text-[var(--accent-foreground)]/80 sm:text-base">
            Wegelapak adalah usaha UMKM lokal yang menghadirkan berbagai produk
            pilihan seperti makanan, minuman, dan hampers berkualitas dengan
            cita rasa khas serta kemasan menarik untuk berbagai kebutuhan.
          </span>
          <form className="mt-4 flex w-full items-end gap-2">
            <div className="flex w-full max-w-xs flex-col">
              <Label
                htmlFor="footer-subscribe"
                className="mb-1 text-sm font-medium text-[var(--accent-foreground)]"
              >
                Subscribe
              </Label>
              <Input
                id="footer-subscribe"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white text-[var(--accent)] border-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <Button
              type="submit"
              className="h-9 px-4 text-sm font-medium bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <div className="justify-left flex w-full max-w-2xl flex-col gap-12 sm:flex-row">
          <div>
            <h3 className="mb-2 text-base font-semibold text-[var(--accent-foreground)]">
              Home
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Blog & News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-[var(--accent-foreground)]">
              Security
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  User Agreements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Copyright
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-[var(--accent-foreground)]">
              Social Media
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--accent-foreground)]/80 hover:text-[var(--accent-foreground)]"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
