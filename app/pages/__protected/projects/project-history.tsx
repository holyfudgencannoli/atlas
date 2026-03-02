import { useMemo, useState } from "react";
import { Card, Table, Form, InputGroup, Button, Badge } from "react-bootstrap";
import styles from "./project-history.module.css";

type HistoryEntry = {
  id: string;
  date: string; // ISO date
  user: string;
  action: string;
  details?: string;
  category?: "Task" | "Expense" | "Member" | "System";
};

const SAMPLE_HISTORY: HistoryEntry[] = [
  { id: "H-001", date: "2026-03-01T10:15:00Z", user: "Ava Harper", action: "Created task \"Design task board UI\"", details: "Estimate 6h", category: "Task" },
  { id: "H-002", date: "2026-03-01T12:30:00Z", user: "Liam Chen", action: "Commented on task \"Wire API for tasks\"", details: "Need auth", category: "Task" },
  { id: "H-003", date: "2026-02-28T09:05:00Z", user: "Mia Gomez", action: "Uploaded expense receipt", details: "Office Supplies — $123.45", category: "Expense" },
  { id: "H-004", date: "2026-02-25T15:00:00Z", user: "System", action: "Project created", details: "Initial import", category: "System" },
  { id: "H-005", date: "2026-02-20T08:20:00Z", user: "Liam Chen", action: "Assigned to task \"Permission checks\"", details: "Blocked until review", category: "Member" },
];

export default function ProjectHistoryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_HISTORY.filter((e) => {
      if (category !== "All" && e.category !== category) return false;
      if (!q) return true;
      return (
        e.user.toLowerCase().includes(q) ||
        e.action.toLowerCase().includes(q) ||
        (e.details || "").toLowerCase().includes(q)
      );
    }).sort((a, b) => (a.date > b.date ? -1 : 1));
  }, [query, category]);

  return (
    <div className={styles.container}>
      <h1 className="mb-3">Project History</h1>

      <div className={styles.toolbar}>
        <InputGroup>
          <Form.Control
            placeholder="Search history (user, action, details)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} style={{ maxWidth: 180 }}>
            <option value="All">All categories</option>
            <option value="Task">Task</option>
            <option value="Expense">Expense</option>
            <option value="Member">Member</option>
            <option value="System">System</option>
          </Form.Select>
          <Button variant="outline-secondary" onClick={() => { setQuery(""); setCategory("All"); }}>Clear</Button>
        </InputGroup>
      </div>

      {entries.length === 0 ? (
        <Card className={styles.empty}>
          <Card.Body>
            <Card.Text className="text-muted">No matching history entries.</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Table hover responsive className={styles.table}>
          <thead>
            <tr>
              <th style={{ minWidth: 160 }}>Date</th>
              <th style={{ minWidth: 160 }}>User</th>
              <th>Action</th>
              <th style={{ minWidth: 180 }}>Details</th>
              <th style={{ width: 120 }}>Category</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id} className={styles.item}>
                <td><small className="text-muted">{new Date(e.date).toLocaleString()}</small></td>
                <td>{e.user}</td>
                <td>{e.action}</td>
                <td>{e.details}</td>
                <td>{e.category ? <Badge bg="secondary">{e.category}</Badge> : null}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}