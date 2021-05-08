// icons
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

const { initial, animate, transition } = {
  initial: {
    y: 100,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },

  transition: {
    delay: 0.4,
    duration: 0.4,
  },
};

const Skills = () => {
  return (
    <motion.section
      className="skills"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <h1>My skills</h1>
      <div className="cards">
        <div className="card">
          <SiHtml5 size="70px" color="#f06529" />
        </div>
        <div className="card">
          <SiCss3 size="70px" color="#2965f1" />
        </div>
        <div className="card">
          <SiJavascript size="70px" color="#f0db4f" />
        </div>

        <div className="card">
          <SiSass size="70px" color="#cc6699" />
        </div>
        <div className="card">
          <SiReact size="70px" color="#61DBFB" />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
