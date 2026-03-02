import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import type { TeamMember } from "./team-types";

export function TeamDetails({ member }: { member: TeamMember | null }) {
  if (!member) return null;
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{member.name} — <small className="text-muted">{member.role}</small></Card.Title>
        {member.email && <Card.Text className="mb-2">{member.email}</Card.Text>}

        <h6>Assignments</h6>
        {member.assignments.length === 0 ? (
          <Card.Text className="text-muted">No current assignments</Card.Text>
        ) : (
          <ListGroup>
            {member.assignments.map((a, i) => (
              <ListGroup.Item key={i}>{a}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

export default TeamDetails;
