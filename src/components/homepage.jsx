import React from 'react'
import './homepage.css'
import {Link} from 'react-scroll'
import { useState } from 'react'

const homepage = () => {
    const[showMenu,setShowMenu]=useState(false);
    const handleButtonToggle=()=>{
        setShowMenu(!showMenu);
    };
  return (
    <>
    <div>
    <nav className="navbar">
        <button className="mobile-menu-btn" onClick={handleButtonToggle}><i className="fas fa-bars"></i></button>
        <ul className={`nav-links ${showMenu ? 'show':''}`}>
            <li><Link to="home"smooth={true}duration={500}>Home</Link></li>
            <li><Link to="education"smooth={true}duration={500}>Education</Link></li>
            <li><Link to="projects"smooth={true}duration={500}>Projects</Link></li>
            <li><Link to="skills"smooth={true}duration={500}>Skills</Link></li>
            <li><Link to="experience"smooth={true}duration={500}>Experience</Link></li>
            <li><Link to="contact"smooth={true}duration={500}>Contact</Link></li>
            <li><Link to="social"smooth={true}duration={500}>Social</Link></li>
        </ul>
    </nav>

    <section className="hero" id="home">
        <div className="hero-content">
            <h1>Albin Tomy</h1>
            <p>A dynamic front-end developer with a proven track record at Zpacetech Technologies, Kozhikode excelling in React.js,Node.js,MongoDB and Express.js to deliver efficient and responsive web designs.I am also skilled in fostering team collaboration and leveraging these tools to develop innovative web applications.</p>
            <Link to="contact" className="cta-btn"smooth={true}duration={500}>Mail</Link>
        </div>
    </section>

    <section id="education">
        <h2 className="section-title">EDUCATION</h2>
        <div className="timeline" id="education-timeline">
           <div className="timeline-item">
            <h3>Bachelor of Science in Electronics</h3>
            <p>Mahatma Gandhi University</p>
            <p>2016 - 2019</p>
           </div> 
           <div className="timeline-item">
            <h3>PG Diploma in embedded systems development</h3>
            <p>SMECLabs, Kaloor, Kochi</p>
            <p>2019 - 2020</p>
           </div>
        </div>
    </section>
    
    <section id="projects">
        <h2 className="section-title">PROJECTS</h2>
        <div className="timeline" id="projects-timeline">
            <div className="timeline-item">
              <h3>DOIT-The TODO Application</h3>
              <p>This Todo Application is a sleek and intuitive task management tool built using React JS. Leveraging React's powerful hooks such as useState for state management, useRef for direct DOM manipulation, and useEffect for handling side effects, the app ensures a smooth and dynamic user experience. The application features a beautiful and responsive UI with modern design elements, making it both visually appealing and user-friendly. Functional components are used throughout the project, promoting clean and maintainable code. Users can easily add, edit, delete, and mark tasks as completed, all within a seamless and interactive interface. Whether for personal or professional use, this Todo App is designed to enhance productivity with style and efficiency.</p>
            </div>  
            <div className="timeline-item">
              <h3>CLOUD SYNC-The comprehensive weather application</h3>
              <p>This Weather Application is a dynamic and user-friendly tool built using React JS and integrated with the OpenWeather API to provide real-time weather data and forecasts for cities worldwide. The app features a clean and responsive UI, offering users accurate and up-to-date information such as temperature, humidity, wind speed, and weather conditions. With the help of React hooks like useState for managing state and useEffect for fetching API data, the application ensures seamless functionality and performance. Users can search for weather details of multiple cities across the globe, view detailed forecasts, and enjoy a visually appealing design. Whether planning a trip or staying informed about local weather, this app delivers reliable and comprehensive weather insights at your fingertips.</p>
            </div> 
        </div>
    </section>

    <section id="skills">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid" id="skills-grid">
            <div className="skill-card">
            <i class="fa-solid fa-code"></i>
            <h3>Frontend</h3>
            <p>HTML5, CSS3, JavaScript(ES6+), React.js, Git, GitHub, VSCode, Debugging</p>
            </div>
            <div className="skill-card">
            <i class="fa-solid fa-globe"></i>
            <h3>Backend</h3>
            <p>Node.js, MongoDB, Express.js, Python, C, C++, NoSQL</p>
            </div>
        </div>
    </section>

    <section id="experience">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="timeline" id="experience-timeline">
            <div className="timeline-item">
                <div className="experience-item">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                    <h3>Hardware Technician</h3>
                    <p>AJT Enterprises Pvt Ltd, Thodupuzha</p>
                    <p>2019 - 2021</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="experience-item">
                <i class="fa-solid fa-wifi"></i>
                    <h3>Frontend Developer</h3>
                    <p>Zpacetech Technologies, Kozhikode</p>
                    <p>2021 - 2023</p>
                </div>
            </div>
           
        </div>
    </section>

    <section id="contact">
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="contact-container">
            <div className="contact-card">
                <a href="tel:+919947322239">
                <i className="fas fa-phone contact-icon"></i>
                <h3>Phone</h3>
                <p>+91 9947322239</p>
                </a>
            </div>
            <div className="contact-card">
                <a href="mailto:ialbintomy@gmail.com">
                <i className="fas fa-envelope contact-icon"></i>
                <h3>Email</h3>
                <p>ialbintomy@gmail.com</p>
                </a>
            </div>
        </div>
    </section>

    <footer>
        <div className="social-links" id='social'>
            <a href="https://www.instagram.com/albintomy_?igsh=N2ZtY2MwdG1ueG56"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/ialbintomy"><i className="fab fa-github"></i></a>
            <a href="https://www.facebook.com/share/1WoJN8b1Np/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://wa.me/+919947322239"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <p>© 2024 Albin Tomy. All rights reserved.</p>
    </footer>
    </div>
    </>
  )
}

export default homepage
