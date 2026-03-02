import React from "react";
import { Card } from "react-bootstrap";
import type { Expense } from "./expense-types";

export function ExpenseDetails({ expense }: { expense: Expense | null }) {
  if (!expense) return null;
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{expense.payee} — ${expense.amount.toFixed(2)}</Card.Title>
        <Card.Text className="text-muted">{expense.date} • {expense.category}</Card.Text>
        {expense.notes && <Card.Text>{expense.notes}</Card.Text>}
        {expense.receiptUrl && (
          <Card.Text>
            <a href={expense.receiptUrl} target="_blank" rel="noreferrer">View receipt</a>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExpenseDetails;
