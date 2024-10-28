import React ,{useState , useRef} from "react";
import "./Certifies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaBars,FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Certifies(){
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
    return(
        <div>
            <header>
                <div className="tit">Y-S</div>
                <nav>
                    <ul  className={isMobile ? "nav-link" : "nvbr"}>
                        <li className='nav-link-li'><a href="/">Home</a></li>
                        <li className='nav-link-li'><a href="hmch.pdf">CV</a></li>
                        <li className='nav-link-li'><a href="/Projects">Projects</a></li>
                        <li className='nav-link-li'><a href="/Skills">Skills</a></li>
                        <li className='nav-link-li'><a href="/Certifies">Certifies</a></li>
                        <li className='nav-link-li'><a href="#contact"onClick={(e) => handleScroll(e, 'contact')} >Contacts</a></li>
                    </ul>
                    <div className='icon' onClick={toggleMenu}><FaBars /></div>
                </nav>
                
                
        </header>
       
       <h1 className="he1">Certificates in Web Development  </h1> 
    <div className="allTh">
      <div className="image-container">
        <img src="/img/certifie-HTML1.jpg" className="img-top1" alt="Project One" />
        <h3 className="image-title">Certificate in Html</h3>
      </div>
      <div className="image-container">
        <img src="/img/sertificatJS-script.png" className="img-top1" alt="Project Three" />
        <h3 className="image-title">Certificate in JavaScript</h3>
      </div>
      <div className="image-container">
        <img src="/img/certificatGIT.png" className="img-top1" alt="Project Three" />
        <h3 className="image-title">Certificate in GIT</h3>
      </div>
      <div className="image-container">
        <img src="/img/certificatREACT.png" className="img-top1" alt="Project Three" />
        <h3 className="image-title">Certificate in React</h3>
      </div>
      <div className="image-container">
        <img src="/img/certificatCSS-copy1.png" className="img-top1" alt="Project Two" />
        <h3 className="image-title">Certificate in CSS</h3>
      </div>
     
      <div className="image-container">
        <img src="/img/certifiee1-writing.jpg" className="img-top1" alt="Project Three" />
        <h3 className="image-title">Certificate in Typing</h3>
      </div>


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
export default Certifies ;