import React from 'react';
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import ProtectedRoute from '~/hooks/protected-route';
import styles from './dashboard.module.css'


export default function DashboardPage() {'card-display'    
  return (
    <div id={styles['dashboard-main']}>
      <div style={{ padding: '2rem' }}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Here you can view your projects, manage your account, and access support resources.</p>
        <Container  id={styles['card-display']}>
          <Row >
            <Col className={styles.card} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card >
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.card} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.card} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className={styles.card} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.card} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className={styles.card} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>          

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
            <p>This is the home tab content. It provides an overview of your dashboard and quick access to important features.</p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
            <p>This is the profile tab content. Here you can view and edit your personal information, change your password, and manage your account settings.</p>
          </Tab>
          <Tab eventKey="contact" title="Contact">
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
    {/* <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </svg> */}
    </div>

  );
}

// ... somewhere else, render it ...
// <Dashboard />