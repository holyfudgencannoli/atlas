import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./account-details.module.css";

function maskCard(card?: string) {
  if (!card) return "No billing method";
  const s = String(card).replace(/\s+/g, "");
  const last4 = s.slice(-4);
  return `**** **** **** ${last4}`;
}

export default function AccountDetailsPage() {
  // Preliminary/mock data — replace with real data from backend
  const user = { name: "Ava Harper", email: "ava@example.com" };
  const billing = { cardNumber: "4242424242424242", billingAddress: "Acme Corp" };
  const subscription = { plan: "Pro", renewalDate: "2026-04-01" };

  return (
    <Container className={styles.container}>
      <h1 className="mb-3">Account Details</h1>

      <Row className="g-3">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {user.name}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Button variant="outline-primary" onClick={() => alert("Change password flow (placeholder)")}>Change Password</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Billing</Card.Title>
              <Card.Text>
                <strong>Card:</strong> {maskCard(billing.cardNumber)}
              </Card.Text>
              <Card.Text>
                <strong>Account:</strong> {billing.billingAddress}
              </Card.Text>
              <Button variant="outline-secondary" onClick={() => alert("Manage billing (placeholder)")}>Manage Billing</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Subscription</Card.Title>
              <Card.Text>
                <strong>Plan:</strong> {subscription.plan}
              </Card.Text>
              <Card.Text>
                <strong>Next Renewal:</strong> {new Date(subscription.renewalDate).toLocaleDateString()}
              </Card.Text>
              <Button variant="outline-info" onClick={() => alert("Change plan (placeholder)")}>Change Plan</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Security</Card.Title>
              <Card.Text className="text-muted">Two-factor authentication, sessions, and security settings will appear here.</Card.Text>
              <Button variant="outline-warning" onClick={() => alert("Manage security (placeholder)")}>Manage Security</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
