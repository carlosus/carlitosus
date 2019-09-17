import React from 'react';
import styles from './NavBar.css';
import githubIcon from '../../assets/githubIcon.png';
import linkedinIcon from '../../assets/linkedinIcon.png';

function NavBar() {
  return (
    <header>
      <div className={styles.container}>
        <nav>
          <div className={styles.logo}>
            C
          </div>
          <div className={styles.icons}>
            <div>
              <img src={githubIcon} />
            </div>
            <div>
              <img src={linkedinIcon} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
