import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import {
  StyledButtonLogInOut,
  StyledButtonRegistration,
} from "./ButtonAuth.styled";
import NavigationLink from "../NavigationLink/NavigationLink";

interface ButtonAuthType {
  user: boolean;
  authUser: () => void
}

const routes = [{ path: "favorites", name: "Favorites" }];

export default function ButtonAuth({ user, authUser}: ButtonAuthType) {
  return (
    <>
      {!user ? (
        <>
          <StyledButtonLogInOut onClick={() => authUser()}>
            <CiLogin size={20} color="rgb(244, 197, 80)" className="icon" />
            Log in
          </StyledButtonLogInOut>
          <StyledButtonRegistration>Registartion</StyledButtonRegistration>
        </>
      ) : (
        <>
          <ul>
            {routes.map(({ path, name }) => (
              <NavigationLink path={path} name={name} key={name} />
            ))}
          </ul>
          <StyledButtonLogInOut onClick={() => authUser()}>
            <CiLogout size={20} color="rgb(244, 197, 80)" className="icon" />
            Log Out
          </StyledButtonLogInOut>
        </>
      )}
    </>
  );
}
