import { experienceList } from "@/content/experience";

// `exp-dim` / `exp-card` power the "hovering one card dims the rest" effect,
// defined in globals.css (motion-reduce safe).
export function ExperienceSection() {
  return (
    <section id="experience" className="exp-dim scroll-mt-[90px]">
      <div className="flex flex-col gap-[18px]">
        {experienceList.map((job, index) => (
          <article
            key={`${job.company}-${index}`}
            className="exp-card rounded-[14px] px-6 py-7 hover:-translate-y-1 hover:bg-accent-tint motion-reduce:hover:translate-y-0 sm:px-[30px]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-[18.5px] font-bold text-foreground">
                {job.title} <span className="text-accent">· {job.company}</span>
              </h3>
              <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-dim">{job.dateRange}</span>
            </div>
            <p className="mb-3.5 mt-1 font-mono text-[12.5px] text-muted-dim">{job.location}</p>
            <ul className="flex flex-col gap-2.5">
              {job.highlights.map((highlight, highlightIndex) => (
                <li
                  key={highlightIndex}
                  className="relative pl-5 text-[14.5px] leading-[1.6] text-muted-foreground"
                >
                  <span className="absolute left-0 top-0 font-mono text-accent" aria-hidden="true">
                    ▸
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-accent-chip2 px-2.5 py-1 font-mono text-[11.5px] text-accent-light"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
