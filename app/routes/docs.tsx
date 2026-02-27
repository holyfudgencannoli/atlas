import LoginPage from "~/pages/login/login.index";
import type { Route } from "./+types/home";
import Dashboard from "~/pages/__protected/dashboard/dashboard.index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Docs | Atlas Project Manager" },
    { name: "description", content: "Documentation for Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Docs({ loaderData }: Route.ComponentProps) {
  return (
    <Dashboard />
  );
}
