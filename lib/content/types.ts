import { z } from "zod";
import { academicProjectSchema, experienceEntrySchema } from "./schema";

export type ExperienceEntry = z.infer<typeof experienceEntrySchema>;
export type AcademicProject = z.infer<typeof academicProjectSchema>;
