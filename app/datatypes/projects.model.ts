import z from "zod";

const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  organizationId: z.string(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  budgetPlanned: z.number().optional(),
  budgetActual: z.number().optional(),
  status: z.string(),
  createdAt: z.date(),
  lastUpdatedAt: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;