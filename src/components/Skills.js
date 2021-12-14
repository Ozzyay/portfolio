import { motion } from "framer-motion";
import styles from "./Skills.module.scss";
import { LeftArrow, RightArrow } from "./images/arrows";
import React, { useState } from "react";

const container = {
  hidden: { translateX: -800, opacity: 0 },
  show: {
    translateX: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70 },
  },
};

const child = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
};

const advanced = (
  <React.Fragment>
    <h3>Advanced Skills</h3>
    <ul>
      <li>ReactJS </li>
      <li>React Router v5, v6</li>
      <li>Redux</li>
      <li>HTML5, CSS, Javascript and NPM</li>
      <li>Working with REST APIs and authentication tokens</li>
      <li>Leet Code completion of all mediums</li>
      <li>Git Version Control</li>
      <li>Fetch API</li>
      <li>Framer Motion</li>
      <li>SASS and Styled Components</li>
      <li>Communication and Teamwork</li>
    </ul>
  </React.Fragment>
);

const intermediate = (
  <React.Fragment>
    <h3>Intermediate Skills</h3>
    <ul>
      <li>ReactJS class-based components</li>
      <li>React Context</li>
      <li>Algorythms and Data Structures</li>
      <li>Python</li>
      <li>NextJS for React</li>
      <li>High Attention to Detail</li>
      <li>Use of Photoshop/GNU Image Manipulation</li>
      <li>Linux Terminals</li>
    </ul>
  </React.Fragment>
);

const proficient = (
  <React.Fragment>
    <h3>Proficient Skills</h3>
    <ul>
      <li>TypeScript Programming</li>
      <li>React Query</li>
      <li>Testing with Jest</li>
      <li>Node.JS</li>
      <li>Cloud Platforms AWS, Azure and Google Firebase</li>
    </ul>
  </React.Fragment>
);

const Skills = () => {
  const [content, setContent] = useState(0);
  const contentArray = [advanced, intermediate, proficient];
  const goLeftHandler = (e) => {
    if (content === 0) {
      return setContent(2);
    }
    return setContent(content - 1);
  };
  const goRightHandler = (e) => {
    if (content === 2) {
      return setContent(0);
    }
    return setContent(content + 1);
  };
  return (
    <motion.div
      className={styles.card}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.button
        variants={child}
        initial="hidden"
        animate="show"
        className={styles.leftArrow}
        onClick={goLeftHandler}
      >
        <LeftArrow />
      </motion.button>
      <motion.div
        variants={child}
        initial="hidden"
        animate="show"
        className={styles.content}
      >
        {contentArray[content]}
      </motion.div>
      <motion.button
        variants={child}
        initial="hidden"
        animate="show"
        className={styles.rightArrow}
        onClick={goRightHandler}
      >
        <RightArrow />
      </motion.button>
    </motion.div>
  );
};

export default Skills;
