import "./ProjectCard.css";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
