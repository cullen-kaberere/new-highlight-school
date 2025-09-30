"use client"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import {
  FaBookOpen,
  FaCalculator,
  FaGlobe,
  FaPalette,
  FaPray,
  FaHeart,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaCheckCircle,
  FaGraduationCap,
  FaBrain,
  FaHandsHelping
} from "react-icons/fa"

export default function AcademicsPage() {
  const learningAreas = [
    {
      icon: FaBookOpen,
      title: "Languages",
      color: "var(--primary-blue)",
      subjects: ["English Communication", "Kiswahili Skills", "Reading & Writing"]
    },
    {
      icon: FaCalculator,
      title: "Mathematics",
      color: "var(--accent-red)",
      subjects: ["Number Concepts", "Problem Solving", "Measurement & Data"]
    },
    {
      icon: FaGlobe,
      title: "Environmental Studies",
      color: "var(--primary-blue)",
      subjects: ["Science Exploration", "Social Studies", "Environmental Care"]
    },
    {
      icon: FaPalette,
      title: "Creative Arts",
      color: "var(--accent-red)",
      subjects: ["Music & Dance", "Art & Craft", "Physical Education"]
    },
    {
      icon: FaPray,
      title: "Religious Education",
      color: "var(--primary-blue)",
      subjects: ["Moral Values", "Spiritual Growth", "Cultural Awareness"]
    },
    {
      icon: FaHeart,
      title: "Life Skills",
      color: "var(--accent-red)",
      subjects: ["Personal Development", "Social Skills", "Health & Wellness"]
    }
  ]

  const cbcBenefits = [
    {
      icon: FaBrain,
      title: "Critical Thinking",
      description: "Develop problem-solving and analytical skills"
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Learn teamwork and communication skills"
    },
    {
      icon: FaLightbulb,
      title: "Creativity",
      description: "Encourage innovation and creative expression"
    },
    {
      icon: FaChartLine,
      title: "Progress Tracking",
      description: "Continuous assessment of skill development"
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="academics-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaGraduationCap />
              <span>CBC CURRICULUM</span>
            </div>
            <h1>Nurturing Competent, Confident Learners</h1>
            <p>
              Our Competency-Based Curriculum focuses on developing practical skills and values 
              that prepare students for real-world challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* CBC Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>The CBC Advantage</h2>
            <p>Developing 21st-century skills through practical, engaging learning</p>
          </div>
          
          <div className="benefits-grid">
            {cbcBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon" style={{ color: benefit.icon === FaBrain || benefit.icon === FaChartLine ? 'var(--primary-blue)' : 'var(--accent-red)' }}>
                  <benefit.icon />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="learning-section">
        <div className="container">
          <div className="section-header">
            <h2>Learning Areas</h2>
            <p>Comprehensive curriculum covering all essential development domains</p>
          </div>

          <div className="learning-grid">
            {learningAreas.map((area, index) => (
              <div key={index} className="learning-card">
                <div className="card-header">
                  <div className="area-icon" style={{ color: area.color }}>
                    <area.icon />
                  </div>
                  <h3 style={{ color: area.color }}>{area.title}</h3>
                </div>
                <div className="subjects-list">
                  {area.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="subject-item">
                      <FaCheckCircle style={{ color: area.color, fontSize: '0.8rem' }} />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Approach */}
      <section className="assessment-section">
        <div className="container">
          <div className="assessment-grid">
            <div className="assessment-content">
              <div className="section-header">
                <h2>Continuous Growth Assessment</h2>
                <p>Tracking progress through practical skill demonstration</p>
              </div>
              
              <div className="assessment-methods">
                <div className="method">
                  <h4>Formative Assessment</h4>
                  <ul>
                    <li>Daily observation & feedback</li>
                    <li>Project-based evaluations</li>
                    <li>Portfolio development</li>
                    <li>Peer collaboration</li>
                  </ul>
                </div>
                
                <div className="method">
                  <h4>Summative Assessment</h4>
                  <ul>
                    <li>Skill demonstrations</li>
                    <li>Progress reports</li>
                    <li>Parent conferences</li>
                    <li>Competency checks</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="assessment-visual">
              <div className="visual-card">
                <FaHandsHelping style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '1rem' }} />
                <h3>Parent Partnership</h3>
                <p>Regular updates and collaborative support for each child's learning journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="academics-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Begin Your Child's Learning Journey</h2>
            <p>Discover how our CBC program can unlock your child's potential</p>
            <div className="cta-buttons">
              <a href="/admissions" className="btn btn-primary">Enroll Now</a>
              <a href="/contact" className="btn btn-secondary">Learn More</a>
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