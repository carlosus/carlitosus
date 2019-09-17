import React from 'react';
import styles from './Intro.css';
import downArrows from '../../assets/down-arrows.png';

function Intro() {
  const name = 'carlos \n us santiago';

  return (
    <>
    <div className={styles.container}>
      <div >
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.arrows}>
        <img src={downArrows}/>
      </div>
    </div>
    
    </>
  );
}

export default Intro;
