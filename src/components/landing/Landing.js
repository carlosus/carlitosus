import React from 'react';
import styles from './Landing.css';

export default function Landing() {
  const name = 'carlos \n us santiago';

  return (
    <>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.message}>
        <h3>Under Construction</h3>
      </div>
    </div>
    </>
  );
}

