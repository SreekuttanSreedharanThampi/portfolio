import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(7,13,31,0.88)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[820px] items-center justify-between gap-5 px-6 py-4 sm:px-10">
        <Link href="/" className="font-mono text-[15px] font-semibold text-foreground">
          SST
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          {/* Six links stop fitting below `md`, so the inline nav starts there
              and MobileNav covers everything narrower. */}
          <div className="hidden items-center gap-5 md:flex">
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
            className="rounded-[7px] border border-accent px-3.5 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent-chip active:bg-accent-chip motion-reduce:transition-none md:px-4"
          >
            Resume ↓
          </a>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
