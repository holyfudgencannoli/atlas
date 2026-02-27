import z from "zod";

const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  plan: z.string(),
  createdAt: z.date(),
});

export type Organization = z.infer<typeof OrganizationSchema>;