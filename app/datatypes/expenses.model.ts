import z from "zod";

const ExpenseSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  userId: z.string(),
  amount: z.number(),
  description: z.string().optional(),
  incurredAt: z.date(),
  createdAt: z.date(),
});

export type Expense = z.infer<typeof ExpenseSchema>;