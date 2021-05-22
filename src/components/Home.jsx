import "../css/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const h1Animation = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animation: {
    x: 0,
    opacity: 1,
  },

  transition: {
    duration: 0.4,
    delay: 0.6,
  },
};

const h3animation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animation: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.4,
    delay: 0.8,
  },
};

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="overlay">
        <motion.h1
          animate={h1Animation.animation}
          transition={h1Animation.transition}
          initial={h1Animation.initial}
        >
          I'm Carlo
        </motion.h1>
        <motion.div
          animate={h3animation.animation}
          transition={h3animation.transition}
          initial={h3animation.initial}
          className="pitch"
        >
          <h3>a web developer stationed in Davao City,</h3>
          <h3>contact me and let's make something special.</h3>
        </motion.div>

        <Link to="/projects">View Project</Link>
      </div>
    </section>
  );
};

export default Home;
