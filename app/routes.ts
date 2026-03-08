import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("pages/__public_layout/index.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("documentation", "routes/docs.tsx"),
    route("pricing", "routes/pricing.tsx"),
  ]),
] satisfies RouteConfig;
