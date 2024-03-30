import React from "react";
import { StyledNavLink } from "./Logo.styled";

export default function Logo() {
  return (
    <StyledNavLink to="/" className="logo">
      <span className="ukraine"></span>LearnLingo
    </StyledNavLink>
  );
}
