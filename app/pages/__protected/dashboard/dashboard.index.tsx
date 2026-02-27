import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProtectedRoute from '~/hooks/protected-route';


export default function DashboardPage() {    
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => { 
    e.preventDefault();
    // await login(email, password);
    // await fetch("https://atlas-api.moshimoshi8246.workers.dev/api/me")
    await fetch("http://localhost:8787/api/v1/auth/login")
  };


  return (
    <div>
      <div style={{ padding: '4rem' }}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Here you can view your projects, manage your account, and access support resources.</p>
        <Container>
          <Row>
            <Col> 
              <Card style={{ width: '18rem', backgroundColor: '#f8f9fa', padding : '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '1rem auto' }}>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', backgroundColor: '#f8f9fa', padding : '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '1rem auto' }}>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> 
              <Card style={{ width: '18rem', backgroundColor: '#f8f9fa', padding : '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '1rem auto' }}>
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
            <Col> 
              <Card style={{ width: '18rem', backgroundColor: '#f8f9fa', padding : '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '1rem auto' }}>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', backgroundColor: '#f8f9fa', padding : '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '1rem auto' }}>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    This is a brief description of Project 1. It includes details about the project's goals, timeline, and team members.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col> 
              <Card style={{ width: '18rem', backgroundColor: '#f8f9fa', padding : '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '1rem auto' }}>
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
    <Button onClick={(e) => onSubmit(e)}>Submit</Button>
    </div>

  );
}

// ... somewhere else, render it ...
// <Dashboard />