import { motion } from "framer-motion";
import "./Home.css";
import hand from "../images/hand.png";

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="home-page">
      {}
      <section className="hero">
        <h1>
          Hi, I'm Tamara{" "}
          <img src={hand} alt="Waving Hand" className="waving-hand" />
        </h1>
        <p>
          Front-end developer & IT student passionate about building interactive
          web projects
        </p>
      </section>

      {}
      <section className="about-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="about-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Skills</h3>
            <p>
              HTML, CSS, JavaScript, TypeScript, React, Bootstrap, Kaplay,
              WordPress
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Experience</h3>
            <p>Freelance projects, school projects, interactive games</p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Certifications</h3>
            <p>
              Several Coursera certificates enhancing web development and
              programming skills
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3>About Me</h3>
            <p>
              IT student combining creativity with code to build fun,
              responsive, and interactive websites and games
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
