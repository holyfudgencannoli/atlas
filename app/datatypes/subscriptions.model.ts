import z from "zod";

const SubscriptionSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  provider: z.string(),
  externalCustomerId: z.string(),
  externalSubscriptionId: z.string(),
  plan: z.string(),
  status: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  createdAt: z.date(),
});

export type Subscription = z.infer<typeof SubscriptionSchema>;