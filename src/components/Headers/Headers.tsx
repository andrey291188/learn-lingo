import { NavLink } from "react-router-dom";

function Headers() {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/teachers", name: "Theachers" },
    { path: "/user", name: "User" },
  ];

  return (
    <nav>
      <ul>
        {routes.map(({ path, name }) => (
          <li key={name}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Headers;
