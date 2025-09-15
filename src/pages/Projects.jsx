import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

import imgGame from "../assets/images/game.png";
import imgFortuna from "../assets/images/fortuna.png";
import imgRossi from "../assets/images/rossi.png";
import imgCauldron from "../assets/images/cauldron.png";

export default function Projects() {
  const projects = [
    {
      title: "Web Platformer Game",
      description: "JavaScript + Kaplay library",
      link: "https://kaplayplatformergame.netlify.app/",
      image: imgGame,
    },
    {
      title: "Fortuna Art",
      description: "HTML, CSS, JS",
      link: "https://fortunaart.netlify.app",
      image: imgFortuna,
    },
    {
      title: "Rossi Advertising Agency",
      description: "Bootstrap + JS",
      link: "https://rossireklamagent.netlify.app",
      image: imgRossi,
    },
    {
      title: "Enchanted Cauldron",
      description: "Wordpress",
      link: "https://enchantedcauldron.netlify.app",
      image: imgCauldron,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((p, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
