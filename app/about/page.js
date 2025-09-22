import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { FaEye, FaBullseye, FaHeart, FaUsers, FaAward, FaHandshake } from "react-icons/fa"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: "100px 0 60px" }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="text-balance">About New Highlight School</h1>
            <p className="text-balance">
              Discover our mission, vision, and commitment to providing exceptional CBC education that shapes future
              leaders
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaBullseye size={48} color="var(--primary-blue)" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide quality, holistic education through the Competency-Based Curriculum, nurturing confident,
                creative, and responsible citizens who contribute positively to society.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaEye size={48} color="var(--accent-red)" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a leading primary school that empowers learners with 21st-century skills, values, and competencies
                for lifelong learning and global citizenship.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaHeart size={48} color="var(--primary-blue)" />
              </div>
              <h3>Our Values</h3>
              <p>
                Excellence, Integrity, Respect, Innovation, Collaboration, and Compassion guide everything we do in our
                educational community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 style={{ color: "var(--primary-blue)" }}>Our Story</h2>
              <p className="mb-md">
                New Highlight School was established with a clear vision: to provide exceptional primary education that
                prepares students for the challenges and opportunities of the modern world. Since our founding, we have
                been at the forefront of implementing the Competency-Based Curriculum in Kenya.
              </p>
              <p className="mb-md">
                Our school community is built on the foundation of academic excellence, character development, and
                holistic growth. We believe that every child has unique potential, and our role is to nurture and
                develop that potential through innovative teaching methods and a supportive learning environment.
              </p>
              <p>
                With state-of-the-art facilities, qualified teachers, and a comprehensive CBC curriculum, we ensure that
                our students receive the best possible education to prepare them for secondary school and beyond.
              </p>
            </div>

            <div>
              <h2 style={{ color: "var(--accent-red)" }}>Why Choose Us?</h2>
              <div className="flex flex-col gap-md">
                <div className="flex items-center gap-md">
                  <FaUsers size={24} color="var(--primary-blue)" />
                  <span>Small class sizes for personalized attention</span>
                </div>
                <div className="flex items-center gap-md">
                  <FaAward size={24} color="var(--accent-red)" />
                  <span>Experienced and CBC-trained teachers</span>
                </div>
                <div className="flex items-center gap-md">
                  <FaHandshake size={24} color="var(--primary-blue)" />
                  <span>Strong parent-school partnership</span>
                </div>
                <div className="flex items-center gap-md">
                  <FaHeart size={24} color="var(--accent-red)" />
                  <span>Safe and nurturing learning environment</span>
                </div>
              </div>

              <div className="mt-lg">
                <h3 style={{ color: "var(--primary-blue)" }}>Our Commitment</h3>
                <p>
                  We are committed to providing an education that goes beyond academic achievement. Our focus on
                  character development, critical thinking, and practical skills ensures that our graduates are
                  well-prepared for the next phase of their educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the dedicated professionals who guide our school's vision and ensure educational excellence
          </p>

          <div className="grid grid-3">
            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  MK
                </div>
              </div>
              <h4>Mrs. Mary Kamau</h4>
              <p style={{ color: "var(--accent-red)", fontWeight: "500" }}>Head Teacher</p>
              <p>
                M.Ed in Educational Leadership, 15+ years experience in CBC implementation and primary education
                management.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  JO
                </div>
              </div>
              <h4>Mr. John Ochieng</h4>
              <p style={{ color: "var(--primary-blue)", fontWeight: "500" }}>Deputy Head Teacher</p>
              <p>
                B.Ed in Mathematics & Science, CBC curriculum specialist with expertise in competency-based assessment.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  SM
                </div>
              </div>
              <h4>Ms. Sarah Mwangi</h4>
              <p style={{ color: "var(--accent-red)", fontWeight: "500" }}>Academic Coordinator</p>
              <p>B.Ed in Languages, specializing in multilingual education and CBC learning area coordination.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
