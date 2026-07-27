import { z } from "zod";

export const experienceEntrySchema = z.object({
  company: z.string().min(1),
  title: z.string().min(1),
  location: z.string().min(1),
  dateRange: z.string().min(1),
  // Full, detailed responsibilities (archival, kept even though the one-pager renders `highlights`).
  bullets: z.array(z.string().min(1)).min(1),
  // Condensed 2-3 line summary shown on the home-page experience card.
  highlights: z.array(z.string().min(1)).min(1),
  // Short tech tags rendered as chips under the card.
  tags: z.array(z.string().min(1)).min(1),
});

export const experienceListSchema = z.array(experienceEntrySchema);
