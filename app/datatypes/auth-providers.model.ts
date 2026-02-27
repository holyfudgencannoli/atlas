import z from "zod";

const AuthProviderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  provider: z.string(),
  providerId: z.string(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  expiresAt: z.date(),
});

export type AuthProvider = z.infer<typeof AuthProviderSchema>;