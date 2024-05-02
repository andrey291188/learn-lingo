import imgHeroBlock from "../../images/home/68e4226188648a055ee1b42bed644f46-sticker 1.png";
import { ReactComponent as MacSvg } from "../../images/home/Mac.svg";
import { StyledSectionHomePage } from "./Home.styled";

function Home() {
  return (
    <StyledSectionHomePage>
      <div className="container">
        <div className="desc">
          <h1 className="title">
            Unlock your potential with the best <span className="span-decorate">language</span> tutors
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
      <ul className="statistic">
        <li>
          <h5>32,000 +</h5>
          <p>Experienced<br /> tutors</p> 
        </li>
        <li>
          <h5>300,000 +</h5>
          <p>5-star tutor<br /> reviews</p>
        </li>
        <li>
          <h5>120 +</h5>
          <p>Subjects<br /> taught</p>
        </li>
        <li>
          <h5>200 +</h5>
          <p>Tutor<br /> nationalities</p>
        </li>
      </ul>
    </StyledSectionHomePage>
  );
}

export default Home;
