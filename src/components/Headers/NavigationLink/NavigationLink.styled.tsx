import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
&.active {
    border-bottom: 2px solid blue;
}`