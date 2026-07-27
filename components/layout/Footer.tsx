import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[820px] flex-col gap-2 px-6 py-8 font-mono text-[12.5px] text-muted-dim sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          © {year} {site.name}
        </p>
        <a href={`mailto:${site.email}`} className="text-muted-dim transition-colors hover:text-accent">
          {site.email}
        </a>
      </div>
    </footer>
  );
}
