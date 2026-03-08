import HomePage from "~/pages/docs";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Docs | Atlas Project Manager" },
    { name: "description", content: "Documentation for Atlas Project Manager" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
}

export default function Docs({ loaderData }: Route.ComponentProps) {
  return (
    <HomePage />
  );
}
