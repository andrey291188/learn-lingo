import styled from "styled-components";

export const StyledSectionHomePage = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  align-items: center;

  .container {
    display: flex;
    justify-content: center;
  }
  .desc {
    width: 720px;
    height: 530px;
    padding-top: 98px;
    padding-bottom: 98px;
    padding-left: 64px;
    margin-right: 24px;
    background-color: rgb(248, 248, 248);
    border-radius: 30px;
  }

  .title {
    width: 558px;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.16;
    color: rgb(18, 20, 23);
  }

  .title > span {
    position: relative;
    font-weight: 400;
    font-style: italic;
    z-index: 1;
  }
  .title > span::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0, -40%);
    width: 200px;
    height: 40px;
    background-color: rgb(203, 222, 211);
    border-radius: 10px;
    line-height: 20px;
    z-index: -1;
  }

  .description {
    width: 471px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: rgb(18, 20, 23);
    margin-top: 32px;
  }

  .btn-get-str {
    width: 267px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;

    font-weight: 700;
    font-size: 18px;
    line-height: 1.37;

    background-color: rgb(159, 186, 174);
    border-radius: 12px;
    border: none;
  }

  .picture {
    position: relative;
    width: 568px;
    border-radius: 30px;
    background-color: rgb(203, 222, 211);
    overflow: hidden;
  }

  .head-girl {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .svg-mac {
    position: absolute;
    top: 354px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 391px;
  }

  .statistic {
    margin-top: 24px;
    margin-bottom: 30px;
    border: 1.5px dashed rgb(159, 186, 174);
    border-radius: 30px;
    width: 1312px;
    height: 100px;
  }
`;
