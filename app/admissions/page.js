"use client"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { 
  FaCalendarAlt, 
  FaUserCheck, 
  FaClipboardList, 
  FaCheckCircle, 
  FaInfoCircle,
  FaFileAlt,
  FaMoneyBillWave,
  FaClock
} from "react-icons/fa"

export default function AdmissionsPage() {
  const processSteps = [
    {
      number: 1,
      title: "Application",
      description: "Submit your application form with required documents",
      color: "var(--primary-blue)"
    },
    {
      number: 2,
      title: "Review",
      description: "Our team reviews your application and documents",
      color: "var(--accent-red)"
    },
    {
      number: 3,
      title: "Visit & Interview",
      description: "Tour our campus and meet our team",
      color: "var(--primary-blue)"
    },
    {
      number: 4,
      title: "Enrollment",
      description: "Receive admission decision and complete enrollment",
      color: "var(--accent-red)"
    }
  ]

  const importantDates = [
    {
      icon: FaCalendarAlt,
      title: "Application Deadline",
      date: "Dec 15, 2024",
      description: "Last day to submit applications"
    },
    {
      icon: FaUserCheck,
      title: "Admission Results",
      date: "Jan 10, 2025",
      description: "Decisions communicated to all applicants"
    },
    {
      icon: FaClipboardList,
      title: "School Opening",
      date: "Feb 3, 2025",
      description: "First term begins with orientation"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="admissions-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaFileAlt />
              <span>JOIN OUR SCHOOL</span>
            </div>
            <h1>Begin Your Child's Educational Journey</h1>
            <p>
              Welcome to New Highlight School - where we nurture young minds through quality CBC education 
              in a supportive, innovative learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="quick-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <FaClock style={{ color: 'var(--primary-blue)', fontSize: '2rem' }} />
              <div>
                <h3>Age Requirements</h3>
                <p>PP1: 4 years • PP2: 5 years • Grade 1: 6 years</p>
              </div>
            </div>
            <div className="info-card">
              <FaMoneyBillWave style={{ color: 'var(--accent-red)', fontSize: '2rem' }} />
              <div>
                <h3>Flexible Payments</h3>
                <p>Competitive fees with payment plans available</p>
              </div>
            </div>
            <div className="info-card">
              <FaUserCheck style={{ color: 'var(--primary-blue)', fontSize: '2rem' }} />
              <div>
                <h3>Simple Process</h3>
                <p>4 easy steps to join our school family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Simple Admission Process</h2>
            <p>Four straightforward steps to join our school community</p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="requirements-section">
        <div className="container">
          <div className="requirements-grid">
            {/* Requirements */}
            <div className="requirements-card">
              <h3>Required Documents</h3>
              <div className="documents-list">
                <div className="document-item">
                  <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                  <span>Completed application form</span>
                </div>
                <div className="document-item">
                  <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                  <span>Birth certificate (copy)</span>
                </div>
                <div className="document-item">
                  <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                  <span>Immunization records</span>
                </div>
                <div className="document-item">
                  <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                  <span>Previous school reports</span>
                </div>
                <div className="document-item">
                  <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                  <span>Parent ID documents</span>
                </div>
                <div className="document-item">
                  <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                  <span>4 passport photos</span>
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="fees-card">
              <h3>Fee Structure (Per Term)</h3>
              <div className="fees-list">
                <div className="fee-item">
                  <span className="fee-grade">Pre-Primary (PP1 & PP2)</span>
                  <span className="fee-amount">KSh 25,000</span>
                </div>
                <div className="fee-item">
                  <span className="fee-grade">Lower Primary (Grade 1-3)</span>
                  <span className="fee-amount">KSh 30,000</span>
                </div>
                <div className="fee-item">
                  <span className="fee-grade">Upper Primary (Grade 4-6)</span>
                  <span className="fee-amount">KSh 35,000</span>
                </div>
              </div>
              
              <div className="additional-fees">
                <h4>Additional Fees</h4>
                <div className="fee-item">
                  <span>Registration (One-time)</span>
                  <span>KSh 5,000</span>
                </div>
                <div className="fee-item">
                  <span>Activity Fee</span>
                  <span>KSh 3,000</span>
                </div>
              </div>
              
              <p className="fee-note">* Payment plans and sibling discounts available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="container">
          <div className="section-header">
            <h2>Important Dates</h2>
            <p>Key timelines for the 2025 academic year</p>
          </div>

          <div className="dates-grid">
            {importantDates.map((date, index) => (
              <div key={index} className="date-card">
                <div className="date-icon">
                  <date.icon />
                </div>
                <h3>{date.title}</h3>
                <div className="date-display">{date.date}</div>
                <p>{date.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="admissions-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our School Family?</h2>
            <p>Start your child's journey towards academic excellence today</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Start Application</a>
              <a href="/contact" className="btn btn-secondary">Schedule Visit</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        
      `}</style>
    </>
  )
}