import { useRef, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styles from "./manage-projects.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import TaskToolbar from "./components/TaskToolbar";
import TaskCard from "./components/TaskCard";
import TaskDetails from "./components/TaskDetails";
import type { Task } from "./components/task-types";

import ExpenseToolbar from "./components/ExpenseToolbar";
import ExpenseCard from "./components/ExpenseCard";
import ExpenseDetails from "./components/ExpenseDetails";
import type { Expense } from "./components/expense-types";
import TeamCard from "./components/TeamCard";
import TeamDetails from "./components/TeamDetails";
import type { TeamMember } from "./components/team-types";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ManageProjectsPage() {
  const currentProjectName = "Current Project";
  const [tasks, setTasks] = useState<Task[]>([
    { id: "T-101", title: "Design task board UI", assignee: "Ava", dueDate: "2026-03-08", status: "In Progress", estimateHours: 6, priority: "High" },
    { id: "T-102", title: "Wire API for tasks", assignee: "Liam", dueDate: "2026-03-10", status: "Todo", estimateHours: 8, priority: "Medium" },
    { id: "T-103", title: "Permission checks", assignee: "Noah", dueDate: "2026-03-06", status: "Blocked", estimateHours: 4, priority: "High" },
    { id: "T-104", title: "Export report view", assignee: "Mia", dueDate: "2026-03-12", status: "Done", estimateHours: 5, priority: "Low" },
  ]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(tasks[0]?.id ?? null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const expensesFileRef = useRef<HTMLInputElement | null>(null);

  const handleAddTask = () => {
    // TODO: Open "Create Task" modal / route
    alert("Open Add Task flow");
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleDownloadBlankTasks = () => {
    const templateUrl = "https://cdn.example.com/blank-tasks.xlsx";
    window.open(templateUrl, "_blank", "noopener,noreferrer");
  };

  const handleExcelImport: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // TODO: Parse and upload Excel (.xlsx/.xls) to backend
    alert(`Imported file: ${file.name}`);
    e.currentTarget.value = "";
  };

  // Expenses
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "E-201", date: "2026-02-15", payee: "Office Supplies Co.", category: "Supplies", amount: 123.45, notes: "Printer ink" },
    { id: "E-202", date: "2026-02-20", payee: "Cloud Provider", category: "Infrastructure", amount: 540.0 },
  ]);
  const [selectedExpenseId, setSelectedExpenseId] = useState<string | null>(expenses[0]?.id ?? null);

  const handleAddExpense = () => {
    alert("Open Add Expense flow");
  };

  const handleExpensesImport: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    alert(`Imported expenses file: ${file.name}`);
    e.currentTarget.value = "";
  };

  const handleDownloadBlankExpenses = () => {
    // Replace this URL with your real CDN-hosted template file.
    const templateUrl = "https://cdn.example.com/blank-expenses.xlsx";
    // Open template in a new tab so the browser handles download or preview.
    window.open(templateUrl, "_blank", "noopener,noreferrer");
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 170, 220, 300],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
  };
  const selectedTask = tasks.find((t) => t.id === selectedTaskId) ?? null;

  // Team / Members
  const [members, setMembers] = useState<TeamMember[]>([
    { id: "M-1", name: "Ava Harper", email: "ava@example.com", role: "Product Manager", assignments: ["Project kickoff", "Requirements"] },
    { id: "M-2", name: "Liam Chen", email: "liam@example.com", role: "Developer", assignments: ["API: Tasks", "Auth middleware"] },
    { id: "M-3", name: "Mia Gomez", email: "mia@example.com", role: "Designer", assignments: [] },
  ]);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(members[0]?.id ?? null);

  return (
    <div>
      <h1>Manage Projects</h1>
      <p>This is the Manage Projects page. Here you can view and manage your current projects.</p>
      <Container>
        <Row id={styles['chart-row']}>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <Bar
              datasetIdKey="id"
              data={{
                labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
                datasets: [
                  {
                    label: 'Billable Minutes',
                    data: [465, 539, 280, 812, 156],
                    backgroundColor: 'rgba(75, 192, 192, 1)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderRadius: 5,
                    borderWidth: 1,
                    animation: {
                      duration: 2000,
                      easing: 'easeInSine',
                    }
                  },
                ],
              }}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <Bar
              datasetIdKey="id"
              data={{
                labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
                datasets: [
                  {
                    label: 'Expenses',
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    animation: {
                      duration: 2000,
                      easing: 'easeInSine',
                    },
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <Bar
              datasetIdKey="id"
              data={{
                labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
                datasets: [
                  {
                    label: 'Project Progress',
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    animation: {
                      duration: 2000,
                      easing: 'easeInSine',
                    },
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </Col>
        </Row>
      </Container>

      <Tabs defaultActiveKey="tasks" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="tasks" style={{ color: 'white' }} title="Tasks">
          <div className="mt-2">
            <TaskToolbar
              projectName={currentProjectName}
              onAdd={handleAddTask}
              onImportClick={handleImportClick}
              fileInputRef={fileInputRef}
              onDownloadBlank={handleDownloadBlankTasks}
            />

            <input ref={fileInputRef} type="file" accept=".xlsx,.xls" style={{ display: "none" }} onChange={handleExcelImport} />

            <Row xs={1} md={2} lg={3} className="g-3">
              {tasks.map((task) => (
                <Col key={task.id}>
                  <TaskCard
                    task={task}
                    selected={selectedTaskId === task.id}
                    onClick={() => setSelectedTaskId(task.id)}
                  />
                </Col>
              ))}
            </Row>

            <TaskDetails task={selectedTask} />
          </div>
        </Tab>
        <Tab eventKey="expenses" title="Expenses">
          <div className="mt-2">
            <ExpenseToolbar
              projectName={currentProjectName}
              onAdd={handleAddExpense}
              onImportClick={() => expensesFileRef.current?.click()}
              onDownloadBlank={handleDownloadBlankExpenses}
              fileInputRef={expensesFileRef}
            />

            <input ref={expensesFileRef} type="file" accept=".xlsx,.xls" style={{ display: "none" }} onChange={handleExpensesImport} />

            <Row xs={1} md={2} lg={3} className="g-3">
              {expenses.map((exp) => (
                <Col key={exp.id}>
                  <ExpenseCard expense={exp} selected={selectedExpenseId === exp.id} onClick={() => setSelectedExpenseId(exp.id)} />
                </Col>
              ))}
            </Row>

            <ExpenseDetails expense={expenses.find((e) => e.id === selectedExpenseId) ?? null} />
          </div>
        </Tab>
        <Tab eventKey="team" title="Team">
          <div className="mt-2">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={() => alert("Open Add Member flow")}>+ Add Member</button>
              </div>
              <small className="text-muted">Team for: {currentProjectName}</small>
            </div>

            <Row xs={1} md={2} lg={3} className="g-3">
              {members.map((m) => (
                <Col key={m.id}>
                  <TeamCard member={m} selected={selectedMemberId === m.id} onClick={() => setSelectedMemberId(m.id)} />
                </Col>
              ))}
            </Row>

            <TeamDetails member={members.find((m) => m.id === selectedMemberId) ?? null} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}