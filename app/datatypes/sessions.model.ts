import z from "zod";

const SessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  refreshToken: z.string(),
  accessToken: z.string(),
  expiresAt: z.date(),
  createdAt: z.date(),
  revoked: z.boolean(),
  deviceInfo: z.string().optional(),
  ipAddress: z.string().optional(),
});

export type Session = z.infer<typeof SessionSchema>;