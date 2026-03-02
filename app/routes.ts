import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("pages/__public_layout/index.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("documentation", "routes/docs.tsx"),
    route("pricing", "routes/pricing.tsx"),
    route("create-account", "routes/create-account.tsx"),
  ]),
  layout("pages/__protected/layout/index.tsx", [
    ...prefix("app", [
      index("routes/protected-routes/dashboard.tsx"),
      ...prefix("projects", [
        index("routes/protected-routes/projects/project-history.tsx"),
        route("new", "routes/protected-routes/projects/new-project.tsx"),
        route("manage", "routes/protected-routes/projects/manage-projects.tsx"),
      ]),
      ...prefix("members", [
        route("invite", "routes/protected-routes/members/invite-members.tsx")
      ]),
      route("support", "routes/protected-routes/support/support.tsx"),
      ...prefix("account", [
        index("routes/protected-routes/account/account-details.tsx"),
      ]),

    ]),

    // layout("routes/protected-routes/dashboard.tsx", [ ]),
  ]),
] satisfies RouteConfig;
