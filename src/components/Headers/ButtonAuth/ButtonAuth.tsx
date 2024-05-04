import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import {
  StyledButtonLogInOut,
  StyledButtonRegistration,
} from "./ButtonAuth.styled";
import NavigationLink from "../NavigationLink/NavigationLink";
import { useNavigate } from "react-router-dom";

interface ButtonAuthType {
  user: boolean;
  authUser: () => void
}

const routes = [{ path: "favorites", name: "Favorites" }];

export default function ButtonAuth({ user, authUser}: ButtonAuthType) {
  const navigate = useNavigate();

  const navigateTo = (value: string) => {
    navigate(`${value}`)
  } 
  return (
    <>
      {!user ? (
        <>
          <StyledButtonLogInOut onClick={() => navigateTo("login")}>
            <CiLogin size={20} color="rgb(244, 197, 80)" className="icon" />
            Log in
          </StyledButtonLogInOut >
          <StyledButtonRegistration onClick={() => navigateTo("register")}>Registartion</StyledButtonRegistration>
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
