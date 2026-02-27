import ProtectedRoute from "~/hooks/protected-route";

export default function NewProjectPage() {
  return (
    // <ProtectedRoute>
      <div>
        <h1>New Project</h1>
        <p>This is the New Project page. Here you can create a new project.</p>
      </div>
    // </ProtectedRoute>
  );
}
