export type Task = {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  status: "Todo" | "In Progress" | "Blocked" | "Done";
  estimateHours: number;
  priority: "Low" | "Medium" | "High";
};
