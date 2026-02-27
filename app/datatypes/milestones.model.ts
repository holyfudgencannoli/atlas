import z from "zod";

const MilestoneSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  title: z.string(),
  targetDate: z.date(),
  completed: z.boolean(),
  createdAt: z.date()
});

export type Milestone = z.infer<typeof MilestoneSchema>;