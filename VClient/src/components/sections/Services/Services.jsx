/*
File Name: Sevices.jsx
Student Name: Samer Aljundi
Student ID: 301471598
Created on Date: 25 SEP 2024
Last update Date: 29 SEP 2024
*/

// Services.jsx
/*
import './services.module.css'; 
import { servicesData } from './servicesData';
export default function Services () {
    return(
      <section>
        <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
      );
};
*/

// Services.jsx
import styles from './services.module.css';  
import { servicesData } from './servicesData';

export default function Services() {
    return (
        <section>
            <div className={styles.servicesContainer}>
                <h1>Core Services</h1>
                <div className={styles.servicesList}>
                    {servicesData.map((service, index) => (
                        <div className={styles.serviceItem} key={index}>
                            <img src={service.image} alt={service.title} className={styles.serviceImage} />
                            <h2 className={styles.serviceTitle}>{service.title}</h2>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



