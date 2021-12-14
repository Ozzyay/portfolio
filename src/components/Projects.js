import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import searchSave from "./images/searchAndSave.png";
import todolist from "./images/todoList.png";
import weatherApp from "./images/WeatherApp.png";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const innerCont = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const searchAndSave =
  "A tool which allows you to search videos with the youtube API, log in with an account and save them to a list. It functions by sending the search query to the Youtube Data API V3, releasing 25 results with titles, thumbnails and urls.";

const todoList =
  "A simple CRUD app that stores inputted data in Local Storage. Designed with the purpose of putting more time in to learning Redux Toolkit";

const weatherapp =
  "A lightweight app that allows you to input a city in the world, connects to the Open Weather API to retrieve the current weather and condition. Can freely convert between Fahrenheit and Celcius";
const Projects = () => {
  return (
    <motion.div
      className={styles.overallCont}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={innerCont} className={styles.project1cont}>
        <div className={styles.textDiv}>
          <h2>Search and Save</h2>
          <p>{searchAndSave}</p>
          <a
            href="https://github.com/Ozzyay/searchAndSave"
            target="_blank"
            rel="noreferrer"
          >
            Github Source Code
          </a>
        </div>
        <a
          href="https://search-and-c98e3.web.app/"
          target="_blank"
          rel="noreferrer"
          className="imgA"
        >
          <img src={searchSave} alt="Search and Save" />
        </a>
      </motion.div>
      <motion.div variants={innerCont} className={styles.project2cont}>
        <a
          href="https://react-todolist-8e28b.web.app/"
          target="_blank"
          rel="noreferrer"
          className="imgA"
        >
          <img src={todolist} alt="Search and Save" />
        </a>
        <div className={styles.textDiv}>
          <h2>Todo List App</h2>
          <p>{todoList}</p>
          <a
            href="https://github.com/Ozzyay/Todo"
            target="_blank"
            rel="noreferrer"
          >
            Github Source Code
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={innerCont}
        className={`${styles.project1cont} ${styles.endcont}`}
      >
        <div className={styles.textDiv}>
          <h2>Weather App</h2>
          <p>{weatherapp}</p>
          <a
            href="https://github.com/Ozzyay/weatherApp"
            target="_blank"
            rel="noreferrer"
          >
            Github Source Code
          </a>
        </div>
        <a
          href="https://ozzyay.github.io/weatherApp/dist/"
          target="_blank"
          rel="noreferrer"
          className="imgA"
        >
          <img src={weatherApp} alt="Search and Save" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
