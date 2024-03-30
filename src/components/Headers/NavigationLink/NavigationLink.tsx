import { NavLink } from "react-router-dom";

interface NavigationLinkType {
  path: string;
  name: string;
}

export default function NavigationLink({ path, name }: NavigationLinkType) {
  return (
    <li>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
}
