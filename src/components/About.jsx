import "../css/about.css";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import { motion } from "framer-motion";

const { initial, animate, transition } = {
  initial: {
    y: -100,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },

  transition: {
    duration: 0.4,
  },
};

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-me"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <h1>About me</h1>
        <p>
          I'm a self-taught web developer located in Davao City, Philippines. I
          love coding and learning new things.
        </p>
        <p>
          Capable working as a team or an individual with high attention to
          detail. I like playing video games like League of Legends, Skyrim and
          many more.
        </p>

        <Link to="/contact">Let's work together.</Link>
      </motion.div>
      <Skills />
    </section>
  );
};

export default About;
