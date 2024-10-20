/*
File Name: Layout.jsx
Student Name: Samer Aljundi
Student ID: 301471598
Created on Date: 25 SEP 2024
Last update Date: 29 SEP 2024
*/
import {Link} from 'react-router-dom';
import logo from '../../../assets/logo.png'; 
import styles from './layout.module.css';

export default function Layout(){
   return( 
<section className={styles.container}>
<div >
<h1>Welcome to My Portfolio</h1>
<p>
</p>
</div>
<div className={styles.logo}>
<img src={logo} alt="Logo" className={styles.image} />
</div>
<div>
<nav>
   <Link to="/">Hello</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/Services">Services</Link>|<Link to="/ContactMe">Contact Me</Link>
</nav>
</div>
<br/>
<hr/>
</section>
   );
};
