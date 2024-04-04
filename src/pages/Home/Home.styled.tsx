import styled from "styled-components";

export const StyledSectionHomePage = styled.section`
  max-width: 1312px;
  margin-top: 20px;
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
    height: 530px;
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
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 100px;
    align-items: center;
  }

  .statistic > li {
    display: flex;
    align-items: center;
  }

  .statistic > li > h5 {
  
    padding: 40px 0;
    font-weight: 500;
    font-size: 28px;
    line-height: 1.14;
    color: rgb(18, 20, 23);
    margin-right: 16px;
  }

  .statistic > li > p {
    width: 96px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(18, 20, 23, 0.7);
  }

  @media only screen and (max-width: 1220px) {

    .statistic {
      padding-left: 25px;
      padding-right: 25px;
      column-gap: 40px;
    }
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
    }

  }

  @media only screen and (max-width: 909px) {
    .statistic {
      flex-wrap: wrap;
      column-gap: 30px;
    }
  }

  @media only screen and (max-width: 630px) {
    .desc {
      padding-left: 15px;
      padding-right: 15px;
      text-align: center;
    }
    .statistic {
      column-gap: 20px;
    }
  }
`;
