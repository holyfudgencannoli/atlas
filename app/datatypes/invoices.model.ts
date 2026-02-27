import z from "zod";

const InvoiceSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  amount: z.number(),
  description: z.string().optional(),
  status: z.string(),
  dueDate: z.date().optional(),
  createdAt: z.date(),
});

export type Invoice = z.infer<typeof InvoiceSchema>;