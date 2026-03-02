import React from "react";
import { Card, Image } from "react-bootstrap";
import type { TeamMember } from "./team-types";

type Props = {
  member: TeamMember;
  selected?: boolean;
  onClick?: () => void;
};

export function TeamCard({ member, selected, onClick }: Props) {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }} border={selected ? "primary" : undefined}>
      <Card.Body className="d-flex align-items-center gap-3">
        {member.avatarUrl ? (
          <Image src={member.avatarUrl} roundedCircle width={48} height={48} alt={member.name} />
        ) : (
          <div style={{ width: 48, height: 48, borderRadius: 24, background: "#eee" }} />
        )}
        <div className="flex-grow-1">
          <Card.Title className="mb-0">{member.name}</Card.Title>
          <small className="text-muted">{member.role}</small>
        </div>
        <div className="text-end">
          <small className="text-muted">{member.assignments.length} assignments</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;
