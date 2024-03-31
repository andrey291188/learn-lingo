import imgHeroBlock from "../../images/home/68e4226188648a055ee1b42bed644f46-sticker 1.png";
import { ReactComponent as MacSvg } from "../../images/home/Mac.svg";
import { StyledSectionHomePage } from "./Home.styled";
function Home() {
  return (
    <StyledSectionHomePage>
      <div className="container">
        <div className="desc">
          <h1 className="title">
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p className="description">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className="btn-get-str">Get started</button>
        </div>
        <div className="picture">
          <img src={imgHeroBlock} alt="Head girl" className="head-girl" />
          <MacSvg className="svg-mac" />
        </div>
      </div>
      <div className="statistic"></div>
    </StyledSectionHomePage>
  );
}

export default Home;
