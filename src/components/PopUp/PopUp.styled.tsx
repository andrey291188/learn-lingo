import styled from "styled-components";

export const StyledPopUpContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 25px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  ul > li > a {
    display: block;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 5px;
    border-bottom: 2px solid gray;
  }

  button {
    margin: 0;
  }

  button:not(:last-child) {
    padding-top: 14px;
    padding-bottom: 14px;
    margin-bottom: 5px;
    border-bottom: 2px solid gray;
  }
`;
