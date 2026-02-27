import z from "zod";

const MembershipSchema = z.object({
  id: z.string(),
  userId: z.string(),
  organizationId: z.string(),
  role: z.string(),
  createdAt: z.date()
});

export type Membership = z.infer<typeof MembershipSchema>;