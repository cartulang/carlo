import "../css/contact.css";
import { motion } from "framer-motion";

const contactTextAnimation = {
  initial: {
    opacity: 0,
    x: -500,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transistion: {
    duration: 0.4,
  },
};

const imgAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  transistion: {
    delay: 0.4,
    duration: 0.4,
  },
};

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact">
        <motion.div
          className="contact-text"
          animate={contactTextAnimation.animate}
          initial={contactTextAnimation.initial}
          transistion={contactTextAnimation.transistion}
        >
          <h1>Let's work together.</h1>
          <p>
            I'm interested in web development job opportunities which can help
            me improve my programming skills.
          </p>
          <a href="mailto:cartulang@gmail.com">Hire me</a>
        </motion.div>
        <div className="img-container">
          <motion.img
            src={"https://media-public.canva.com/MADQ48Vnzvg/1/screen.jpg"}
            alt="hand-shake"
            animate={imgAnimation.animate}
            initial={imgAnimation.initial}
            transition={imgAnimation.transistion}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
