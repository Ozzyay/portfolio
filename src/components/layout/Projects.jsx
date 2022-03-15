import React from "react";
import styles from './Projects.module.css';
import  {beautique, ozSocial, searchAndSave, weatherApp}  from '../../Assets/Assets';

const searchAndSaveText = "A search and save application that allows users to save articles to their own personal list. <br>The application uses the Google News API to retrieve articles and the Google Books API to retrieve book information.";
const beautiqueText = "A concept ecommerce website example I built for clients to showcase their products and services. <br>The website is built with React, Redux, and NextJs.";
const ozSocialText = "A social media application project created using React and NextJS Serverless. <br>It makes use of the Google OAuth API to create a user authentication system and MongoDB Atlas to store user data.";
const weatherAppText = "A weather application that allows users to search for weather information by city name created in Vanilla JavaScript. <br>The application uses the OpenWeatherMap API to retrieve weather information.";

const Projects = () => {
  return (  <>
  <div className={styles.container}>
    <h2>Projects</h2>
    <div className={styles.grid}>
      <div className={styles.gridItem}>
      <a href="https://ecomm-app-sable.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={beautique} className={styles.images} alt="beautique site" data-tip={beautiqueText} data-multiline={true} place="top"/>
        </a>
      </div>
      <div className={styles.gridItem}>
      <a href="https://social-app-rho.vercel.app/" target="_blank" rel="noopener noreferrer" >
      <img src={ozSocial} className={styles.images} alt="ozSocial site" data-tip={ozSocialText} data-multiline={true} place="top"/>
      </a>
        </div>
        <div className={styles.gridItem}>
        <a href="https://search-and-c98e3.web.app/" target="_blank" rel="noopener noreferrer" >
        <img src={searchAndSave} className={styles.images} alt="searchAndSave site" data-tip={searchAndSaveText} data-multiline={true} place="bottom"/>
        </a>
        
        </div>
        <div className={styles.gridItem}>
        <a href="https://ozzyay.github.io/weatherApp/dist/" target="_blank" rel="noopener noreferrer">
        <img src={weatherApp} className={styles.images} alt="WeatherApp site" data-tip={weatherAppText} data-multiline={true}/>
        </a>
        </div>
    </div>
  </div>
  </>
  )
}

export default Projects;