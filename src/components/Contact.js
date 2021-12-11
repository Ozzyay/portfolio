import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.5,
    },
  },
};

const children = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={styles.parent}
    >
      <motion.h3 variants={children}>Contact Me</motion.h3>
      <motion.p variants={children} className={styles.span}>
        Email: Ozzy.aytekin97@gmail.com
      </motion.p>
      <motion.p variants={children} className={styles.span}>
        <a
          href="https://www.linkedin.com/in/ozzy-aytekin-21b9a8227"
          target="_blank"
          rel="noreferrer"
        >
          Click Here for My LinkedIn
        </a>
      </motion.p>
      <motion.p variants={children} className={styles.span}>
        <a href="http://github.com/ozzyay" target="_blank" rel="noreferrer">
          Click Here for my GitHub
        </a>
      </motion.p>
      <motion.p variants={children} className={styles.span}>
        {" "}
        I look forward to hearing from you!
      </motion.p>
    </motion.div>
  );
};

export default Contact;
