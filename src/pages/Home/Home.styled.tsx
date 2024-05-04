import styled from "styled-components";

export const StyledSectionHomePage = styled.section`
  max-width: 1312px;
  margin-left: auto;
  margin-right: auto;

  .container {
    display: flex;
    justify-content: center;
  }

  .desc {
    width: 720px;
    padding-top: 98px;
    padding-bottom: 98px;
    padding-left: 64px;
    padding-right: 40px;
    margin-right: 24px;
    background-color: rgb(248, 248, 248);
    border-radius: 30px;
  }

  .title {
    max-width: 558px;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.16;
    color: rgb(18, 20, 23);
  }

  .span-decorate {
    display: inline-block;
    width: 196px;
    height: 58px;
    position: relative;
    font-weight: 400;
    font-style: italic;
    z-index: 1;
  }
  .span-decorate::before {
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
    max-width: 471px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: rgb(18, 20, 23);
    margin-top: 32px;
  }

  .btn-get-str {
    padding: 18px 6.1vw;
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
    bottom: 111px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .svg-mac {
    position: absolute;
    bottom: -128px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 391px;
  }

  .statistic {
    margin-top: 24px;
    margin-bottom: 30px;

    border: 1.5px dashed rgb(159, 186, 174);
    border-radius: 30px;
    width: 100%;
    padding: 0 7.5vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
  }

  .statistic > li {
    display: flex;
    align-items: center;
  }

  .statistic > li > h5 {
    margin: 40px 0;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.14;
    color: rgb(18, 20, 23);
    margin-right: 16px;
  }

  .statistic > li > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(18, 20, 23, 0.7);
  }

  @media only screen and (max-width: 1069px) {
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .desc {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 24px;
    }

    .picture {
      width: 100%;
      height: 530px;
    }
  }

  @media only screen and (max-width: 909px) {
    .statistic {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 630px) {
    .desc {
      padding-left: 15px;
      padding-right: 15px;
    }
    .statistic {
      padding: 0 15px;
      column-gap: 20px;
    }
    
  }
`;
