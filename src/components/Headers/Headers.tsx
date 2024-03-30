import Logo from "./Logo/Logo";
import { StyledHeaders } from "./Headers.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import NavigationLink from "./NavigationLink/NavigationLink";
import ButtonAuth from "./ButtonAuth/ButtonAuth";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import PopUp from "../PopUp/PopUp";

const routes = [
  { path: "/", name: "Home" },
  { path: "/teachers", name: "Theachers" },
];

function Headers() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 530);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonClick = () => {
    setIsVisiblePopUp(true);
  };

  return (
    <StyledHeaders>
      {isWideScreen ? (
        <nav className="nav-list">
          <Logo />
          <ul className="list-item">
            {routes.map(({ path, name }) => (
              <NavigationLink path={path} name={name} key={name} />
            ))}
          </ul>
          <div className="btn-group">
            <ButtonAuth user={false} />
          </div>
        </nav>
      ) : (
        <nav className="nav-list-mobile">
          <Logo />
          <button className="btn-menu-burger" onClick={buttonClick}>
            <GiHamburgerMenu size={32} color="rgb(5, 4, 2)" className="icon" />
          </button>
        </nav>
      )}

      {isVisiblePopUp && (
        <Modal toggleModal={setIsVisiblePopUp}>
          <PopUp>
            
              {routes.map(({ path, name }) => (
                <NavigationLink path={path} name={name} key={name} />
              ))}
           
            <ButtonAuth user={false} />
          </PopUp>
        </Modal>
      )}
    </StyledHeaders>
  );
}

export default Headers;
