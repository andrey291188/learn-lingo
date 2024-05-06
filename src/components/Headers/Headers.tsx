import Logo from "./Logo/Logo";
import { StyledHeaders } from "./Headers.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import NavigationLink from "./NavigationLink/NavigationLink";
import ButtonAuth from "./ButtonAuth/ButtonAuth";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import PopUp from "../PopUp/PopUp";
import Forms from "../Forms/Forms";
import { loginFormData, registerFormData } from "../Forms/FormSettings";

const routes = [
  { path: "/", name: "Home" },
  { path: "/teachers", name: "Theachers" },
];

function Headers() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);
  const [registerVisibleForm, setRegisterVisibleForm] = useState(false);
  const [loginVisibleForm, setLoginVisibleForm] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonClick = () => {
    setIsVisiblePopUp(true);
  };

  // const authUser = () => {
  //   setIsUser(!isUser);
  // };

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
            <ButtonAuth
              user={isUser}
              setLoginVisibleForm={setLoginVisibleForm}
              setRegisterVisibleForm={setRegisterVisibleForm}
            />
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
            <ul>
              {routes.map(({ path, name }) => (
                <NavigationLink path={path} name={name} key={name} />
              ))}
            </ul>
            <ButtonAuth
              user={isUser}
              setLoginVisibleForm={setLoginVisibleForm}
              setRegisterVisibleForm={setRegisterVisibleForm}
            />
          </PopUp>
        </Modal>
      )}

      {registerVisibleForm && (
        <Modal toggleModal={setRegisterVisibleForm}>
          <Forms data={registerFormData} toggleModal={setRegisterVisibleForm}/>
        </Modal>
      )}

      {loginVisibleForm && (
        <Modal toggleModal={setLoginVisibleForm}>
          <Forms data={loginFormData} toggleModal={setLoginVisibleForm}/>
        </Modal>
      )}
    </StyledHeaders>
  );
}

export default Headers;
