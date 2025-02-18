import React from 'react';
import ReactDOM from 'react-dom';
import './Projects.css';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [page, setPage] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleArrowClick = () => {
    setPage(page === 0 ? 1 : 0);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-content">
      <div className="projects-header">
        <h2 className="section-title">02. Projects</h2>
        {totalPages > 1 && (
          <button className="arrow-icons" onClick={handleArrowClick}>
            {page === 0 ? (
              <i className="far fa-arrow-alt-circle-right arrow-icon"></i>
            ) : (
              <i className="far fa-arrow-alt-circle-left arrow-icon"></i>
            )}
          </button>
        )}
      </div>
      <div className="design-line" style={{ marginBottom: '1rem' }} />
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleImageClick(project.image)}
                />
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-link-container">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Github
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedImage &&
        ReactDOM.createPortal(
          <div className="image-overlay" onClick={closeOverlay}>
            <img
              src={selectedImage}
              alt="Enlarged version"
              className="enlarged-image"
            />
          </div>,
          document.body
        )}
    </div>
  );
};

export default Projects;
