import "../css/home.css";
import { motion } from "framer-motion";

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

const buttonAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animation: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.3,
    delay: 1,
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
        <motion.h3
          animate={h3animation.animation}
          transition={h3animation.transition}
          initial={h3animation.initial}
        >
          a web developer
        </motion.h3>
        <motion.a
          href="mailto:cartulang@gmail.com"
          animate={buttonAnimation.animation}
          transition={buttonAnimation.transition}
          initial={buttonAnimation.initial}
        >
          Hire me
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
