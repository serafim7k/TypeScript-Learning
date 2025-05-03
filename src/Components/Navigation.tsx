import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/chat">Chat</NavLink>
    </nav>
  );
};

export default Navigation;