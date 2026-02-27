import z from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  passwordHash: z.string(),
  emailVerified: z.boolean().default(false),
  verifiedAt: z.date().optional(),
  image: z.string().optional(),
  role: z.string().optional(),
  createdAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;