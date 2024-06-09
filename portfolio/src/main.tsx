import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./sections/Header.tsx";
import Projects from "./sections/Projects.tsx";
import About from "./sections/About.tsx";
import Contact from "./sections/Contact.tsx";
import Skills from "./sections/Skills.tsx";
import Footer from "./sections/Footer.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>

    </React.StrictMode>,
)
