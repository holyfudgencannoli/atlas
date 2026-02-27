import z from "zod";

const ClientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().optional(),
  createdAt: z.date(),
});

export type Client = z.infer<typeof ClientSchema>;