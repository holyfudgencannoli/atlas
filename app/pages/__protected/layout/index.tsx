import { Col, Container, Row } from "react-bootstrap";
import ProtectedRoute from "~/hooks/protected-route";
import styles from './layout.module.css'
import { Outlet } from "react-router";
import Sidebar from "~/components/sidebar/sidebar.index";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute >
      <Container fluid>
        <Row  >
          <Col className={styles.sidebar}><Sidebar /></Col>
          <Col className={styles.dashboard}><Outlet /></Col>          
        </Row>
      </Container>
    </ProtectedRoute>

  );
}