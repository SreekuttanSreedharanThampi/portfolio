import { AcademicProjects } from "@/components/features/AcademicProjects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProjects } from "@/content/featured";

const cardClass =
  "card rounded-[14px] px-5 py-7 transition-[transform,background] duration-200 hover:-translate-y-1 hover:bg-accent-tint motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-[34px] sm:py-8";

function StackChips({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md bg-accent-chip2 px-2.5 py-1 font-mono text-[12px] text-accent-light"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-[90px]">
      <SectionHeader title="Projects" />
      <div className="mt-8 flex flex-col gap-6">
        {featuredProjects.map((project) => (
          <article key={project.title} className={cardClass}>
            <p className="font-mono text-[12.5px] tracking-[0.04em] text-accent">{project.kind}</p>
            <h3 className="mt-2.5 text-[22px] font-bold text-foreground">{project.title}</h3>
            <p className="mt-1.5 font-mono text-[13px] text-muted-dim">{project.org}</p>
            <p className="mt-3 max-w-[620px] text-[15px] leading-[1.7] text-muted-foreground">
              {project.desc}
            </p>
            <StackChips items={project.stack} />
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[13.5px] text-accent transition-colors hover:text-accent-hover active:text-accent-hover motion-reduce:transition-none"
              >
                Visit site ↗
              </a>
              {project.access ? (
                <p className="font-mono text-[13px] text-muted-dim">
                  {project.access.label}:{" "}
                  <span className="rounded-md bg-accent-chip2 px-2 py-1 text-accent-light">
                    {project.access.value}
                  </span>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <AcademicProjects />
    </section>
  );
}
