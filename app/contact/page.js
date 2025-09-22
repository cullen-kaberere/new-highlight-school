"use client"
import { useState } from "react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: "100px 0 60px" }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="text-balance">Contact Us</h1>
            <p className="text-balance">
              Get in touch with us for admissions, inquiries, or to schedule a school visit
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to answer your questions and help you learn more about New Highlight School
          </p>

          <div className="grid grid-2">
            <div>
              <div className="card mb-lg">
                <div className="flex items-center gap-md mb-md">
                  <FaMapMarkerAlt size={24} color="var(--primary-blue)" />
                  <h3>Visit Us</h3>
                </div>
                <p>
                  123 Education Street
                  <br />
                  Learning City, Nairobi
                  <br />
                  Kenya
                </p>
              </div>

              <div className="card mb-lg">
                <div className="flex items-center gap-md mb-md">
                  <FaPhone size={24} color="var(--accent-red)" />
                  <h3>Call Us</h3>
                </div>
                <p>
                  Main Office: +254 700 123 456
                  <br />
                  Admissions: +254 700 123 457
                  <br />
                  Emergency: +254 700 123 458
                </p>
              </div>

              <div className="card mb-lg">
                <div className="flex items-center gap-md mb-md">
                  <FaEnvelope size={24} color="var(--primary-blue)" />
                  <h3>Email Us</h3>
                </div>
                <p>
                  General: info@newhighlightschool.ac.ke
                  <br />
                  Admissions: admissions@newhighlightschool.ac.ke
                  <br />
                  Principal: principal@newhighlightschool.ac.ke
                </p>
              </div>

              <div className="card">
                <div className="flex items-center gap-md mb-md">
                  <FaClock size={24} color="var(--accent-red)" />
                  <h3>Office Hours</h3>
                </div>
                <p>
                  Monday - Friday: 7:30 AM - 5:00 PM
                  <br />
                  Saturday: 8:00 AM - 12:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div>
              <div className="card">
                <h3 style={{ color: "var(--primary-blue)" }} className="mb-md">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-md">
                    <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <div className="mb-md">
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <div className="mb-md">
                    <label htmlFor="phone" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <div className="mb-md">
                    <label htmlFor="subject" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease",
                        backgroundColor: "var(--pure-white)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="academics">Academic Programs</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-md">
                    <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "2px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        transition: "border-color 0.3s ease",
                        resize: "vertical",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      placeholder="Please share your questions or comments..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    <FaPaperPlane style={{ marginRight: "0.5rem" }} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Social Media Section */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: "var(--primary-blue)" }}>Find Us</h3>
              <p className="mb-md">
                New Highlight School is conveniently located in the heart of Learning City, easily accessible by public
                transport and private vehicles. We have ample parking space for visitors.
              </p>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "var(--medium-gray)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--pure-white)",
                  fontSize: "1.125rem",
                }}
              >
                Interactive Map Coming Soon
              </div>
            </div>

            <div>
              <h3 style={{ color: "var(--accent-red)" }}>Connect With Us</h3>
              <p className="mb-md">
                Follow us on social media to stay updated with school news, events, and student achievements.
              </p>

              <div className="flex gap-md mb-lg">
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--primary-blue)",
                    color: "var(--pure-white)",
                    borderRadius: "50%",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--accent-red)",
                    color: "var(--pure-white)",
                    borderRadius: "50%",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "var(--primary-blue)",
                    color: "var(--pure-white)",
                    borderRadius: "50%",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <FaInstagram size={24} />
                </a>
              </div>

              <div className="card">
                <h4 style={{ color: "var(--primary-blue)" }}>Quick Contact</h4>
                <p className="mb-sm">For urgent matters or immediate assistance:</p>
                <div className="flex items-center gap-sm mb-sm">
                  <FaPhone size={16} color="var(--accent-red)" />
                  <strong>Emergency: +254 700 123 458</strong>
                </div>
                <div className="flex items-center gap-sm">
                  <FaEnvelope size={16} color="var(--primary-blue)" />
                  <strong>urgent@newhighlightschool.ac.ke</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
