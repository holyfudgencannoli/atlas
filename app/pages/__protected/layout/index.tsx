import { Col, Container, Row } from "react-bootstrap";
import ProtectedRoute from "~/hooks/protected-route";
import styles from './layout.module.css'
import { Outlet } from "react-router";
import Sidebar from "~/components/sidebar/sidebar.index";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute >
      <Container fluid>
        <Row id={styles['layout-main']} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Col xs={4} sm={4} md={3} lg={3} xl={2} xxl={2} className={styles.sidebar}><Sidebar /></Col>
          <Col xs={8} sm={8} md={9} lg={9} xl={10} xxl={10} className={styles.dashboard}><Outlet /></Col>          
        </Row>
      </Container>
    </ProtectedRoute>

  );
}