import React from "react";
import { Card, Badge } from "react-bootstrap";
import type { Task } from "./task-types";

export function TaskDetails({ task }: { task: Task | null }) {
  if (!task) return null;
  return (
    <Card className="mt-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">Selected Task: {task.title}</Card.Title>
          <Badge
            bg={task.status === "Done" ? "success" : task.status === "Blocked" ? "danger" : task.status === "In Progress" ? "warning" : "secondary"}
          >
            {task.status}
          </Badge>
        </div>
        <Card.Text>{task.id} • {task.assignee} • Due {task.dueDate} • {task.estimateHours}h</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TaskDetails;
