import ProtectedRoute from "~/hooks/protected-route";
import type { Route } from "./+types/project-history";
import ProjectHistoryPage from "~/pages/__protected/projects/project-history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project History | Atlas Project Manager" },
    { name: "description", content: "Project History for Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function ProjectHistory({ loaderData }: Route.ComponentProps) {
  return (
    <ProtectedRoute>
      <ProjectHistoryPage />
    </ProtectedRoute>
  );
}
