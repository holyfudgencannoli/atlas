import React from "react";
import { Card, Badge } from "react-bootstrap";
import type { Task } from "./task-types";

function statusVariant(status: Task["status"]) {
  switch (status) {
    case "Done":
      return "success";
    case "Blocked":
      return "danger";
    case "In Progress":
      return "warning";
    default:
      return "secondary";
  }
}

type Props = {
  task: Task;
  selected?: boolean;
  onClick?: () => void;
};

export function TaskCard({ task, selected, onClick }: Props) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }} border={selected ? "primary" : undefined}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{task.title}</Card.Title>
          <Badge bg={statusVariant(task.status)}>{task.status}</Badge>
        </div>
        <Card.Text className="mb-1"><strong>ID:</strong> {task.id}</Card.Text>
        <Card.Text className="mb-1"><strong>Assignee:</strong> {task.assignee}</Card.Text>
        <Card.Text className="mb-1"><strong>Due:</strong> {task.dueDate}</Card.Text>
        <Card.Text className="mb-0"><strong>Est.:</strong> {task.estimateHours}h | <strong>Priority:</strong> {task.priority}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
