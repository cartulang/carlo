import "../css/projects.css";
import { imageSlides } from "./imageSlides";
import { useState } from "react";

// components
import ImageSlider from "./ImageSlider";
import Description from "./Description";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageLength = imageSlides.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === imageLength - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? imageLength - 1 : currentImage - 1);
  };

  return (
    <section className="projects">
      <Description imageSlides={imageSlides} currentImage={currentImage} />
      <ImageSlider
        imageSlides={imageSlides}
        currentImage={currentImage}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </section>
  );
};

export default Projects;
