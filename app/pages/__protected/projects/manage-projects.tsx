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

import { Line, Bar } from "react-chartjs-2";

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
  const lineData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [120, 190, 170, 220, 300],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.4, // smooth lines
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
  return (
    <div>
      <h1>Manage Projects</h1>
      <p>This is the Manage Projects page. Here you can view and manage your current projects.</p>
      <Container>
        <Row id={styles['chart-row']}>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
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
              >
            </Bar>
            
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
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
              >
            </Bar>
            
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
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
              >
            </Bar>
            
          </Col>
        </Row>
      </Container>
      
      
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="tasks" style={{ color: 'white' }} title="Tasks">
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the tasks tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the tasks tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the tasks tab content. It provides an overview of your dashboard and quick access to important features.</p>
          </Tab>
          <Tab eventKey="expenses" title="Expenses">
            <p>This is the expenses tab content. Here you can view and manage your expenses, track your spending, and generate reports.</p>
            <p>This is the expenses tab content. Here you can view and manage your expenses, track your spending, and generate reports.</p>
            <p>This is the expenses tab content. Here you can view and manage your expenses, track your spending, and generate reports.</p>
            <p>This is the expenses tab content. Here you can view and manage your expenses, track your spending, and generate reports.</p>
            <p>This is the expenses tab content. Here you can view and manage your expenses, track your spending, and generate reports.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
          </Tab>
          <Tab eventKey="team" title="Team">
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
            <p>This is the contact tab content. If you need assistance or have any questions, please reach out to our support team through this tab.</p>
          </Tab>
        </Tabs>
    </div>
  );
}