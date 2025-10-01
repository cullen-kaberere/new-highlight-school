// components/PencilLoader.js
"use client";

import { motion } from "framer-motion";

export default function PencilLoader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* School-themed loader */}
        <motion.div
          className="book-loader"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="book">
            <div className="book-cover">
              <div className="book-title">NHS</div>
            </div>
            <motion.div 
              className="book-pages"
              animate={{ rotateY: [0, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Loading text with school colors */}
        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>New Highlight School</h2>
          <motion.p
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="loading-bar"
          >
            Preparing your learning experience...
          </motion.p>
        </motion.div>

        {/* Graduation cap animation */}
        <motion.div
          className="cap-container"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="graduation-cap">
            <div className="cap-top"></div>
            <div className="cap-tassel"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-navy) 100%);
          color: white;
        }

        .loader-content {
          text-align: center;
          position: relative;
        }

        /* Book Loader */
        .book-loader {
          margin-bottom: 3rem;
        }

        .book {
          width: 80px;
          height: 100px;
          position: relative;
          perspective: 1000px;
          margin: 0 auto;
        }

        .book-cover {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary-blue), #3b82f6);
          border-radius: 8px 12px 12px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
        }

        .book-title {
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .book-pages {
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          background: white;
          border-radius: 4px 8px 8px 4px;
          transform-style: preserve-3d;
          transform-origin: left center;
        }

        /* Loading Text */
        .loading-text h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .loading-bar {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          overflow: hidden;
          white-space: nowrap;
          margin: 0 auto;
          max-width: 300px;
          position: relative;
        }

        .loading-bar::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-red), transparent);
        }

        /* Graduation Cap */
        .cap-container {
          margin-top: 2rem;
        }

        .graduation-cap {
          position: relative;
          width: 60px;
          height: 40px;
          margin: 0 auto;
        }

        .cap-top {
          width: 60px;
          height: 25px;
          background: var(--accent-red);
          border-radius: 50% 50% 0 0;
          position: relative;
        }

        .cap-top::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 15px;
          background: var(--primary-blue);
          border-radius: 0 0 10px 10px;
        }

        .cap-tassel {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 20px;
          background: var(--accent-red);
          animation: swing 2s ease-in-out infinite;
        }

        .cap-tassel::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: var(--accent-red);
          border-radius: 50%;
        }

        @keyframes swing {
          0%, 100% { transform: translateX(-50%) rotate(-10deg); }
          50% { transform: translateX(-50%) rotate(10deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .loading-text h2 {
            font-size: 1.5rem;
          }

          .loading-bar {
            font-size: 1rem;
            max-width: 250px;
          }

          .book {
            width: 60px;
            height: 80px;
          }
        }

        @media (max-width: 480px) {
          .loading-text h2 {
            font-size: 1.3rem;
          }

          .book {
            width: 50px;
            height: 70px;
          }

          .graduation-cap {
            width: 50px;
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
}