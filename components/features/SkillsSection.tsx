import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/content/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-[90px]">
      <SectionHeader title="Skills" />
      <div className="mt-9 grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="card rounded-[14px] px-5 py-6 transition-[transform,background] duration-200 hover:-translate-y-1 hover:bg-accent-tint motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <p className="mb-4 font-mono text-[12.5px] uppercase tracking-[0.06em] text-accent">
              {group.label}
            </p>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_7px_rgba(102,217,196,0.55)]"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[13px] text-skill-item">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
