import LoginPage from "~/pages/login/login.index";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | Atlas Project Manager" },
    { name: "description", content: "Login to Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
}

export default function Login({ loaderData }: Route.ComponentProps) {
  return (
    <LoginPage />
  );
}
