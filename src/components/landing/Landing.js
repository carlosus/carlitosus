import React from 'react';
import styles from './Landing.css';
import linkedin from '../../assets/linkedin-white.png'
import github from '../../assets/github-white.png'

export default function Landing() {
  const name = 'carlos \n us santiago';

  return (
    <>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.message}>
        <h3>UNDER CONSTRUCTION</h3>
      </div>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/carlosuss/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/carlosus">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
    </>
  );
}

