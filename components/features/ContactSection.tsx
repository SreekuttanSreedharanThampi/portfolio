import { site } from "@/content/site";

const socials = [
  { label: "GitHub", href: site.links.github || "#" },
  { label: "LinkedIn", href: site.links.linkedin || "#" },
  { label: "Email", href: `mailto:${site.email}` },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-[90px] pb-10 text-center">
      <p className="mb-3.5 font-mono text-sm text-accent">What&apos;s next?</p>
      <h2 className="mb-4 text-[clamp(30px,7vw,42px)] font-extrabold tracking-[-0.02em] text-foreground">
        Get in touch
      </h2>
      <p className="mx-auto mb-8 max-w-[480px] text-base leading-[1.7] text-muted-foreground">
        I&apos;m open to backend and cloud-native engineering roles. If my work looks like a fit for your
        team, my inbox is always open.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="inline-block rounded-lg border border-accent px-8 py-4 font-mono text-[15px] text-accent transition-colors hover:bg-accent-chip active:bg-accent-chip motion-reduce:transition-none"
      >
        Say hello
      </a>
      <div className="mt-12 flex justify-center gap-6">
        {socials.map((social) => {
          const external = social.href.startsWith("http");
          return (
            <a
              key={social.label}
              href={social.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-mono text-[13px] text-[#7d8aa0] transition-colors hover:text-accent motion-reduce:transition-none"
            >
              {social.label}
            </a>
          );
        })}
      </div>
      <p className="mt-10 font-mono text-[11.5px] text-faint">{site.location}</p>
    </section>
  );
}
