import DashboardPage from "~/pages/__protected/dashboard/dashboard.index";
import type { Route } from "./+types/invite-members";
import NewProjectPage from "~/pages/__protected/projects/new-project";
import ProtectedRoute from "~/hooks/protected-route";
import InviteMemberPage from "~/pages/__protected/members/invite-member";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Invite Members | Atlas Project Manager" },
    { name: "description", content: "Invite members to the organization in Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function InviteMembers({ loaderData }: Route.ComponentProps) {
  return (
    <ProtectedRoute>
      <InviteMemberPage />
    </ProtectedRoute> 
  );
}
