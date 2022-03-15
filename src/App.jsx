import React, { useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { Main } from 'tsparticles'
import { loadFireflyPreset } from 'tsparticles-preset-firefly';
import styles from './App.module.css';
import Typed from 'typed.js';
import Header from './components/layout/Header';
import Buttons from './components/Buttons';
import About from './components/layout/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/layout/Projects';
import ReactTooltip from 'react-tooltip';
import Contact from './components/layout/Contact';

const options = {
  fpsLimit: 60,
background: {
  color: "#000"
},
interactivity: {
  events: {
    onClick: { enable: true, mode: "push" },
    onHover: {
      enable: true,
      mode: "repulse",
      parallax: { enable: false, force: 60, smooth: 10 }
    },
    resize: true
  },
  modes: {
    push: { quantity: 4 },
    repulse: { distance: 200, duration: 0.4 }
  }
},
particles: {
  color: { value: "#ffffff" },
  move: {
    direction: "none",
    enable: true,
    outModes: "out",
    random: false,
    speed: 1.5,
    straight: false
  },
  number: {
    density: {
      enable: true,
      area: 1000
    },
    value: 100
  },
  opacity: {
    animation: {
      enable: true,
      speed: 0.01,
      sync: true,
      startValue: "max",
      count: 1,
      destroy: "min"
    },
    value: {
      min: 0,
      max: 0.5
    }
  },
  shape: {
    type: "triangle"
  },
  size: {
    value: { min: 1, max: 5 }
  }
}
};

const animationOptions = {strings: ["React Developer", "Full Stack Javascript Developer", "Python Developer", ".NET Developer", "Chess Player", "Food Lover", "Gaming Enthusiast"], typeSpeed: 50, backSpeed: 50, loop: true, backDelay: 2000, smartBackspace: true, showCursor: false};
function App() {
  const typed = useRef(null);
  const target = useRef(null);
  useEffect(() => {
    typed.current = new Typed(target.current, animationOptions);
    return () => {
      typed.current.destroy();
    }
  }, []);
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  const init = (Main) => {
    loadFireflyPreset(Main);
  }
  return (
    <>
    <section className={`home ${styles.section} ${styles.sectionOne}`}>
    <Particles options={options} init={init} className={styles.bg}/>
    <h1 className={styles.name}>Hi, My name is Ozzy Aytekin</h1>
    <div className={styles.container}>
    <h1 className={styles.tag}><span className={styles.languageText} ref={target}></span></h1></div>
    <Buttons></Buttons>
    </section>
    <section className={`about ${styles.section}`} data-aos="fade">
      <About />
    </section>
    <section className={`projects ${styles.section}`} data-aos="fade-up" data-aos-offset="-180">
      <Projects />
    </section>
    <section className={`contact ${styles.contact}`}>
      <Contact />
    </section>
    <Header />
    <ReactTooltip effect="solid"/>

    </>
  );
}

export default App;
