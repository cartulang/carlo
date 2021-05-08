import "../css/header.css";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <header className={`${isOpen} header`}>
        <div className="brand-name">
          <Link to="/">C</Link>
          <h3>Carlo</h3>
          <p>Web Developer</p>
        </div>
        <Nav setIsOpen={setIsOpen} />
        <Footer />
      </header>

      <div
        className={`${isOpen} toggle-button`}
        onClick={() => setIsOpen(isOpen === "open" ? "close" : "open")}
      >
        <div className={`${isOpen} bar`}></div>
        <div className={`${isOpen} bar`}></div>
        <div className={`${isOpen} bar`}></div>
      </div>
    </>
  );
};

export default Header;
