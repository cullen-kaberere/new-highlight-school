"use client"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { 
  FaBullseye, 
  FaEye, 
  FaHeart, 
  FaUsers, 
  FaAward, 
  FaHandshake, 
  FaGraduationCap,
  FaSeedling,
  FaRocket,
  FaChartLine,
  FaHandHoldingHeart,
  FaLightbulb
} from "react-icons/fa"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Compact Hero Section */}
      <section className="about-hero" style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-navy) 100%)',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="floating-shapes">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <div className="about-hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
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
                OUR STORY
              </span>
            </div>
            <h1 style={{ 
              color: 'white', 
              fontSize: '3rem', 
              marginBottom: '1rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Shaping Futures,<br />Building Character
            </h1>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Where every child's potential meets opportunity through innovative CBC education
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values - Creative Layout */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="mvp-grid">
            <div className="mvp-card mission-card">
              <div className="mvp-icon" style={{ background: 'linear-gradient(135deg, var(--primary-blue), #3b82f6)' }}>
                <FaBullseye />
              </div>
              <div className="mvp-content">
                <h3 style={{ color: 'var(--primary-blue)' }}>Our Mission</h3>
                <p style={{ color: 'var(--dark-navy)', lineHeight: '1.8' }}>
                  To ignite curiosity and build competence through a CBC framework that nurtures confident, 
                  creative problem-solvers ready for tomorrow's challenges.
                </p>
                <div className="mission-highlights">
                  <span>✓ Holistic Development</span>
                  <span>✓ Future-Ready Skills</span>
                  <span>✓ Community Impact</span>
                </div>
              </div>
            </div>

            <div className="mvp-card vision-card">
              <div className="mvp-icon" style={{ background: 'linear-gradient(135deg, var(--accent-red), #ef4444)' }}>
                <FaEye />
              </div>
              <div className="mvp-content">
                <h3 style={{ color: 'var(--accent-red)' }}>Our Vision</h3>
                <p style={{ color: 'var(--dark-navy)', lineHeight: '1.8' }}>
                  To be Nairobi's beacon of educational innovation where every child discovers their unique 
                  brilliance and develops the courage to shine.
                </p>
                <div className="vision-pillars">
                  <div className="pillar">
                    <FaRocket style={{ color: 'var(--accent-red)' }} />
                    <span>Innovation</span>
                  </div>
                  <div className="pillar">
                    <FaGraduationCap style={{ color: 'var(--accent-red)' }} />
                    <span>Excellence</span>
                  </div>
                  <div className="pillar">
                    <FaHandHoldingHeart style={{ color: 'var(--accent-red)' }} />
                    <span>Care</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="values-showcase">
              <div className="values-header">
                <FaHeart style={{ color: 'var(--primary-blue)', fontSize: '2rem' }} />
                <h3 style={{ color: 'var(--primary-blue)' }}>Our Values</h3>
              </div>
              <div className="values-grid">
                <div className="value-item">
                  <FaLightbulb style={{ color: 'var(--accent-red)' }} />
                  <span>Innovation</span>
                </div>
                <div className="value-item">
                  <FaChartLine style={{ color: 'var(--primary-blue)' }} />
                  <span>Excellence</span>
                </div>
                <div className="value-item">
                  <FaHandshake style={{ color: 'var(--accent-red)' }} />
                  <span>Integrity</span>
                </div>
                <div className="value-item">
                  <FaUsers style={{ color: 'var(--primary-blue)' }} />
                  <span>Collaboration</span>
                </div>
                <div className="value-item">
                  <FaSeedling style={{ color: 'var(--accent-red)' }} />
                  <span>Growth</span>
                </div>
                <div className="value-item">
                  <FaHeart style={{ color: 'var(--primary-blue)' }} />
                  <span>Compassion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)', padding: '80px 0' }}>
        <div className="container">
          <div className="story-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              Our Journey
            </h2>
            <p style={{ color: 'var(--dark-navy)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              From humble beginnings to becoming a leader in CBC education
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4 style={{ color: 'var(--primary-blue)' }}>The Beginning</h4>
                <p>New Highlight School opens its doors with 3 classrooms and a vision for transformative education</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h4 style={{ color: 'var(--accent-red)' }}>CBC Pioneer</h4>
                <p>Among the first schools in Nairobi to fully implement the Competency-Based Curriculum</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4 style={{ color: 'var(--primary-blue)' }}>Expansion</h4>
                <p>Expanded to include modern science lab, computer center, and creative arts studio</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4 style={{ color: 'var(--accent-red)' }}>Excellence</h4>
                <p>Recognized as a Center of Excellence in CBC implementation with 100% transition rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Interactive */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="choice-grid">
            <div className="choice-content">
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '2rem' }}>
                Why Families<br />Choose New Highlight
              </h2>
              <p style={{ color: 'var(--dark-navy)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                We believe education should be as unique as every child. Our approach combines the best of 
                traditional values with innovative teaching methods.
              </p>
              
              <div className="choice-stats">
                <div className="stat">
                  <div style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', fontWeight: 'bold' }}>15:1</div>
                  <div style={{ color: 'var(--dark-navy)' }}>Student-Teacher Ratio</div>
                </div>
                <div className="stat">
                  <div style={{ color: 'var(--accent-red)', fontSize: '2.5rem', fontWeight: 'bold' }}>100%</div>
                  <div style={{ color: 'var(--dark-navy)' }}>CBC Certified Staff</div>
                </div>
                <div className="stat">
                  <div style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', fontWeight: 'bold' }}>6+</div>
                  <div style={{ color: 'var(--dark-navy)' }}>Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="choice-features">
              <div className="feature-cards">
                <div className="feature-card">
                  <FaUsers style={{ color: 'var(--primary-blue)', fontSize: '2rem' }} />
                  <div>
                    <h4 style={{ color: 'var(--primary-blue)' }}>Personalized Learning</h4>
                    <p>Small classes ensure every child gets the attention they deserve</p>
                  </div>
                </div>
                <div className="feature-card">
                  <FaAward style={{ color: 'var(--accent-red)', fontSize: '2rem' }} />
                  <div>
                    <h4 style={{ color: 'var(--accent-red)' }}>Expert Educators</h4>
                    <p>Our teachers are passionate about CBC and child development</p>
                  </div>
                </div>
                <div className="feature-card">
                  <FaHandshake style={{ color: 'var(--primary-blue)', fontSize: '2rem' }} />
                  <div>
                    <h4 style={{ color: 'var(--primary-blue)' }}>Family Partnership</h4>
                    <p>We work closely with parents to support each child's journey</p>
                  </div>
                </div>
                <div className="feature-card">
                  <FaHeart style={{ color: 'var(--accent-red)', fontSize: '2rem' }} />
                  <div>
                    <h4 style={{ color: 'var(--accent-red)' }}>Nurturing Environment</h4>
                    <p>Safe, inclusive spaces where children feel valued and supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Modern Cards */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              Meet Our Leaders
            </h2>
            <p style={{ color: 'var(--dark-navy)', fontSize: '1.2rem' }}>
              Passionate educators dedicated to your child's success
            </p>
          </div>

          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-avatar" style={{ background: 'linear-gradient(135deg, var(--primary-blue), #3b82f6)' }}>
                MK
              </div>
              <div className="leader-info">
                <h4 style={{ color: 'var(--primary-blue)' }}>Mrs. Mary Kamau</h4>
                <p style={{ color: 'var(--accent-red)', fontWeight: '600' }}>Head Teacher</p>
                <p style={{ color: 'var(--dark-navy)', fontSize: '0.9rem' }}>
                  15+ years shaping young minds. Passionate about innovative education and child development.
                </p>
                <div className="leader-badge">M.Ed Educational Leadership</div>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-avatar" style={{ background: 'linear-gradient(135deg, var(--accent-red), #ef4444)' }}>
                JO
              </div>
              <div className="leader-info">
                <h4 style={{ color: 'var(--accent-red)' }}>Mr. John Ochieng</h4>
                <p style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>Deputy Head Teacher</p>
                <p style={{ color: 'var(--dark-navy)', fontSize: '0.9rem' }}>
                  CBC specialist with a talent for making complex concepts accessible to young learners.
                </p>
                <div className="leader-badge">B.Ed Mathematics & Science</div>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-avatar" style={{ background: 'linear-gradient(135deg, var(--primary-blue), #3b82f6)' }}>
                SM
              </div>
              <div className="leader-info">
                <h4 style={{ color: 'var(--primary-blue)' }}>Ms. Sarah Mwangi</h4>
                <p style={{ color: 'var(--accent-red)', fontWeight: '600' }}>Academic Coordinator</p>
                <p style={{ color: 'var(--dark-navy)', fontSize: '0.9rem' }}>
                  Language expert who believes every child has a unique voice waiting to be heard.
                </p>
                <div className="leader-badge">B.Ed Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}