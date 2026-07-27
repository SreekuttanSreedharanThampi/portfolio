import Link from "next/link";
import { site } from "@/content/site";

// Anchor targets point at the home page (/#…) so the nav also works from
// the case-study routes, not just the one-pager itself.
const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(7,13,31,0.88)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[820px] items-center justify-between gap-5 px-6 py-4 sm:px-10">
        <Link href="/" className="font-mono text-[15px] font-semibold text-foreground">
          SST
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[13px] text-muted-foreground transition-colors hover:text-accent motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={site.resumeHref}
            download
            className="rounded-[7px] border border-accent px-4 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent-chip motion-reduce:transition-none"
          >
            Resume ↓
          </a>
        </div>
      </nav>
    </header>
  );
}
