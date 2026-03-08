import HomePage from "~/pages/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Atlas Project Manager" },
    { name: "description", content: "Welcome to Atlas Project Manager!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomePage />
  );
}
