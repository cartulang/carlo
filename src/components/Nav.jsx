import { Link } from "react-router-dom";
const Nav = ({ setIsOpen }) => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" replace onClick={() => setIsOpen("close")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" replace onClick={() => setIsOpen("close")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" replace onClick={() => setIsOpen("close")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" replace onClick={() => setIsOpen("close")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
