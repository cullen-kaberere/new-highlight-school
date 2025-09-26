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

      <style jsx>{`
        /* Badge Style */
        .badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Feature Showcase */
        .feature-showcase {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: center;
          padding: 2rem;
          background: var(--pure-white);
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
        }

        .feature-item:nth-child(even) {
          grid-template-columns: 1fr auto;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          flex-shrink: 0;
        }

        .feature-item:nth-child(even) .feature-icon {
          background: linear-gradient(135deg, var(--accent-red), #f87171);
        }

        .feature-content h3 {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .feature-tag {
          display: inline-block;
          background: var(--light-gray);
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          color: var(--medium-gray);
          margin-top: 0.5rem;
        }

        /* Pillars Grid */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .pillar-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
          border: 1px solid rgba(30, 58, 138, 0.1);
        }

        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .pillar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .pillar-icon {
          font-size: 2.5rem;
        }

        .pillar-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--light-gray);
        }

        .pillar-card h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .pillar-features {
          list-style: none;
          margin-top: 1.5rem;
        }

        .pillar-features li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--light-gray);
          color: var(--dark-navy);
          font-weight: 500;
        }

        .pillar-features li:last-child {
          border-bottom: none;
        }

        /* Domains Container */
        .domains-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .domain-category h3 {
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid;
          font-size: 1.5rem;
        }

        .domain-category h3:first-child {
          border-color: var(--primary-blue);
        }

        .domain-category h3:nth-child(2) {
          border-color: var(--accent-red);
        }

        .domain-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .domain-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: white;
          border-radius: 0.75rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .domain-item:hover {
          transform: translateX(5px);
          box-shadow: var(--shadow-md);
          border-left-color: var(--primary-blue);
        }

        .domain-item:nth-child(even):hover {
          border-left-color: var(--accent-red);
        }

        .domain-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .domain-item span {
          font-weight: 500;
          font-size: 1.1rem;
        }

        /* Excellence Grid */
        .excellence-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .excellence-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
        }

        .excellence-card:hover {
          transform: translateY(-5px);
        }

        .excellence-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .excellence-card h3 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }

        /* Stats Section */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          text-align: center;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.2rem;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          border-radius: 0.75rem;
        }

        .btn-outline {
          background: transparent;
          color: var(--primary-blue);
          border: 2px solid var(--primary-blue);
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          border-radius: 0.75rem;
        }

        .btn-outline:hover {
          background: var(--primary-blue);
          color: white;
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .feature-item,
          .feature-item:nth-child(even) {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 1.5rem;
          }

          .feature-icon {
            margin: 0 auto;
          }

          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .domains-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .excellence-grid {
            grid-template-columns: 1fr;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
                grid-template-columns: 1fr;
            }

            .feature-item {
                padding: 1.5rem;
            }

            .pillar-card {
                padding: 2rem 1.5rem;
            }

            .domain-item {
                padding: 1rem;
            }

            .badge {
                padding: 0.4rem 1.2rem;
                font-size: 0.8rem;
            }
        }
      `}</style>
    </>
  )
}