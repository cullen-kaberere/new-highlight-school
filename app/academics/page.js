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
} from "react-icons/fa"

export default function AcademicsPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: "100px 0 60px" }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="text-balance">CBC Academic Program</h1>
            <p className="text-balance">
              Comprehensive Competency-Based Curriculum designed to develop well-rounded learners with 21st-century
              skills
            </p>
          </div>
        </div>
      </section>

      {/* CBC Overview Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Understanding CBC Education</h2>
          <p className="section-subtitle">
            The Competency-Based Curriculum focuses on what learners can do rather than what they know, emphasizing
            practical application of knowledge and skills.
          </p>

          <div className="grid grid-3">
            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaChartLine size={48} color="var(--primary-blue)" />
              </div>
              <h3>Competency Development</h3>
              <p>
                Focus on developing specific competencies that learners can demonstrate through practical application of
                knowledge, skills, and values.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaUsers size={48} color="var(--accent-red)" />
              </div>
              <h3>Learner-Centered Approach</h3>
              <p>
                Teaching methods that put the learner at the center, encouraging active participation, collaboration,
                and self-directed learning.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaLightbulb size={48} color="var(--primary-blue)" />
              </div>
              <h3>Critical Thinking</h3>
              <p>
                Emphasis on developing analytical skills, problem-solving abilities, and creative thinking to prepare
                learners for future challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas Section */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <h2 className="section-title">CBC Learning Areas</h2>
          <p className="section-subtitle">
            Our curriculum covers all essential learning areas as outlined in the CBC framework
          </p>

          <div className="grid grid-2">
            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <FaBookOpen size={32} color="var(--primary-blue)" />
                <h3>Languages</h3>
              </div>
              <p className="mb-md">
                <strong>English:</strong> Communication skills, reading comprehension, creative writing, and literature
                appreciation.
              </p>
              <p className="mb-md">
                <strong>Kiswahili:</strong> National language proficiency, cultural appreciation, and effective
                communication.
              </p>
              <p>
                <strong>Indigenous Languages:</strong> Mother tongue development and cultural identity preservation.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <FaCalculator size={32} color="var(--accent-red)" />
                <h3>Mathematics</h3>
              </div>
              <p className="mb-md">
                <strong>Number Work:</strong> Basic operations, fractions, decimals, and number patterns.
              </p>
              <p className="mb-md">
                <strong>Measurement:</strong> Length, mass, capacity, time, and money concepts.
              </p>
              <p>
                <strong>Geometry:</strong> Shapes, space, and basic geometric relationships.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <FaGlobe size={32} color="var(--primary-blue)" />
                <h3>Environmental Activities</h3>
              </div>
              <p className="mb-md">
                <strong>Science:</strong> Basic scientific concepts, experiments, and environmental awareness.
              </p>
              <p className="mb-md">
                <strong>Social Studies:</strong> Community, culture, geography, and citizenship education.
              </p>
              <p>
                <strong>Environmental Education:</strong> Conservation, sustainability, and environmental protection.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <FaPalette size={32} color="var(--accent-red)" />
                <h3>Creative Arts</h3>
              </div>
              <p className="mb-md">
                <strong>Music:</strong> Singing, rhythm, musical instruments, and music appreciation.
              </p>
              <p className="mb-md">
                <strong>Art & Craft:</strong> Drawing, painting, modeling, and creative expression.
              </p>
              <p>
                <strong>Physical Education:</strong> Sports, games, fitness, and healthy living.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <FaPray size={32} color="var(--primary-blue)" />
                <h3>Religious Education</h3>
              </div>
              <p className="mb-md">
                <strong>Christian Religious Education:</strong> Biblical teachings and Christian values.
              </p>
              <p className="mb-md">
                <strong>Islamic Religious Education:</strong> Islamic teachings and moral values.
              </p>
              <p>
                <strong>Hindu Religious Education:</strong> Hindu philosophy and cultural values.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <FaHeart size={32} color="var(--accent-red)" />
                <h3>Life Skills Education</h3>
              </div>
              <p className="mb-md">
                <strong>Personal Development:</strong> Self-awareness, emotional intelligence, and personal growth.
              </p>
              <p className="mb-md">
                <strong>Social Skills:</strong> Communication, teamwork, and relationship building.
              </p>
              <p>
                <strong>Life Skills:</strong> Problem-solving, decision-making, and practical life skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Approach Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Assessment Approach</h2>
          <p className="section-subtitle">
            CBC assessment focuses on continuous evaluation of learner progress and competency development
          </p>

          <div className="grid grid-2">
            <div>
              <h3 style={{ color: "var(--primary-blue)" }}>Formative Assessment</h3>
              <div className="flex flex-col gap-sm mb-lg">
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Continuous observation and feedback</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Portfolio-based assessment</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Peer and self-assessment activities</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Project-based evaluations</span>
                </div>
              </div>

              <h3 style={{ color: "var(--accent-red)" }}>Summative Assessment</h3>
              <div className="flex flex-col gap-sm">
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--primary-blue)" />
                  <span>End-of-term competency evaluations</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--primary-blue)" />
                  <span>Practical skill demonstrations</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--primary-blue)" />
                  <span>Comprehensive progress reports</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--primary-blue)" />
                  <span>Parent-teacher conferences</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--primary-blue)" }}>Learning Outcomes</h3>
              <p className="mb-md">Our CBC program ensures that learners develop:</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="flex items-center gap-sm mb-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Critical thinking and problem-solving skills</span>
                </li>
                <li className="flex items-center gap-sm mb-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Effective communication abilities</span>
                </li>
                <li className="flex items-center gap-sm mb-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Collaboration and teamwork skills</span>
                </li>
                <li className="flex items-center gap-sm mb-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Digital literacy and technology skills</span>
                </li>
                <li className="flex items-center gap-sm mb-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Creativity and innovation</span>
                </li>
                <li className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Strong moral and ethical values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: "var(--primary-blue)", color: "var(--pure-white)" }}>
        <div className="container text-center">
          <h2 style={{ color: "var(--pure-white)" }}>Experience CBC Excellence</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.125rem" }} className="mb-xl">
            Join our school community and give your child the advantage of quality CBC education
          </p>
          <div className="flex gap-md justify-center">
            <a href="/admissions" className="btn btn-accent">
              Apply Today
            </a>
            <a
              href="/contact"
              className="btn"
              style={{
                backgroundColor: "transparent",
                color: "var(--pure-white)",
                border: "2px solid var(--pure-white)",
              }}
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
