import "../css/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <motion.a
          href="https://linkedin.com/in/cartulang"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size="2.5rem" />
        </motion.a>
        <motion.a
          href="https://github.com/cartulang"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub size="2.5rem" />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
