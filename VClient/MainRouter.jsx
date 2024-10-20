
/*
File Name: MainRouter.jsx
Student Name: Samer Aljundi
Student ID: 301471598
Created on Date: 25 SEP 2024
Last update Date: 29 SEP 2024
*/
import {Route, Routes} from 'react-router-dom';
import Projects from './src/components/sections/Projects/Projects';
import Services from './src/components/sections/Services/Services';
import ContactMe from './src/components/sections/ContactMe/ContactMe';
import Layout from './src/components/sections/Layout/Layout';
import AboutMe from './src/components/sections/AboutMe/AboutMe';
import Hello from './src/components/sections/Hello/Hello';

export default function MainRouter  ()
    {
return (<div>
    <Layout/>
    <Routes>
        <Route exact path = "/" element= {<Hello />} />
        <Route exact path = "/aboutme" element = {<AboutMe/>} />
        <Route exact path = "/projects" element = {<Projects />} />
        <Route exact path = "/services" element = {<Services />} />
        <Route exact path = "/contactme" element = {<ContactMe />} />

    </Routes>
</div>
    );
 };
