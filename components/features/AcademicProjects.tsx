import { academicProjects } from "@/content/academic";

/**
 * Six academic projects would swamp the one professional project if they were
 * all expanded, so each collapses to a title, date and tag row.
 *
 * Built on <details>/<summary> rather than React state: no client bundle, no
 * hydration, keyboard and screen-reader behaviour for free, and it still works
 * with JavaScript disabled. `group-open:` variants drive the open/closed styling.
 */
const VISIBLE_TAGS = 5;

const chipClass =
  "rounded-md bg-accent-chip2 px-2.5 py-1 font-mono text-[11.5px] text-accent-light";

export function AcademicProjects() {
  return (
    <div className="mt-14">
      <h3 className="font-mono text-[12.5px] uppercase tracking-[0.08em] text-muted-dim">
        Academic projects
      </h3>
      <div className="mt-5 flex flex-col gap-3.5">
        {academicProjects.map((project) => {
          const shown = project.stack.slice(0, VISIBLE_TAGS);
          const rest = project.stack.slice(VISIBLE_TAGS);

          return (
            <details
              key={project.title}
              className="card group rounded-[14px] transition-[background] duration-200 open:bg-accent-tint hover:bg-accent-tint motion-reduce:transition-none"
            >
              <summary className="cursor-pointer list-none px-5 py-5 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-mono text-[12px] tracking-[0.04em] text-accent">
                      Academic · {project.category}
                    </p>
                    <h4 className="mt-2 text-[17.5px] font-bold leading-snug text-foreground">
                      {project.title}
                    </h4>
                    <p className="mt-1 font-mono text-[12.5px] text-muted-dim">
                      {project.institution}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-dim">
                      {project.dateRange}
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-6 place-items-center rounded-full border border-accent-chip-border text-accent transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-3.5"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {shown.map((tag) => (
                    <li key={tag} className={chipClass}>
                      {tag}
                    </li>
                  ))}
                  {rest.map((tag) => (
                    <li key={tag} className={`${chipClass} hidden group-open:block`}>
                      {tag}
                    </li>
                  ))}
                  {rest.length > 0 ? (
                    <li className="px-1 py-1 font-mono text-[11.5px] text-muted-dim group-open:hidden">
                      +{rest.length} more
                    </li>
                  ) : null}
                </ul>
              </summary>

              <div className="border-t border-border px-5 pb-6 pt-5 sm:px-7">
                <p className="max-w-[620px] text-[14.5px] leading-[1.7] text-muted-foreground">
                  {project.summary}
                </p>
                <p className="mb-3 mt-5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-muted-dim">
                  Key highlights
                </p>
                <ul className="flex flex-col gap-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-[14px] leading-[1.6] text-muted-foreground"
                    >
                      <span
                        className="absolute left-0 top-0 font-mono text-accent"
                        aria-hidden="true"
                      >
                        ▸
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
