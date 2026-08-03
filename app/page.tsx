import { ContactSection } from "@/components/features/ContactSection";
import { CursorGlow } from "@/components/features/CursorGlow";
import { EmailRail } from "@/components/features/EmailRail";
import { EducationSection } from "@/components/features/EducationSection";
import { ExperienceSection } from "@/components/features/ExperienceSection";
import { Hero } from "@/components/features/Hero";
import { ProjectsSection } from "@/components/features/ProjectsSection";
import { SkillsSection } from "@/components/features/SkillsSection";

export default function Home() {
  return (
    <div className="relative">
      <CursorGlow />
      <div className="relative z-10 mx-auto flex max-w-[820px] flex-col gap-16 px-5 py-12 sm:gap-24 sm:px-10 sm:py-[72px]">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <EmailRail />
    </div>
  );
}
