import DashboardPage from "~/pages/__protected/dashboard/dashboard.index";
import type { Route } from "./+types/dashboard";
import ProtectedRoute from "~/hooks/protected-route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | Atlas Project Manager" },
    { name: "description", content: "Dashboard for Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  );
}
