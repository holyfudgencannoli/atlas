import DashboardPage from "~/pages/__protected/dashboard/dashboard.index";
import type { Route } from "./+types/account-details";
import NewProjectPage from "~/pages/__protected/projects/new-project";
import ProtectedRoute from "~/hooks/protected-route";
import InviteMemberPage from "~/pages/__protected/members/invite-member";
import AccountDetailsPage from "~/pages/__protected/account/account-details";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Account Details | Atlas Project Manager" },
    { name: "description", content: "View and manage your account details in Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function AccountDetails({ loaderData }: Route.ComponentProps) {
  return (
    <ProtectedRoute>
      <AccountDetailsPage />
    </ProtectedRoute> 
  );
}
