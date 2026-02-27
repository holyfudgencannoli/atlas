import DashboardPage from "~/pages/__protected/dashboard/dashboard.index";
import type { Route } from "./+types/new-project";
import NewProjectPage from "~/pages/__protected/projects/new-project";
import ProtectedRoute from "~/hooks/protected-route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Project | Atlas Project Manager" },
    { name: "description", content: "Create a new project in Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function NewProject({ loaderData }: Route.ComponentProps) {
  return (
    <ProtectedRoute>
      <NewProjectPage />
    </ProtectedRoute> 
  );
}
