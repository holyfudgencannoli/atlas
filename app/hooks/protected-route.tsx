import { Navigate } from "react-router";
import { useAuth } from "./auth-context";
import { Spinner } from "react-bootstrap";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { loading, isAuthenticated } = useAuth();
  console.log("ProtectedRoute - loading:", loading, "isAuthenticated:", isAuthenticated);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}