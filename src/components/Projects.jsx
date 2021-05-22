import "../css/projects.css";
import { imageSlides } from "./imageSlides";

const Projects = ({ isModalOpen, setIsModalOpen, setDetails }) => {
  return (
    <section className="projects">
      <h2>Projects I've done</h2>
      <div className="project-container">
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
      </div>
    </section>
  );
};

export default Projects;
