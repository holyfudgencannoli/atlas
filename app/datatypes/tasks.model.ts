import z from "zod";

const TaskSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  organizationId: z.string(),
  assigneeId: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  status: z.string(),
  dueDate: z.date().optional(),
  createdAt: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;