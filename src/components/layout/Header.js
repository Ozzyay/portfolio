import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../images/HomeIcon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const headerLetter = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Header = () => {
  const headerText = "Ozzy's Portfolio";
  const headerArray = headerText.split("");
  const children = headerArray.map((elem) => (
    <motion.span className={styles.span} variants={headerLetter}>
      {elem}
    </motion.span>
  ));
  return (
    <motion.div
      className={styles.bg}
      animate={{
        opacity: 1,
        transition: { duration: 0.25 },
      }}
    >
      <Link to="/" className={styles.link}>
        <HomeIcon />
        <motion.div variants={container} inital="hidden" animate="show">
          {children}
        </motion.div>{" "}
      </Link>
    </motion.div>
  );
};

export default Header;
