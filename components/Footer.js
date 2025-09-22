import Link from "next/link"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>New Highlight School</h3>
            <p>
              Nurturing young minds through the Competency-Based Curriculum (CBC) model. We are committed to providing
              quality primary education that prepares students for a bright future.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="flex flex-col gap-sm">
              <Link href="/about">About Us</Link>
              <Link href="/academics">CBC Academics</Link>
              <Link href="/admissions">Admissions</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="flex flex-col gap-sm">
              <div className="flex items-center gap-sm">
                <FaMapMarkerAlt />
                <span>123 Education Street, Learning City</span>
              </div>
              <div className="flex items-center gap-sm">
                <FaPhone />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-sm">
                <FaEnvelope />
                <span>info@newhighlightschool.ac.ke</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="flex gap-md">
              <a href="#" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 New Highlight School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
