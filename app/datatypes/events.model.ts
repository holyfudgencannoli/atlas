import z from "zod";


const EventSchema = z.object({
  id: z.string(),
  objectId: z.string(),
  objectType: z.string(),
  action: z.string(),
  userId: z.string(),
  data: z.record(z.string(), z.any()).optional(),
  createdAt: z.date(),
});

export type Event = z.infer<typeof EventSchema>;