import { site } from "@/content/site";

export function Hero() {
  const [firstName, ...restName] = site.name.split(" ");

  return (
    <section id="about" className="scroll-mt-[90px]">
      <h1 className="text-[clamp(40px,9vw,62px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground">
        {firstName}
        <br />
        {restName.join(" ")}.
      </h1>
      <p className="mt-4 text-[clamp(22px,5vw,32px)] font-bold leading-[1.1] tracking-[-0.02em] text-muted-dim">
        {site.tagline}
      </p>
      <p className="mt-6 max-w-[600px] text-[17px] leading-[1.75] text-muted-foreground">{site.bio}</p>
      <ul className="mt-7 flex flex-wrap gap-2.5">
        {site.heroTags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-accent-chip-border bg-accent-chip px-3 py-1.5 font-mono text-[12.5px] text-accent-light"
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
