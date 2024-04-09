import styled from "styled-components";

export const StyledCardRender = styled.li`
  display: flex;
  padding: 24px;
  margin-top: 32px;
  border-radius: 24px;
  background-color: rgb(255, 255, 255);

  .container-content {
    width: 100%;
  }

  .container-avatar {
    position: relative;
    margin-right: 48px;
  }

  .avatar {
    border: 3px solid rgb(251, 233, 186);
    padding: 12px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .status {
    width: 12px;
    height: 12px;
    background-color: red;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
    position: absolute;
    top: 19px;
    right: 23px;
  }

  .status.online {
    background-color: rgb(56, 205, 62);
  }

  .list-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: rgb(18, 20, 23);
  }

  .list-info > p {
    color: rgb(138, 138, 137);
  }

  .list-info > ul {
    display: flex;
    align-items: center;
  }

  .list-info > ul > li {
    display: flex;
    align-items: center;
  }
  .icon-book {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .icon-star {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .list-info > ul > span {
    margin: 0px 8px;
    height: 16px;
    border: 1px solid rgba(18, 20, 23, 0.2);
  }

  .list-info > ul > li > button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: inherit;
    text-decoration: none;
    margin-left: 64px;
  }

  .list-info > ul > li > span {
    color: rgb(56, 205, 62);
  }

  .description-list > li > h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 32px;
  }

  .description-list > li > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1, 5;
    margin-bottom: 8px;
    color: rgb(138, 138, 137);
  }

  .description-list > li:last-child > p {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(18, 20, 23);
    margin-bottom: 32px;
  }

  .description-list > li > p > span {
    color: rgb(18, 20, 23);
  }

  .underline {
    text-decoration: underline;
  }

  .description-list > li > button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1, 5;
  }

  .list-level {
    display: flex;
    margin-top: 32px;
  }

  .list-level > li {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
    padding: 8px 12px;
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-radius: 35px;
  }

  .list-level > li > p {
    display: block;
    text-align: center;
  }

  .list-level > li:not(:last-child) {
    margin-right: 8px;
  }

  .list-level > li:first-child {
    background-color: rgb(244, 197, 80);
    border: 1px solid rgb(244, 197, 80);
  }

  .reviews > li:not(:last-child) {
    margin-bottom: 32px;
  }

  .reviews > li > div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .reviews > li > div > img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .reviews > li > div > div > h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: rgb(138, 138, 137);
  }

  .reviews > li > div > div > p {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: rgb(18, 20, 23);
  }

  .reviews > li > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: rgb(18, 20, 23);
  }

  .container-content > button {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    color: rgb(18, 20, 23);
    margin-top: 32px;
    padding: 16px 48px;
    background-color: rgb(244, 197, 80);
    border: none;
    border-radius: 12px;
  }
`;
