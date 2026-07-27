import { site } from "@/content/site";

// Fixed vertical email in the bottom-right gutter (desktop only).
export function EmailRail() {
  return (
    <div className="fixed bottom-0 right-[38px] z-40 hidden flex-col items-center gap-6 lg:flex">
      <a
        href={`mailto:${site.email}`}
        className="font-mono text-[12.5px] tracking-[0.12em] text-muted-foreground transition-colors hover:text-accent [writing-mode:vertical-rl] motion-reduce:transition-none"
      >
        {site.email}
      </a>
      <span className="h-24 w-px bg-[rgba(255,255,255,0.22)]" />
    </div>
  );
}
