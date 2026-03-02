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
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}> 
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>          

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