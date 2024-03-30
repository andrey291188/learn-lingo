import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers/Headers";
import { StyledLayoutContainer } from "./Layout.styled";

function Layout() {
  return (
    <StyledLayoutContainer>
      <Headers/>
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledLayoutContainer>
  );
}

export default Layout;
