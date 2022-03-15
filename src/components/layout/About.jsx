import React from "react";
import styles from './About.module.css';
import { Aws, Gcp, Git, Dotnet, Js, Node, Mongo, Python, Rct, Tailwind} from '../Icons.jsx';


const About = () => {
  return <div className={styles.spacer}>
  <div className={styles.flexContainer}>
    <div className={styles.mainContainer}>
      <h2>About</h2>
      <p>Hi, My name is Ozzy and I am a self learned full stack developer. Outside of programming, I enjoy solving logical puzzles, playing chess and other games as well as eating great food.</p>
    </div>
    <div className={styles.mainContainerTwo}>
      <h2>Skills</h2>
      <div className={styles.grid}>
      <Aws className={styles.svg} data-tip="Amazon Web Services" data-place="top"/>
      <Gcp className={styles.svg} data-tip="CSS3 and SASS" data-place="top"/>
      <Git className={styles.svg} data-tip="Git" data-place="top"/>
      <Dotnet className={styles.svg} data-tip=".NET Core and Azure Services" data-place="top"/>
      <Js className={styles.svg} data-tip="Javascript and Typescript" data-place="top"/>
      <Node className={styles.svg} data-tip="NodeJS and ExpressJS" data-place="bottom"/>
      <Mongo className={styles.svg} data-tip="MongoDB and SQL" data-place="bottom"/>
      <Python className={styles.svg} data-tip="Python3" data-place="bottom"/>
      <Rct className={styles.svg} data-tip="ReactJS and React Native" data-place="bottom"/>
      <Tailwind className={styles.svg} data-tip="Tailwind CSS" data-place="bottom"/>
      </div>
    </div>
  </div>
  </div>
};

export default About;