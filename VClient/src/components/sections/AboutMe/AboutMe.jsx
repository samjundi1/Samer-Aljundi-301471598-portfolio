
/*
File Name: AboutMe.jsx
Student Name: Samer Aljundi
Student ID: 301471598
Created on Date: 25 SEP 2024
Last update Date: 29 SEP 2024
*/
import profileImage from '../../../assets/image.jpeg';
import resume from '../../../assets/resume.pdf';
import styles from './aboutme.module.css';

export default function AboutMe() {
  return (
    <section className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img 
      src={profileImage} 
      alt="Samer Aljundi Profile Photo" 
      className={styles.myphoto} 
      />
    </div>
    <div className={styles.info}>
      <h1>Samer Aljundi</h1>
      <h2>Product Owner</h2>
      <p className={styles.description}>
      with a passion for leveraging technology to solve real-world problems and create meaningful change.
      </p>
      <a href={resume} download>
        <button className="hover">Resume</button>
      </a>
    </div>
    </section>
  );
}
