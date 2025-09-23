"use client"

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";
import RotatingText from "../components/RotatingText";
import { FaGraduationCap, FaUsers, FaBookOpen, FaStar, FaChartLine, FaHeart } from "react-icons/fa";

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

      {/* Rest of your page content remains the same */}
      {/* CBC Highlights Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in-on-scroll">Why Choose CBC Education?</h2>
          <p className="section-subtitle fade-in-on-scroll">
            The Competency-Based Curriculum focuses on developing skills, knowledge, and values that prepare learners
            for the 21st century challenges.
          </p>

          <div className="grid grid-3">
            <div className="card text-center stagger-animation">
              <div className="flex justify-center mb-md">
                <FaChartLine size={48} color="var(--primary-blue)" className="float-animation" />
              </div>
              <h3>Competency-Based Learning</h3>
              <p>
                Focus on developing practical skills and competencies rather than just theoretical knowledge, preparing
                students for real-world challenges.
              </p>
            </div>

            <div className="card text-center stagger-animation">
              <div className="flex justify-center mb-md">
                <FaUsers size={48} color="var(--accent-red)" className="float-animation" />
              </div>
              <h3>Holistic Development</h3>
              <p>
                Nurturing cognitive, psychomotor, and affective domains to develop well-rounded individuals with strong
                character and values.
              </p>
            </div>

            <div className="card text-center stagger-animation">
              <div className="flex justify-center mb-md">
                <FaBookOpen size={48} color="var(--primary-blue)" className="float-animation" />
              </div>
              <h3>Interactive Learning</h3>
              <p>
                Engaging teaching methods that encourage active participation, critical thinking, and collaborative
                learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <h2 className="section-title slide-in-left">Our Key Features</h2>

          <div className="grid grid-2">
            <div className="flex items-center gap-lg fade-in-on-scroll">
              <div>
                <FaGraduationCap size={64} color="var(--primary-blue)" />
              </div>
              <div>
                <h3>Qualified Teachers</h3>
                <p>
                  Our dedicated team of CBC-trained educators brings passion and expertise to every classroom, ensuring
                  quality education for all students.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-lg fade-in-on-scroll">
              <div>
                <FaStar size={64} color="var(--accent-red)" />
              </div>
              <div>
                <h3>Excellence in Education</h3>
                <p>
                  Committed to maintaining high academic standards while fostering creativity, innovation, and critical
                  thinking skills.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-lg fade-in-on-scroll">
              <div>
                <FaHeart size={64} color="var(--primary-blue)" />
              </div>
              <div>
                <h3>Caring Environment</h3>
                <p>
                  A safe, nurturing, and inclusive environment where every child feels valued, supported, and encouraged
                  to reach their full potential.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-lg fade-in-on-scroll">
              <div>
                <FaBookOpen size={64} color="var(--accent-red)" />
              </div>
              <div>
                <h3>Modern Curriculum</h3>
                <p>
                  Following the latest CBC guidelines with integrated learning areas that prepare students for secondary
                  education and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title scale-in">CBC Learning Areas</h2>
          <p className="section-subtitle scale-in">
            Our curriculum covers all essential learning areas as outlined in the CBC framework
          </p>

          <div className="grid grid-3">
            <div className="card stagger-animation">
              <h4 style={{ color: "var(--primary-blue)" }}>Languages</h4>
              <p>English, Kiswahili, and Indigenous Languages</p>
            </div>

            <div className="card stagger-animation">
              <h4 style={{ color: "var(--accent-red)" }}>Mathematics</h4>
              <p>Number concepts, patterns, and problem-solving skills</p>
            </div>

            <div className="card stagger-animation">
              <h4 style={{ color: "var(--primary-blue)" }}>Environmental Activities</h4>
              <p>Science, Social Studies, and Environmental awareness</p>
            </div>

            <div className="card stagger-animation">
              <h4 style={{ color: "var(--accent-red)" }}>Creative Arts</h4>
              <p>Music, Art & Craft, and Physical Education</p>
            </div>

            <div className="card stagger-animation">
              <h4 style={{ color: "var(--primary-blue)" }}>Religious Education</h4>
              <p>Christian, Islamic, and Hindu Religious Education</p>
            </div>

            <div className="card stagger-animation">
              <h4 style={{ color: "var(--accent-red)" }}>Life Skills</h4>
              <p>Personal development and social skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{ backgroundColor: "var(--primary-blue)", color: "var(--pure-white)" }}>
        <div className="container text-center">
          <h2 style={{ color: "var(--pure-white)" }} className="slide-in-right">
            Ready to Join Our School Community?
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.125rem" }} className="mb-xl slide-in-left">
            Give your child the best start in their educational journey with our CBC-focused approach
          </p>
          <div className="flex gap-md justify-center scale-in">
            <a href="/admissions" className="btn btn-accent">
              Start Application
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
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}