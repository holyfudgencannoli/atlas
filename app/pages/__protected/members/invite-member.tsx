import { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button, Badge, ListGroup } from "react-bootstrap";
import styles from "./invite-member.module.css";

type Invite = {
  email: string;
  role: string;
  invitedAt: string;
  status: "Pending" | "Sent" | "Failed";
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InviteMemberPage() {
  const [emailInput, setEmailInput] = useState("");
  const [pendingEmails, setPendingEmails] = useState<string[]>([]);
  const [role, setRole] = useState("Member");
  const [message, setMessage] = useState("");
  const [invited, setInvited] = useState<Invite[]>([]);
  const [error, setError] = useState<string | null>(null);

  function addEmail() {
    const email = emailInput.trim();
    if (!email) return;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (pendingEmails.includes(email) || invited.find((i) => i.email === email)) {
      setError("Email already added or invited.");
      return;
    }
    setPendingEmails((p) => [...p, email]);
    setEmailInput("");
    setError(null);
  }

  function removePending(email: string) {
    setPendingEmails((p) => p.filter((e) => e !== email));
  }

  async function handleInvite() {
    if (pendingEmails.length === 0) {
      setError("Add at least one email to invite.");
      return;
    }

    // Simulate API invite call -- replace with real POST to backend
    const now = new Date().toISOString();
    const newInvites: Invite[] = pendingEmails.map((e) => ({
      email: e,
      role,
      invitedAt: now,
      status: "Pending",
    }));

    setInvited((prev) => [...newInvites, ...prev]);
    setPendingEmails([]);
    setMessage("");
    setError(null);
  }

  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={12}>
          <h2>Invite Members</h2>
          <p className="text-muted">Invite people to the organization by email. Invites will be sent to the addresses you add.</p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={8} lg={6}>
          <InputGroup>
            <Form.Control
              placeholder="Enter email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addEmail(); } }}
            />
            <Button variant="outline-secondary" onClick={addEmail}>Add</Button>
          </InputGroup>

          {error && <div className="text-danger mt-2">{error}</div>}

          <div className="mt-3">
            {pendingEmails.length > 0 && (
              <div className={styles.pendingList}>
                {pendingEmails.map((e) => (
                  <Badge key={e} bg="light" text="dark" className={styles.chip}>
                    {e} <button className={styles.removeBtn} onClick={() => removePending(e)} aria-label={`Remove ${e}`}>&times;</button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Form.Group className="mt-3" controlId="inviteRole">
            <Form.Label>Role</Form.Label>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Member</option>
              <option>Admin</option>
              <option>Viewer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3" controlId="inviteMessage">
            <Form.Label>Optional message</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>

          <div className="mt-3 d-flex gap-2">
            <Button variant="primary" onClick={handleInvite}>Send Invites</Button>
            <Button variant="outline-secondary" onClick={() => { setPendingEmails([]); setEmailInput(""); setError(null); }}>Clear</Button>
          </div>
        </Col>

        <Col md={4} lg={6} className="mt-4 mt-md-0">
          <h5>Invited</h5>
          {invited.length === 0 ? (
            <div className="text-muted">No invites yet.</div>
          ) : (
            <ListGroup>
              {invited.map((i) => (
                <ListGroup.Item key={i.email} className="d-flex justify-content-between align-items-start">
                  <div>
                    <div><strong>{i.email}</strong></div>
                    <small className="text-muted">{i.role} • invited {new Date(i.invitedAt).toLocaleString()}</small>
                    {message && <div className="mt-1"><small className="text-muted">Message included</small></div>}
                  </div>
                  <div>
                    <Badge bg={i.status === "Pending" ? "warning" : i.status === "Sent" ? "success" : "danger"}>{i.status}</Badge>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}
