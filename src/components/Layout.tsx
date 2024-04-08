import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers/Headers";

function Layout() {
  return (
    <>
      <Headers/>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
