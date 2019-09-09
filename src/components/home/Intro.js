import React from 'react';
import styles from './Intro.css';

function Intro() {
  const name = 'carlos \n us santiago';

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
}

export default Intro;
