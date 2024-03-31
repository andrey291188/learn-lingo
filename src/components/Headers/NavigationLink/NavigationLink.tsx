import { StyledLink } from "./NavigationLink.styled";

interface NavigationLinkType {
  path: string;
  name: string;
}

export default function NavigationLink({ path, name }: NavigationLinkType) {

  return (
    <li>
      <StyledLink to={path}>{name}</StyledLink>
    </li>
  );
}
