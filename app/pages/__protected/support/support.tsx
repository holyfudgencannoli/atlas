import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert } from "react-bootstrap";
import styles from "./support.module.css";

export default function SupportPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | null; text?: string }>({ type: null });

  const submitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) {
      setStatus({ type: "error", text: "Please provide a subject and message." });
      return;
    }

    // TODO: wire to backend ticket API
    setStatus({ type: "success", text: "Support ticket submitted (simulated)." });
    setSubject("");
    setMessage("");
  };

  return (
    <Container className={styles.container}>
      <h1 className="mb-3">Support</h1>

      <Row>
        <Col md={7}>
          <p className="text-muted">Open a support ticket and our team will respond. Or email us directly at <strong>[support@example.com]</strong> (replace placeholder).</p>

          {status.type === "success" && <Alert variant="success">{status.text}</Alert>}
          {status.type === "error" && <Alert variant="danger">{status.text}</Alert>}

          <Form onSubmit={submitTicket}>
            <Form.Group className="mb-3" controlId="supportEmail">
              <Form.Label>Your email (optional)</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="supportSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Short summary" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="supportMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe the issue" />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button type="submit">Submit Ticket</Button>
              <Button variant="outline-secondary" href="mailto:REPLACE_ME@EXAMPLE.COM">Email Support</Button>
            </div>
          </Form>
        </Col>

        <Col md={5} className="mt-4 mt-md-0">
          <div className={styles.helpBox}>
            <h5>What to include</h5>
            <ul>
              <li>Steps to reproduce the issue</li>
              <li>Expected vs actual behavior</li>
              <li>Screenshots or logs if available</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
