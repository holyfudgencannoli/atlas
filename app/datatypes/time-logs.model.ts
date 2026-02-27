import z from "zod";

const TimeLogSchema = z.object({
  id: z.string(),
  userId: z.string(),
  projectId: z.string(),
  organizationId: z.string(),
  taskId: z.string(),
  startTime: z.date(),
  endTime: z.date().optional(),
  minutes: z.number().optional(),
  billable: z.boolean(),
  hourlyRate: z.number().optional(),
  createdAt: z.date(),
});

export type TimeLog = z.infer<typeof TimeLogSchema>;