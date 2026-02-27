import { Outlet } from "react-router";
import Header from "~/components/header/header.index";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Outlet  />
    </>

  );
}