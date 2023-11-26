import { NavLink } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"
import Welcome from "../../components/Welcome/Welcome"
import './landing.css'

const Landing = () => {
    return (
        <div className="landing-page">
            <div className="landing-screen">
                <div className="landing-gradient" id="home">
                    <div className="welcome-navbar">
                      <Welcome />
                      <Navbar type="home"/>
                    </div>
                    <div className="landing-container">
                        <div className="landing-text">
                          <p>Donate Blood,</p>
                          <p>Save a life</p>
                        </div>
                        <NavLink to="/donate" className="landing-link">
                          <p className="landing-btn">Donate</p>
                        </NavLink>
                    </div>
                </div>

                <div className="about-page" id="about">
                    <div className="about-section">
                        <h2 className="about-header">About us</h2>
                        <p className="about-text">
                          Welcome to the Blood Bank System. We are committed to 
                          ensuring a steady and safe supply of blood to those in 
                          need. Our mission is to save lives through blood donations 
                          and efficient management of blood resources.
                        </p>
                        <a href="#home" className="landing-link">
                            <p className="back-top">Back to top</p>
                        </a>
                    </div>
                </div>

                <div className="services-page" id="services">
                    <div className="services-overlay">
                        <h2 className="services-header">Services</h2>
                    </div>
                </div>

                <div className="contact-page" id="contact">
                    <div className="contact-overlay">
                        <div className="contact-info">
                            <p className="contact-text">
                                If you have any questions or require assistance, 
                                please do not hesitate to contact us.
                           </p>
                           <p className="contact-digit">
                                Call now: 0799641447
                           </p>
                        </div>
                        
                        <footer className="footer">
                            <p className="footer-text">Copyright &copy; 2023 Save Lifes. All rights reserved</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;

{/* <div className="about-us">
                <h2>About Us</h2>
                <p>
                    Welcome to the Blood Bank System. We are committed to 
                    ensuring a steady and safe supply of blood to those in 
                    need. Our mission is to save lives through blood donations 
                    and efficient management of blood resources.
                </p>
            </div>

            <div className="landing-btns">
                <div className="landing-btn">
                    <NavLink to='/adminlogin'>
                      <p>Admin login</p>
                    </NavLink>
                </div>
                <div className="landing-btn">
                    <NavLink to='/userlogin'>
                    <p>User Login</p>
                    </NavLink>
                </div>

                <div className="landing-btn">
                <NavLink to='/signup'>
                    <p>recipient signup</p>
                    </NavLink>
                </div>
            </div>

            <div className="services">
                <h2>Our Services</h2>
                <ul>
                    <li>Donor Registration</li>
                    <li>Recipient Requests</li>
                    <li>Appointment Scheduling</li>
                </ul>
            </div>

            <div className="contact-us">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or require assistance, 
                    please do not hesitate to contact us Contacts:0799641447
                </p>
            </div>
            </div> */}