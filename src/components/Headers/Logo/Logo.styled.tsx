import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  padding-top: 14px;
  padding-bottom: 14px;

  display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;

  .ukraine {
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    flex-grow: 0;
    margin-right: 8px;
    background: linear-gradient(#0000ff 50%, #ffe600 50%);
  }
`;