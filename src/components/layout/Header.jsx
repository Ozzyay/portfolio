import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className={styles.nav}>
    <div className={styles.container}>
        <Link to="home" className={styles.headerLink} activeClass={styles.activeNav} spy={true} smooth={true} offset={-50}>Home</Link>
        <Link to="about" className={styles.headerLink} activeClass={styles.activeNav} spy={true} smooth={true} offset={-50}>About</Link>
        <Link to="projects" className={styles.headerLink} activeClass={styles.activeNav} spy={true} smooth={true} offset={-50}>Projects</Link>
        <Link to="contact" className={styles.headerLink} activeClass={styles.activeNav} spy={true} smooth={true}>Contact</Link>
        </div>
    </nav>
  )
};

export default Header;