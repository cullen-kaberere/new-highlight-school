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
  FaWhatsapp,
  FaUser,
  FaSchool,
  FaComments
} from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    inquiryType: "",
    message: "",
  })

  const [activeTab, setActiveTab] = useState("general")
  const [loading, setLoading] = useState(false) // ✅ New loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) // ✅ Start loading

    try {
      const response = await fetch("https://highlight-server.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert("✅ Thank you! Your message has been sent.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          studentGrade: "",
          inquiryType: "",
          message: "",
        })
      } else {
        alert("❌ Failed to send: " + result.error)
      }
    } catch (error) {
      alert("⚠️ Network error. Try again later.")
      console.error(error)
    } finally {
      setLoading(false) // ✅ Stop loading
    }
  }

  return (
    <>
      <Navigation />

      {/* Compact Hero Section */}
      <section className="contact-hero" style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-navy) 100%)',
        padding: '120px 0 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="floating-shapes">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '1rem 2rem',
              borderRadius: '50px',
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px' }}>
                GET IN TOUCH
              </span>
            </div>
            <h1 style={{ 
              color: 'white', 
              fontSize: '3rem', 
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Let's Start the Conversation
            </h1>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Ready to discover how New Highlight School can nurture your child's potential?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Tabs */}
      <section className="section" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="contact-tabs">
            <button 
              className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <FaComments />
              General Inquiry
            </button>
            <button 
              className={`tab-button ${activeTab === 'admissions' ? 'active' : ''}`}
              onClick={() => setActiveTab('admissions')}
            >
              <FaSchool />
              Admissions
            </button>
            <button 
              className={`tab-button ${activeTab === 'visit' ? 'active' : ''}`}
              onClick={() => setActiveTab('visit')}
            >
              <FaUser />
              Schedule Visit
            </button>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="section" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon" style={{ background: 'linear-gradient(135deg, var(--primary-blue), #3b82f6)' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <h3 style={{ color: 'var(--primary-blue)' }}>Our Campus</h3>
                </div>
                <div className="info-content">
                  <p style={{ color: 'var(--dark-navy)', fontWeight: '500' }}>
                    Ruthimitu<br />
                    Dagoretti road<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon" style={{ background: 'linear-gradient(135deg, var(--accent-red), #ef4444)' }}>
                    <FaClock />
                  </div>
                  <h3 style={{ color: 'var(--accent-red)' }}>Office Hours</h3>
                </div>
                <div className="info-content">
                  <div className="time-slot">
                    <span style={{ fontWeight: '600' }}>Mon - Fri</span>
                    <span>7:30 AM - 5:00 PM</span>
                  </div>
                  <div className="time-slot">
                    <span style={{ fontWeight: '600' }}>Saturday</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="time-slot">
                    <span style={{ fontWeight: '600' }}>Sunday</span>
                    <span style={{ color: 'var(--accent-red)' }}>Closed</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon" style={{ background: 'linear-gradient(135deg, var(--primary-blue), #3b82f6)' }}>
                    <FaPhone />
                  </div>
                  <h3 style={{ color: 'var(--primary-blue)' }}>Quick Connect</h3>
                </div>
                <div className="info-content">
                  <div className="contact-method">
                    <FaPhone style={{ color: 'var(--primary-blue)' }} />
                    <div>
                      <span style={{ fontWeight: '600' }}>Main Office</span>
                      <span style={{ color: 'var(--dark-navy)' }}>+254 700 123 456</span>
                    </div>
                  </div>
                  <div className="contact-method">
                    <FaWhatsapp style={{ color: 'var(--accent-red)' }} />
                    <div>
                      <span style={{ fontWeight: '600' }}>WhatsApp</span>
                      <span style={{ color: 'var(--dark-navy)' }}>+254 700 123 457</span>
                    </div>
                  </div>
                  <div className="contact-method">
                    <FaEnvelope style={{ color: 'var(--primary-blue)' }} />
                    <div>
                      <span style={{ fontWeight: '600' }}>Email</span>
                      <span style={{ color: 'var(--dark-navy)' }}>hello@newhighlightschool.ac.ke</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-card">
                <h4 style={{ color: 'var(--dark-navy)', marginBottom: '1rem' }}>Follow Our Journey</h4>
                <div className="social-links">
                  <a href="#" className="social-link facebook">
                    <FaFacebook />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link twitter">
                    <FaTwitter />
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link instagram">
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2 style={{ color: 'var(--primary-blue)' }}>
                  {activeTab === 'general' && 'General Inquiry'}
                  {activeTab === 'admissions' && 'Admissions Process'}
                  {activeTab === 'visit' && 'Schedule a Campus Tour'}
                </h2>
                <p style={{ color: 'var(--dark-navy)' }}>
                  {activeTab === 'general' && 'Have questions? We\'d love to hear from you.'}
                  {activeTab === 'admissions' && 'Start your child\'s educational journey with us.'}
                  {activeTab === 'visit' && 'Experience our campus and meet our team.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  {activeTab !== 'general' && (
                    <div className="form-group">
                      <label htmlFor="studentGrade">
                        {activeTab === 'admissions' ? 'Grade Interested In' : 'Current Grade'}
                      </label>
                      <select
                        id="studentGrade"
                        name="studentGrade"
                        value={formData.studentGrade}
                        onChange={handleChange}
                      >
                        <option value="">Select grade</option>
                        <option value="pp1">PP1 (Age 4)</option>
                        <option value="pp2">PP2 (Age 5)</option>
                        <option value="grade1">Grade 1 (Age 6)</option>
                        <option value="grade2">Grade 2 (Age 7)</option>
                        <option value="grade3">Grade 3 (Age 8)</option>
                        <option value="grade4">Grade 4 (Age 9)</option>
                        <option value="grade5">Grade 5 (Age 10)</option>
                        <option value="grade6">Grade 6 (Age 11)</option>
                      </select>
                    </div>
                  )}
                </div>

                {activeTab === 'general' && (
                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="academics">Academic Programs</option>
                      <option value="fees">Fee Structure</option>
                      <option value="facilities">School Facilities</option>
                      <option value="transport">Transport Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="message">
                    {activeTab === 'general' && 'Your Message *'}
                    {activeTab === 'admissions' && 'Tell us about your child *'}
                    {activeTab === 'visit' && 'Any specific areas you\'d like to see? *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder={
                      activeTab === 'general' ? "How can we help you today?" :
                      activeTab === 'admissions' ? "Share your child's interests and any special needs..." :
                      "Let us know your preferred date and time for the visit..."
                    }
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={loading}>
                  <FaPaperPlane />
                  {loading
                    ? "Sending..."
                    : activeTab === "general"
                      ? "Send Message"
                      : activeTab === "admissions"
                        ? "Start Application"
                        : "Schedule Visit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)', padding: '80px 0' }}>
        <div className="container">
          <div className="map-section">
            <div className="map-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                Find Your Way to Excellence
              </h2>
              <p style={{ color: 'var(--dark-navy)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                Our campus is designed to inspire learning and creativity. Come see for yourself!
              </p>
            </div>
            
            <div className="map-container" style={{ 
              borderRadius: '1rem', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-xl)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199220532565!2d36.69475167448297!3d-1.28180523562022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bffdea7af55%3A0x7fb474375a32c1a5!2sNew%20Highlight%20School!5e0!3m2!1sen!2ske!4v1758885337027!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Highlight School Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
