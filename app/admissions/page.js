import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { FaCalendarAlt, FaUserCheck, FaClipboardList, FaCheckCircle, FaInfoCircle } from "react-icons/fa"

export default function AdmissionsPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: "100px 0 60px" }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="text-balance">Admissions</h1>
            <p className="text-balance">
              Join the New Highlight School family and give your child the best start in their educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Admission Process</h2>
          <p className="section-subtitle">
            Our straightforward admission process is designed to welcome new families into our school community
          </p>

          <div className="grid grid-2">
            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <h3>Application Submission</h3>
              </div>
              <p>
                Complete and submit the admission application form along with all required documents. Applications can
                be submitted online or in person at our school office.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <h3>Document Review</h3>
              </div>
              <p>
                Our admissions team will review your application and supporting documents. We may contact you for any
                additional information or clarification needed.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <h3>School Visit & Interview</h3>
              </div>
              <p>
                Schedule a visit to tour our facilities and meet with our staff. This helps us understand your child's
                needs and allows you to experience our school environment.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-md mb-md">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--pure-white)",
                    fontWeight: "bold",
                  }}
                >
                  4
                </div>
                <h3>Admission Decision</h3>
              </div>
              <p>
                You will receive our admission decision within 5-7 working days. Successful applicants will receive
                enrollment information and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <h2 className="section-title">Admission Requirements</h2>

          <div className="grid grid-2">
            <div>
              <h3 style={{ color: "var(--primary-blue)" }}>Required Documents</h3>
              <div className="flex flex-col gap-sm mb-lg">
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Completed admission application form</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Child's birth certificate (original and copy)</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Immunization records</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Previous school reports (if applicable)</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Parent/guardian identification documents</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaCheckCircle size={16} color="var(--accent-red)" />
                  <span>Recent passport-size photographs (4 copies)</span>
                </div>
              </div>

              <h3 style={{ color: "var(--accent-red)" }}>Age Requirements</h3>
              <div className="flex flex-col gap-sm">
                <div className="flex items-center gap-sm">
                  <FaInfoCircle size={16} color="var(--primary-blue)" />
                  <span>Pre-Primary 1 (PP1): 4 years by January 1st</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaInfoCircle size={16} color="var(--primary-blue)" />
                  <span>Pre-Primary 2 (PP2): 5 years by January 1st</span>
                </div>
                <div className="flex items-center gap-sm">
                  <FaInfoCircle size={16} color="var(--primary-blue)" />
                  <span>Grade 1: 6 years by January 1st</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--primary-blue)" }}>Fee Structure</h3>
              <p className="mb-md">Our competitive fee structure includes:</p>

              <div className="mb-lg">
                <h4 style={{ color: "var(--accent-red)" }}>Tuition Fees (Per Term)</h4>
                <div className="flex flex-col gap-sm mb-md">
                  <div className="flex justify-between">
                    <span>Pre-Primary (PP1 & PP2)</span>
                    <strong>KSh 25,000</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Lower Primary (Grade 1-3)</span>
                    <strong>KSh 30,000</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Upper Primary (Grade 4-6)</span>
                    <strong>KSh 35,000</strong>
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ color: "var(--primary-blue)" }}>Additional Fees</h4>
                <div className="flex flex-col gap-sm">
                  <div className="flex justify-between">
                    <span>Registration Fee (One-time)</span>
                    <strong>KSh 5,000</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Activity Fee (Per Term)</span>
                    <strong>KSh 3,000</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch Program (Optional)</span>
                    <strong>KSh 8,000</strong>
                  </div>
                </div>
              </div>

              <div className="mt-md">
                <p style={{ fontSize: "0.9rem", color: "var(--medium-gray)" }}>
                  * Fees are subject to review annually. Payment plans available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>

          <div className="grid grid-3">
            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaCalendarAlt size={48} color="var(--primary-blue)" />
              </div>
              <h3>Application Deadline</h3>
              <p style={{ color: "var(--accent-red)", fontWeight: "600", fontSize: "1.125rem" }}>December 15, 2024</p>
              <p>Final date for submitting admission applications for the 2025 academic year.</p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaUserCheck size={48} color="var(--accent-red)" />
              </div>
              <h3>Admission Results</h3>
              <p style={{ color: "var(--primary-blue)", fontWeight: "600", fontSize: "1.125rem" }}>January 10, 2025</p>
              <p>Admission decisions will be communicated to all applicants by this date.</p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-md">
                <FaClipboardList size={48} color="var(--primary-blue)" />
              </div>
              <h3>School Opening</h3>
              <p style={{ color: "var(--accent-red)", fontWeight: "600", fontSize: "1.125rem" }}>February 3, 2025</p>
              <p>First term of the 2025 academic year begins. Orientation for new students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="section" style={{ backgroundColor: "var(--primary-blue)", color: "var(--pure-white)" }}>
        <div className="container text-center">
          <h2 style={{ color: "var(--pure-white)" }}>Ready to Apply?</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.125rem" }} className="mb-xl">
            Start your child's journey with us today. Contact our admissions office for more information.
          </p>
          <div className="flex gap-md justify-center">
            <a href="/contact" className="btn btn-accent">
              Contact Admissions
            </a>
            <a
              href="#"
              className="btn"
              style={{
                backgroundColor: "transparent",
                color: "var(--pure-white)",
                border: "2px solid var(--pure-white)",
              }}
            >
              Download Application
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
