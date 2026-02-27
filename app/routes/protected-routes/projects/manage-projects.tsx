import DashboardPage from "~/pages/__protected/dashboard/dashboard.index";
import type { Route } from "./+types/manage-projects";
import ManageProjectsPage from "~/pages/__protected/projects/manage-projects";
import ProtectedRoute from "~/hooks/protected-route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Manage Projects | Atlas Project Manager" },
    { name: "description", content: "Manage Projects for Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function ManageProjects({ loaderData }: Route.ComponentProps) {
  return (
    <ProtectedRoute>
      <ManageProjectsPage />
    </ProtectedRoute>
  );
}
