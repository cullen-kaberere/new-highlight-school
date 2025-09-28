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

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--dark-navy) 0%, #1e293b 100%);
          color: white;
          padding: 4rem 0 0;
          margin-top: auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Brand Section */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .brand-icon {
          font-size: 2rem;
          color: var(--light-blue);
        }

        .footer-brand h3 {
          color: white;
          font-size: 1.5rem;
          margin: 0;
        }

        .brand-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .school-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .school-features span {
          background: rgba(59, 130, 246, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        /* Links Section */
        .footer-links h4,
        .footer-contact h4,
        .mini-map h4,
        .social-section h4 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          position: relative;
        }

        .footer-links h4::after,
        .footer-contact h4::after,
        .mini-map h4::after,
        .social-section h4::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--light-blue);
        }

        .links-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          color: var(--light-blue);
          transform: translateX(5px);
        }

        .link-icon {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .footer-link:hover .link-icon {
          transform: translateX(3px);
        }

        /* Contact Section */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .contact-icon {
          color: var(--light-blue);
          font-size: 1rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .contact-label {
          display: block;
          font-weight: 600;
          font-size: 0.9rem;
          color: white;
          margin-bottom: 0.2rem;
        }

        .contact-value {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
          line-height: 1.4;
        }

        /* Map & Social Section */
        .footer-map-social {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mini-map {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .map-container {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-section p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .social-link.facebook {
          background: rgba(24, 119, 242, 0.1);
          border-color: rgba(24, 119, 242, 0.3);
        }

        .social-link.twitter {
          background: rgba(29, 161, 242, 0.1);
          border-color: rgba(29, 161, 242, 0.3);
        }

        .social-link.instagram {
          background: rgba(225, 48, 108, 0.1);
          border-color: rgba(225, 48, 108, 0.3);
        }

        .social-link:hover {
          transform: translateY(-2px);
          border-color: currentColor;
        }

        /* Footer Bottom */
        .footer-bottom {
          padding: 2rem 0 1rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        .footer-legal {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: var(--light-blue);
        }

        .divider {
          color: rgba(255, 255, 255, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 0;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .brand-header {
            justify-content: center;
          }

          .school-features {
            align-items: center;
          }

          .footer-links h4::after,
          .footer-contact h4::after,
          .mini-map h4::after,
          .social-section h4::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .contact-item {
            justify-content: center;
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer-legal {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 0;
          }

          .footer-main {
            gap: 1.5rem;
          }

          .brand-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .school-features span {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .map-container {
            padding: 0.75rem;
          }

          .social-link {
            padding: 0.6rem 0.8rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  )
}