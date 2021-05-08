import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const Slider = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  position: relative;
  overflor: hidden;
`;

const imageAnimation = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },

  animation: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 0.6,
  },
};

const ImageSlider = ({ imageSlides, currentImage, prevSlide, nextSlide }) => {
  if (!Array.isArray(imageSlides) || imageSlides.length <= 0) return null;

  return (
    <>
      <Slider className="slides">
        <MdKeyboardArrowLeft
          size={"50px"}
          onClick={prevSlide}
          className="prev-arrow"
        />
        <MdKeyboardArrowRight
          size={"50px"}
          onClick={nextSlide}
          className="next-arrow"
        />

        {imageSlides.map((slide, index) => {
          return (
            currentImage === index && (
              <motion.img
                key={index}
                src={slide.imageUrl}
                className={"image"}
                initial={imageAnimation.initial}
                animate={imageAnimation.animation}
                transition={imageAnimation.transition}
                style={{ alignSelf: "center" }}
              />
            )
          );
        })}
      </Slider>
    </>
  );
};

export default ImageSlider;
