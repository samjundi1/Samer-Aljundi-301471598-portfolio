// Projects.jsx
/*
File Name: Projects.jsx
Student Name: Samer Aljundi
Student ID: 301471598
Created on Date: 25 SEP 2024
Last update Date: 29 SEP 2024
*/

import { projectsData } from './projectsData';
import styles from './projects.module.css'; 

export default function Projects()
{
    return(
    <section>
      <div className={styles.projectsPage}>
        <h1>Highlighted Projects</h1>
        <div className={styles.projectsContainer}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p><strong>Role:</strong> {project.role}</p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      );
};