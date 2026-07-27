import { z } from "zod";
import { experienceEntrySchema } from "./schema";

export type ExperienceEntry = z.infer<typeof experienceEntrySchema>;
