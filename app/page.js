"use client"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import ScrollAnimations from "../components/ScrollAnimations"
import RotatingText from "../components/RotatingText"
import { 
  FaBrain, 
  FaHandsHelping, 
  FaLightbulb, 
  FaSeedling, 
  FaUsers, 
  FaChartLine,
  FaPalette,
  FaMusic,
  FaRunning,
  FaBookReader,
  FaCalculator,
  FaGlobeAfrica,
  FaHeart,
  FaAward,
  FaGraduationCap,
  FaShieldAlt
} from "react-icons/fa"

export default function HomePage() {
  const rotatingTexts = [
    "Where Learning Comes Alive",
    "Nurturing Tomorrow's Leaders",
    "Inspiring Curiosity Every Day",
    "Building Brighter Futures Together"
  ];

  return (
    <>
      <ScrollAnimations />
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="floating-shapes">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="text-balance hero-main-title">
              Welcome to New Highlight School
            </h1>
            
      {/* Rotating Text Subtitle - Fixed to be visible */}
            <div className="hero-subtitle-wrapper">
              <RotatingText 
                texts={[
                  "Where Learning Comes Alive",
                  "Nurturing Tomorrow's Leaders",
                  "Inspiring Curiosity Every Day",
                  "Building Brighter Futures Together"
                ]} 
                interval={3000} 
              />
            </div>
            
            <p className="text-balance hero-description">
              Nurturing young minds through the Competency-Based Curriculum (CBC) model. 
              Where learning meets innovation and every child's potential shines bright.
            </p>
            <div className="flex gap-md justify-center hero-actions">
              <a href="/admissions" className="btn btn-primary pulse-animation">
                Apply Now
              </a>
              <a href="/about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition Section */}
      <section className="section" style={{backgroundColor: 'var(--pure-white)'}}>
        <div className="container">
          <div className="text-center mb-xl">
            <span className="badge" style={{backgroundColor: 'var(--primary-blue)', color: 'white'}}>
              Our Approach
            </span>
            <h2 className="section-title" style={{color: 'var(--primary-blue)'}}>
              The New Highlight Difference
            </h2>
            <p className="section-subtitle" style={{color: 'var(--dark-navy)'}}>
              We don't just teach curriculum - we cultivate character, curiosity, and competence
            </p>
          </div>

          <div className="feature-showcase">
            <div className="feature-item slide-in-left">
              <div className="feature-icon">
                <FaBrain />
              </div>
              <div className="feature-content">
                <h3 style={{color: 'var(--primary-blue)'}}>Mindful Learning</h3>
                <p style={{color: 'var(--dark-navy)'}}>
                  Developing critical thinking and problem-solving skills through inquiry-based learning approaches
                </p>
                <span className="feature-tag">Cognitive Development</span>
              </div>
            </div>

            <div className="feature-item slide-in-right">
              <div className="feature-content">
                <h3 style={{color: 'var(--accent-red)'}}>Collaborative Growth</h3>
                <p style={{color: 'var(--dark-navy)'}}>
                  Fostering teamwork and communication skills through group projects and peer learning
                </p>
                <span className="feature-tag" style={{backgroundColor: 'var(--light-gray)'}}>Social Skills</span>
              </div>
              <div className="feature-icon" style={{background: 'linear-gradient(135deg, var(--accent-red), #f87171)'}}>
                <FaHandsHelping />
              </div>
            </div>

            <div className="feature-item slide-in-left">
              <div className="feature-icon">
                <FaLightbulb />
              </div>
              <div className="feature-content">
                <h3 style={{color: 'var(--primary-blue)'}}>Creative Expression</h3>
                <p style={{color: 'var(--dark-navy)'}}>
                  Encouraging innovation and artistic expression through integrated arts and design thinking
                </p>
                <span className="feature-tag">Creativity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBC Pillars Section */}
      <section className="section" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="container">
          <div className="text-center mb-xl">
            <span className="badge" style={{backgroundColor: 'var(--accent-red)', color: 'white'}}>
              CBC Framework
            </span>
            <h2 className="section-title" style={{color: 'var(--primary-blue)'}}>Our Educational Pillars</h2>
          </div>

          <div className="grid grid-3">
            <div className="card text-center stagger-animation">
              <div className="pillar-header">
                <FaSeedling style={{color: 'var(--primary-blue)', fontSize: '3rem'}} />
                <div className="pillar-number">01</div>
              </div>
              <h3 style={{color: 'var(--primary-blue)'}}>Holistic Development</h3>
              <p style={{color: 'var(--dark-navy)'}}>
                Balancing academic excellence with character building, physical health, and emotional intelligence
              </p>
              <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)'}}>Character Education</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)'}}>Physical Wellness</li>
                <li style={{padding: '0.5rem 0'}}>Emotional Intelligence</li>
              </ul>
            </div>

            <div className="card text-center stagger-animation">
              <div className="pillar-header">
                <FaUsers style={{color: 'var(--accent-red)', fontSize: '3rem'}} />
                <div className="pillar-number">02</div>
              </div>
              <h3 style={{color: 'var(--accent-red)'}}>Competency Based</h3>
              <p style={{color: 'var(--dark-navy)'}}>
                Focusing on practical skills and real-world application rather than rote memorization
              </p>
              <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)'}}>Practical Skills</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)'}}>Problem Solving</li>
                <li style={{padding: '0.5rem 0'}}>Critical Thinking</li>
              </ul>
            </div>

            <div className="card text-center stagger-animation">
              <div className="pillar-header">
                <FaChartLine style={{color: 'var(--primary-blue)', fontSize: '3rem'}} />
                <div className="pillar-number">03</div>
              </div>
              <h3 style={{color: 'var(--primary-blue)'}}>Progressive Learning</h3>
              <p style={{color: 'var(--dark-navy)'}}>
                Adaptive teaching methods that cater to individual learning styles and paces
              </p>
              <ul style={{listStyle: 'none', textAlign: 'left', marginTop: '1rem'}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)'}}>Personalized Learning</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)'}}>Continuous Assessment</li>
                <li style={{padding: '0.5rem 0'}}>Growth Mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Domains Section */}
      <section className="section" style={{backgroundColor: 'var(--pure-white)'}}>
        <div className="container">
          <div className="text-center mb-xl">
            <span className="badge" style={{backgroundColor: 'var(--primary-blue)', color: 'white'}}>
              Learning Areas
            </span>
            <h2 className="section-title" style={{color: 'var(--primary-blue)'}}>Integrated Learning Domains</h2>
          </div>

          <div className="grid grid-3">
            <div className="card stagger-animation">
              <h4 style={{color: 'var(--primary-blue)', textAlign: 'center'}}>Core Academics</h4>
              <div className="domain-items">
                <div className="domain-item">
                  <FaBookReader style={{color: 'var(--primary-blue)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Language & Communication</span>
                </div>
                <div className="domain-item">
                  <FaCalculator style={{color: 'var(--primary-blue)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Mathematical Thinking</span>
                </div>
                <div className="domain-item">
                  <FaGlobeAfrica style={{color: 'var(--primary-blue)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Environmental Studies</span>
                </div>
              </div>
            </div>

            <div className="card stagger-animation">
              <h4 style={{color: 'var(--accent-red)', textAlign: 'center'}}>Creative Expression</h4>
              <div className="domain-items">
                <div className="domain-item">
                  <FaPalette style={{color: 'var(--accent-red)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Visual Arts & Design</span>
                </div>
                <div className="domain-item">
                  <FaMusic style={{color: 'var(--accent-red)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Music & Performance</span>
                </div>
                <div className="domain-item">
                  <FaRunning style={{color: 'var(--accent-red)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Physical Education</span>
                </div>
              </div>
            </div>

            <div className="card stagger-animation">
              <h4 style={{color: 'var(--primary-blue)', textAlign: 'center'}}>Life Skills</h4>
              <div className="domain-items">
                <div className="domain-item">
                  <FaHeart style={{color: 'var(--primary-blue)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Social & Emotional Learning</span>
                </div>
                <div className="domain-item">
                  <FaHandsHelping style={{color: 'var(--primary-blue)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Community Engagement</span>
                </div>
                <div className="domain-item">
                  <FaSeedling style={{color: 'var(--primary-blue)', fontSize: '1.5rem'}} />
                  <span style={{color: 'var(--dark-navy)'}}>Personal Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="container">
          <div className="text-center mb-xl">
            <span className="badge" style={{backgroundColor: 'var(--accent-red)', color: 'white'}}>
              Why Choose Us
            </span>
            <h2 className="section-title" style={{color: 'var(--primary-blue)'}}>Excellence in Education</h2>
          </div>

          <div className="grid grid-3">
            <div className="card text-center stagger-animation">
              <FaAward style={{color: 'var(--primary-blue)', fontSize: '3rem', margin: '0 auto 1rem'}} />
              <h3 style={{color: 'var(--primary-blue)'}}>Proven Excellence</h3>
              <p style={{color: 'var(--dark-navy)'}}>
                Consistent outstanding performance in national assessments and holistic development metrics
              </p>
            </div>

            <div className="card text-center stagger-animation">
              <FaGraduationCap style={{color: 'var(--accent-red)', fontSize: '3rem', margin: '0 auto 1rem'}} />
              <h3 style={{color: 'var(--accent-red)'}}>Qualified Educators</h3>
              <p style={{color: 'var(--dark-navy)'}}>
                Our teachers are CBC-certified with extensive experience in modern pedagogical approaches
              </p>
            </div>

            <div className="card text-center stagger-animation">
              <FaShieldAlt style={{color: 'var(--primary-blue)', fontSize: '3rem', margin: '0 auto 1rem'}} />
              <h3 style={{color: 'var(--primary-blue)'}}>Safe Environment</h3>
              <p style={{color: 'var(--dark-navy)'}}>
                Secure, nurturing campus with modern safety protocols and emotional support systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section" style={{background: 'linear-gradient(135deg, var(--dark-navy) 0%, var(--primary-blue) 100%)'}}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in-on-scroll">
              <div className="stat-number" style={{color: 'white'}}>15:1</div>
              <div className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Student-Teacher Ratio</div>
            </div>
            <div className="stat-item fade-in-on-scroll">
              <div className="stat-number" style={{color: 'white'}}>100%</div>
              <div className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>CBC Trained Staff</div>
            </div>
            <div className="stat-item fade-in-on-scroll">
              <div className="stat-number" style={{color: 'white'}}>8+</div>
              <div className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Learning Domains</div>
            </div>
            <div className="stat-item fade-in-on-scroll">
              <div className="stat-number" style={{color: 'white'}}>6</div>
              <div className="stat-label" style={{color: 'rgba(255,255,255,0.9)'}}>Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" style={{backgroundColor: 'var(--pure-white)'}}>
        <div className="container text-center">
          <h2 style={{color: 'var(--primary-blue)'}}>Begin Your Child's Educational Journey</h2>
          <p style={{color: 'var(--dark-navy)', fontSize: '1.2rem', marginBottom: '2rem'}}>
            Schedule a visit to experience our unique learning environment firsthand
          </p>
          <div className="flex gap-md justify-center">
            <a href="/admissions" className="btn btn-accent" style={{padding: '1rem 2rem', fontSize: '1.1rem'}}>
              Schedule a Tour
            </a>
            <a href="/contact" className="btn btn-secondary" style={{padding: '1rem 2rem', fontSize: '1.1rem'}}>
              Download Prospectus
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}