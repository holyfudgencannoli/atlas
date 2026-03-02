import React from "react";
import { Card } from "react-bootstrap";
import type { Expense } from "./expense-types";

type Props = {
  expense: Expense;
  selected?: boolean;
  onClick?: () => void;
};

export function ExpenseCard({ expense, selected, onClick }: Props) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }} border={selected ? "primary" : undefined}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <Card.Title className="mb-0">{expense.payee}</Card.Title>
            <small className="text-muted">{expense.category}</small>
          </div>
          <div className="text-end">
            <div><strong>${expense.amount.toFixed(2)}</strong></div>
            <small className="text-muted">{expense.date}</small>
          </div>
        </div>
        {expense.notes && <Card.Text className="mb-0">{expense.notes}</Card.Text>}
      </Card.Body>
    </Card>
  );
}

export default ExpenseCard;
