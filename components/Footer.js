import Link from "next/link"
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaGraduationCap,
  FaArrowRight,
  FaClock
} from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* School Info */}
            <div className="footer-brand">
              <div className="brand-header">
                {/* <FaGraduationCap className="brand-icon" /> */}
                <h3>New Highlight School</h3>
              </div>
              <p className="brand-description">
                Where learning meets innovation. We nurture young minds through the Competency-Based Curriculum, 
                preparing confident, creative, and responsible future leaders.
              </p>
              {/* <div className="school-features">
                <span>🏆 CBC Excellence</span>
                <span>🌟 Quality Education</span>
                <span>💡 Innovative Learning</span>
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Navigation</h4>
              <div className="links-grid">
                <Link href="/about" className="footer-link">
                  {/* <FaArrowRight className="link-icon" /> */}
                  About Our School
                </Link>
                <Link href="/academics" className="footer-link">
                  {/* <FaArrowRight className="link-icon" /> */}
                  CBC Curriculum
                </Link>
                <Link href="/admissions" className="footer-link">
                  {/* <FaArrowRight className="link-icon" /> */}
                  Admissions Process
                </Link>
                <Link href="/contact" className="footer-link">
                  {/* <FaArrowRight className="link-icon" /> */}
                  Contact & Visit
                </Link>
                <Link href="/careers" className="footer-link">
                  {/* <FaArrowRight className="link-icon" /> */}
                  Careers
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <span className="contact-label">Our Campus</span>
                    <span className="contact-value">123 Learning Avenue, Nairobi</span>
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <span className="contact-label">Call Us</span>
                    <span className="contact-value">+254 700 123 456</span>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">hello@newhighlightschool.ac.ke</span>
                  </div>
                </div>
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div>
                    <span className="contact-label">Office Hours</span>
                    <span className="contact-value">Mon-Fri: 7:30 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Map & Social */}
            <div className="footer-map-social">
              {/* Mini Map */}
              <div className="mini-map">
                <h4>Visit Our Campus</h4>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199220532565!2d36.69475167448297!3d-1.28180523562022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bffdea7af55%3A0x7fb474375a32c1a5!2sNew%20Highlight%20School!5e0!3m2!1sen!2ske!4v1758885337027!5m2!1sen!2ske"
                    width="100%"
                    height="120"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="New Highlight School Location"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h4>Follow Our Journey</h4>
                <p>Stay updated with school news and events</p>
                <div className="social-links">
                  <a href="#" className="social-link facebook" aria-label="Facebook">
                    <FaFacebook />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link twitter" aria-label="Twitter">
                    <FaTwitter />
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link instagram" aria-label="Instagram">
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 New Highlight School. Excellence in CBC Education.</p>
              <div className="footer-legal">
                <Link href="/privacy">Privacy Policy</Link>
                <span className="divider">|</span>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
    </>
  )
}