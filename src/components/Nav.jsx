import { Link } from "react-router-dom";
const Nav = ({ setIsOpen }) => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen("close")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen("close")}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
