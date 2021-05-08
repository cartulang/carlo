import { motion } from "framer-motion";

const { initial, animate, transition } = {
  initial: {
    opacity: 0,
    y: -100,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    delay: 0.3,
    duration: 0.3,
  },
};

const Description = ({ imageSlides, currentImage }) => {
  const { title, description, technologyUsed, imageUrl } = imageSlides[
    currentImage
  ];
  return (
    <motion.section
      className="description"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Built using:</p>
      <article className="technology">
        {technologyUsed.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </article>
      <a href={imageUrl}>Click here for demo</a>
    </motion.section>
  );
};

export default Description;
