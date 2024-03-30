import styled from "styled-components";

export const StyledHeaders = styled.header`
  max-width: 1184px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .nav-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }

  .list-item > li > a {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .nav-list-mobile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list-item {
    display: flex;
  }

  .list-item > li:not(:last-child) {
    margin-right: 28px;
  }

  .btn-group {
    display: flex;
    align-items: center;
  }

  .btn-group > ul > li > a {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .btn-menu-burger {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: inherit;
    text-decoration: none;
  }

  .pop-up {

  }
`;
