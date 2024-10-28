import React ,{ useState , useRef } from 'react'
import imgVisage from "./images/imgVisage.jpeg"
import imgVi from "./images/imgVi.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaBars,FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Port.css';



function Portfolio() {
    const form = useRef();
        const [submitted, setSubmitted] = useState(false);
        const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_vucj1sw', 'template_t8lzipi', form.current, {
              publicKey: '8xpO2rN73Qr5UmuG6',
            })
            .then(
              () => {
                setSubmitted(true);  // Set submitted state to true on success
                form.current.reset(); 
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };
    const handleScroll = (e, targetId) => {
        e.preventDefault(); // Prevent default link behavior
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
    <div>
       <header>
                <div className="tit">HM</div>
                <nav>
                    <ul  className={isMobile ? "nav-link" : "nvbr"}>
                        <li className='nav-link-li '><a  href="/">Home</a></li>
                        <li className='nav-link-li'><a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')}>About Me</a></li>
                        <li className='nav-link-li'><a href="hmch.pdf">CV</a></li>
                        <li className='nav-link-li'><a href="/Projects">Projects</a></li>
                        <li className='nav-link-li'><a href="/Skills">Skills</a></li>
                        <li className='nav-link-li'><a href="/Certifies">Certifies</a></li>
                        <li className='nav-link-li'><a href="#contact"onClick={(e) => handleScroll(e, 'contact')} >Contacts</a></li>
                    </ul>
                    <div className='icon' onClick={toggleMenu}><FaBars /></div>
                </nav>
                
                
        </header>
    <div className="global">
    <div className="info">
    <h3 className="mine">Hello , It's Me</h3>
    <h1>Yassin Hammouche</h1>
    <h3>I'm a <span> Front End Developer </span></h3>
    <p>My name is Yassin Hammouche , I am a front-end developer , I study at ISGI Laayoune , I have a web development diploma in 2022/2024 ,This is My Portfolio</p>
        <a href="/hmch.pdf" download>
    <button>Download CV</button></a>
    </div>
    <img src={imgVisage} alt="images" />
    </div>
    <h1  id="about-me" className="titre" >About me</h1>
    <div  className="infor">
    <img src={imgVi} alt="images"  className='unique'/>
        <p className="para">I have a solid foundation in Computer Science principles.
During my Experiences, I acquired expertise in Full-Stack development. I worked on
a wide range of Projects with Front-End languages, including the development and maintenance of websites and applications based on
web.In addition to my Technical Skills, I have Excellent Problem Solving Skills, which have
revealed invaluable in My Work. In addition to that I worked on several projects with:
HTML/CSS/JAVASCRIPT/BOOTSTRAP/TAILIWINDCSS/REACT in Front-End , NodeJs/Express in Back-End . and Version management with GIT/GITHUB/GITLAB</p>
    </div>
    <footer>
        <h1 className='cont'>Contact me</h1>
        <div className="row" id="contact">
            <div className="col">
                <h4 className='sendMe'>send to me a message :</h4>
                <div >
                {submitted ? (
                <div className="message-box">
                    <h2 className='msg'>Thank you for your visit and your message ! if you need anything just Contact Me</h2>
                </div>
                ) : (
            <form   ref={form} onSubmit={sendEmail} >
                        <div class="form-group mb-3">
                            <input class="form-control" type="text" name="from_name"  placeholder="Your Name"
                                required="" 
                                 />
                        </div>
                        <div class="form-group mb-3">
                            <input class="form-control" type="email" name="from_email" 
                                placeholder="Your Email" required="" 
                                 />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message"  placeholder="Write Message"
                                required="" 
                            ></textarea>
                        </div>
                        <div class="form-group-2 mt-3 text-end">
                            <button type="submit" class="btn btn-style">Submit Form</button>
                        </div>
                    </form>
                    )}
                    </div>
            </div>
            <div className="col">
                <ul className="diff">
                <li>Phone</li>
                <li>Adresse</li>
                <li className="em">Email</li>
            </ul>
            </div>
            <div className="col">
                <ul>
                <li>+212 603169350</li>
                <li>Av Taaoune rue rahma || laayoune Maroc</li>
                <li>yassinhamouch230@gmail.com</li>
                </ul>
            </div>
            <div className="col">
                <ul className="social">
                    <li><a href="https://web.facebook.com/profile.php?id=61561347281213"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="https://www.instagram.com/yass_in.store/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/hamouch-yassin-33932a324/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://github.com/YASSIN-HMCH"><FaGithub/></a></li>
            </ul>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Portfolio ;