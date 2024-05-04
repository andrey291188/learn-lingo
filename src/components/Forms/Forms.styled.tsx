import styled from "styled-components";

export const StyledFormsContainer = styled.div`
width: 566px;
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
    margin-bottom: 36px;
}

form > label > input {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    width: 100%;
    padding: 16px 18px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    margin-bottom: 20px;
}

form > button {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    width: 100%;
    margin-top: 20px;
    padding:16px 0px;
    border: none;
    border-radius: 12px;
    background-color: rgb(244, 197, 80);
    color: rgb(18, 20, 23);
}



@media only screen and (max-width: 630px) {
  width: 90%;
  padding: 7vw;
    }

    @media only screen and (max-width: 400px) {
  width: 100%;
  padding: 15px;
    }
`;
