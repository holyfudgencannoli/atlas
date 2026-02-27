import Dashboard from "~/pages/__protected/dashboard/dashboard.index";
import type { Route } from "./+types/create-account";
import CreateAccountPage from "~/pages/create-account/create-account.index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create Account | Atlas Project Manager" },
    { name: "description", content: "Create a new account for Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  const data = {
    lol: 'laugh out loud',
    ttyl: 'talk to you later',

  }
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE, data };
}

export default function CreateAccount({ loaderData }: Route.ComponentProps) {
  return (
    <CreateAccountPage data={loaderData} />
  );
}
