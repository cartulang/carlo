import "../css/projects.css";
import { imageSlides } from "./imageSlides";
import { motion } from "framer-motion";

const titleAnimation = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  transition: {
    duration: 0.4,
  },
};

const projectsAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.3,
    delay: 0.3,
  },
};

const Projects = ({ isModalOpen, setIsModalOpen, setDetails }) => {
  return (
    <section className="projects">
      <motion.h2
        animate={titleAnimation.animate}
        initial={titleAnimation.initial}
        transition={titleAnimation.transition}
      >
        Projects I've done
      </motion.h2>
      <motion.div
        animate={projectsAnimation.animate}
        initial={projectsAnimation.initial}
        transition={projectsAnimation.transition}
        className="project-container"
      >
        {imageSlides.map(slide => {
          return (
            <div className="project" key={slide.imageUrl}>
              <img src={slide.imageUrl} alt={slide.title} />;
              <div className="img-overlay">
                <h3>{slide.title}</h3>
                <button
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                    setDetails({
                      technology: slide.technologyUsed,
                      title: slide.title,
                      img: slide.imageUrl,
                      description: slide.description,
                      demo: slide.appLink,
                      repo: slide.githubRepo,
                    });
                  }}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
