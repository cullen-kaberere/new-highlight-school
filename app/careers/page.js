"use client"
import { useState } from "react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaUserTie, 
  FaBookOpen,
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
  FaPaperPlane
} from "react-icons/fa"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobOpenings = [
    {
      id: 1,
      title: "CBC Primary Teacher",
      department: "Academic",
      type: "Full-time",
      location: "Nairobi",
      experience: "2+ years",
      icon: FaChalkboardTeacher,
      color: "var(--primary-blue)",
      description: "We are seeking an enthusiastic CBC Primary Teacher to join our dynamic academic team. The ideal candidate will be passionate about competency-based education and dedicated to nurturing young minds.",
      responsibilities: [
        "Plan and deliver engaging CBC lessons for primary students",
        "Develop and implement competency-based assessment strategies",
        "Create inclusive learning environments for diverse learners",
        "Collaborate with colleagues on curriculum development",
        "Maintain accurate student progress records",
        "Participate in school events and parent meetings"
      ],
      requirements: [
        "Bachelor of Education (Primary Option) or equivalent",
        "TSC registration and valid teaching license",
        "Minimum 2 years experience in CBC implementation",
        "Strong understanding of competency-based assessment",
        "Excellent classroom management skills",
        "Proficiency in using technology for teaching"
      ],
      benefits: [
        "Competitive salary package",
        "Professional development opportunities",
        "Medical insurance coverage",
        "School fee discount for staff children",
        "Modern teaching facilities",
        "Supportive work environment"
      ]
    },
    {
      id: 2,
      title: "Pre-Primary Teacher",
      department: "Early Years",
      type: "Full-time",
      location: "Nairobi",
      experience: "1+ years",
      icon: FaBookOpen,
      color: "var(--accent-red)",
      description: "Join our early years team as a Pre-Primary Teacher to nurture and develop our youngest learners through play-based and competency-focused education.",
      responsibilities: [
        "Create stimulating learning environments for PP1/PP2",
        "Implement play-based CBC activities",
        "Monitor and document child development progress",
        "Communicate regularly with parents",
        "Organize age-appropriate learning materials",
        "Ensure child safety and well-being"
      ],
      requirements: [
        "Diploma in Early Childhood Education",
        "TSC registration for ECDE teachers",
        "Experience with CBC in early years",
        "Understanding of child development stages",
        "Creative and patient approach to teaching",
        "Excellent communication skills"
      ],
      benefits: [
        "Competitive early years salary",
        "Small class sizes",
        "Modern learning resources",
        "Ongoing training and mentorship",
        "Child-friendly work environment",
        "Team-building activities"
      ]
    },
    {
      id: 3,
      title: "School Administrator",
      department: "Administration",
      type: "Full-time",
      location: "Nairobi",
      experience: "3+ years",
      icon: FaUserTie,
      color: "var(--primary-blue)",
      description: "We are looking for an experienced School Administrator to manage our school operations and ensure smooth day-to-day functioning.",
      responsibilities: [
        "Manage school administrative operations",
        "Coordinate student admissions and records",
        "Oversee staff scheduling and assignments",
        "Handle parent communications and inquiries",
        "Manage school resources and inventory",
        "Coordinate school events and activities"
      ],
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "Minimum 3 years administrative experience",
        "Experience in educational institution preferred",
        "Strong organizational and leadership skills",
        "Proficiency in office software",
        "Excellent problem-solving abilities"
      ],
      benefits: [
        "Competitive administrative salary",
        "Leadership development opportunities",
        "Comprehensive benefits package",
        "Professional workspace",
        "School community involvement",
        "Career growth potential"
      ]
    },
    {
      id: 4,
      title: "Head of Department - Languages",
      department: "Academic Leadership",
      type: "Full-time",
      location: "Nairobi",
      experience: "5+ years",
      icon: FaGraduationCap,
      color: "var(--accent-red)",
      description: "Lead our Languages department and drive excellence in English and Kiswahili education across all primary levels.",
      responsibilities: [
        "Lead and mentor language teachers",
        "Develop and review language curriculum",
        "Monitor teaching standards and student progress",
        "Organize language competitions and events",
        "Coordinate departmental meetings and PD",
        "Implement innovative language teaching strategies"
      ],
      requirements: [
        "Master's degree in Education or Languages",
        "TSC registration and 5+ years teaching experience",
        "Proven leadership experience in education",
        "Strong knowledge of CBC language curriculum",
        "Excellent communication and mentorship skills",
        "Experience in curriculum development"
      ],
      benefits: [
        "Leadership salary scale",
        "Departmental budget authority",
        "Professional conference opportunities",
        "Mentorship program leadership",
        "Strategic planning involvement",
        "Recognition in school leadership"
      ]
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaUsers />
              <span>JOIN OUR TEAM</span>
            </div>
            <h1>Build Your Career in Education</h1>
            <p>
              Join New Highlight School and be part of a team dedicated to shaping future leaders 
              through innovative CBC education in a supportive, professional environment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose New Highlight?</h2>
            <p>We invest in our staff and create an environment where educators thrive</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaGraduationCap style={{ color: 'var(--primary-blue)', fontSize: '2.5rem' }} />
              <h3>Professional Growth</h3>
              <p>Continuous training and career development opportunities in CBC education</p>
            </div>
            
            <div className="benefit-card">
              <FaUsers style={{ color: 'var(--accent-red)', fontSize: '2.5rem' }} />
              <h3>Supportive Community</h3>
              <p>Collaborative environment with experienced educators and staff</p>
            </div>
            
            <div className="benefit-card">
              <FaChalkboardTeacher style={{ color: 'var(--primary-blue)', fontSize: '2.5rem' }} />
              <h3>Modern Facilities</h3>
              <p>Well-equipped classrooms and resources for effective teaching</p>
            </div>
            
            {/* <div className="benefit-card">
              <FaBookOpen style={{ color: 'var(--accent-red)', fontSize: '2.5rem' }} />
              <h3>Competitive Packages</h3>
              <p>Attractive salaries, benefits, and professional development support</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="jobs-section">
        <div className="container">
          <div className="jobs-layout">
            {/* Job List */}
            <div className="jobs-list">
              <div className="section-header">
                <h2>Current Openings</h2>
                <p>Explore available positions and find your perfect role</p>
              </div>

              <div className="job-cards">
                {jobOpenings.map((job) => (
                  <div 
                    key={job.id} 
                    className={`job-card ${selectedJob?.id === job.id ? 'active' : ''}`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="job-header">
                      <div className="job-icon" style={{ color: job.color }}>
                        <job.icon />
                      </div>
                      <div className="job-info">
                        <h3>{job.title}</h3>
                        <div className="job-meta">
                          <span className="department">{job.department}</span>
                          <span className="type">{job.type}</span>
                        </div>
                      </div>
                      <FaArrowRight className="arrow-icon" />
                    </div>
                    
                    <div className="job-details">
                      <div className="detail-item">
                        <FaMapMarkerAlt />
                        <span>{job.location}</span>
                      </div>
                      <div className="detail-item">
                        <FaClock />
                        <span>{job.experience} experience</span>
                      </div>
                    </div>
                    
                    <p className="job-description">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="job-details-panel">
              {selectedJob ? (
                <div className="job-detail-content">
                  <div className="detail-header">
                    <div className="job-icon-large" style={{ color: selectedJob.color }}>
                      <selectedJob.icon />
                    </div>
                    <div>
                      <h2>{selectedJob.title}</h2>
                      <div className="job-meta-large">
                        <span>{selectedJob.department}</span>
                        <span>•</span>
                        <span>{selectedJob.type}</span>
                        <span>•</span>
                        <span>{selectedJob.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Job Description</h3>
                    <p>{selectedJob.description}</p>
                  </div>

                  <div className="detail-section">
                    <h3>Key Responsibilities</h3>
                    <ul className="responsibilities-list">
                      {selectedJob.responsibilities.map((responsibility, index) => (
                        <li key={index}>
                          <FaCheckCircle style={{ color: 'var(--accent-red)' }} />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h3>Requirements</h3>
                    <ul className="requirements-list">
                      {selectedJob.requirements.map((requirement, index) => (
                        <li key={index}>
                          <FaCheckCircle style={{ color: 'var(--primary-blue)' }} />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h3>Benefits & Perks</h3>
                    <div className="benefits-grid-small">
                      {selectedJob.benefits.map((benefit, index) => (
                        <div key={index} className="benefit-item">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="apply-section">
                    <h3>Ready to Apply?</h3>
                    <p>Send your application to our careers email with your CV and cover letter:</p>
                    <div className="email-contact">
                      <FaPaperPlane style={{ color: 'var(--primary-blue)' }} />
                      <a href="mailto:careers@newhighlightschool.ac.ke">careers@newhighlightschool.ac.ke</a>
                    </div>
                    <p className="application-note">
                      Please include the job title in your email subject line. We look forward to hearing from you!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="no-selection">
                  <FaChalkboardTeacher style={{ fontSize: '4rem', color: 'var(--light-gray)', marginBottom: '1rem' }} />
                  <h3>Select a Position</h3>
                  <p>Click on a job listing to view details and application information</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="general-application">
        <div className="container">
          <div className="application-content">
            <h2>Don't See Your Perfect Role?</h2>
            <p>
              We're always looking for talented educators and staff. Send us your CV and we'll 
              keep you in mind for future opportunities.
            </p>
            <div className="application-email">
              <FaPaperPlane style={{ color: 'var(--accent-red)' }} />
              <div>
                <span>Send your CV to:</span>
                <a href="mailto:careers@newhighlightschool.ac.ke">careers@newhighlightschool.ac.ke</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      
    </>
  )
}