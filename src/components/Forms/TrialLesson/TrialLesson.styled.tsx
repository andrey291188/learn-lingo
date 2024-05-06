import styled from "styled-components";

export const StyledTrialFormsContainer = styled.div`
  position: relative;
  width: 600px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 64px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  h3 {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    color: rgb(18, 20, 23);
    margin-bottom: 20px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    color: rgb(18, 20, 23);
    margin-bottom: 20px;
  }
  form > h4 {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
    color: rgb(18, 20, 23);
    margin-bottom: 20px;
  }

  .radio-reason {
    margin-bottom: 40px;
  }

  .radio-reason > label {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    color: rgb(18, 20, 23);
  }

  .radio-reason > label:not(:last-child) {
    margin-bottom: 16px;
  }

  .custom-chekbox {
    display: block;
    position: relative;
    border: 3px solid rgba(18, 20, 23, 0.2);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
  }

  .radio-buttom:checked + .custom-chekbox {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border-color: rgb(244, 197, 80);
  }

  .radio-buttom:checked + .custom-chekbox > span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(244, 197, 80);
  }

  form > button {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    width: 100%;
    margin-top: 20px;
    padding: 16px 0px;
    border: none;
    border-radius: 12px;
    background-color: rgb(244, 197, 80);
    color: rgb(18, 20, 23);
  }

  form > div > label > input {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    width: 100%;
    padding: 16px 18px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    margin-bottom: 20px;
  }

  form > div {
    position: relative;
  }

  form > div > div {
    position: absolute;
    left: 15px;
    top: 55px;
  }

  form > div > div > p {
    color: red;
    font-size: 16px;
  }

  form > button:disabled {
    background-color: #8a8a89;
    color: #121417;
  }

  @media only screen and (max-width: 630px) {
    width: 90%;
    padding: 7vw;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
    overflow: hidden;
    letter-spacing: 1;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }
`;
