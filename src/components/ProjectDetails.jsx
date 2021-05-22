import "../css/project-details.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const ProjectDetails = ({ isModalOpen, setIsModalOpen, details }) => {
  const { img, description, title, technology, demo, repo } = details;
  return (
    <>
      {isModalOpen && (
        <div className="overlay">
          <motion.section
            animate={{ scale: 1 }}
            initial={{ scale: 0.6, x: `-50%`, y: `-50%` }}
            transition={{ duration: 0.3 }}
            className="project-details"
          >
            <AiOutlineCloseCircle
              className="close-button"
              size={"40px"}
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
            <img src={img} alt={title} />
            <div className="details">
              <h2>{title}</h2>
              <div className="technology">
                {technology.map(tech => {
                  return <span key={tech}>{tech}</span>;
                })}
              </div>
              <h4>About</h4>
              <p>{description}</p>
              <div className="links">
                <a href={demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a href={repo} target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
