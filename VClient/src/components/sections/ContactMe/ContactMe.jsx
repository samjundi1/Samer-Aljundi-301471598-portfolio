// ContactMe.jsx
/*
File Name: ContactMe.jsx
Student Name: Samer Aljundi
Student ID: 301471598
Created on Date: 25 SEP 2024
Last update Date: 1 OCT 2024
*/
import React, { useState } from 'react';
import styles from './contactme.module.css';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert('Form submitted successfully!'); 
    alert(`Thank you for your Contacting me!\n\nHere is the information you provided:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}
