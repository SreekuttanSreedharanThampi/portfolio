import { SectionHeader } from "@/components/ui/SectionHeader";
import { educationList } from "@/content/education";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-[90px]">
      <SectionHeader title="Education" />
      <div className="mt-8 flex flex-col gap-3.5">
        {educationList.map((entry) => (
          <article
            key={entry.institution}
            className="card rounded-[14px] px-5 py-6 transition-[transform,background] duration-200 hover:-translate-y-1 hover:bg-accent-tint motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-[30px]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[17.5px] font-bold text-foreground">{entry.degree}</h3>
              <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-dim">
                {entry.dateRange}
              </span>
            </div>
            <p className="mt-1.5 text-[14.5px] leading-[1.6] text-accent-light">
              {entry.institution}
            </p>
            {entry.detail ? (
              <p className="mt-2 font-mono text-[12.5px] leading-[1.6] text-muted-dim">
                {entry.detail}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
