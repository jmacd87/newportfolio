import React from 'react';
import './Projects.css';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [page, setPage] = React.useState(0);

  const handleArrowClick = () => {
    if (page === 0) {
      setPage(1);
    } else {
      setPage(0);
    }
  };

  return (
    <div className="projects-content">
      <div className="projects-header">
        <h2 className="section-title">02. Projects</h2>

        {totalPages > 1 && (
          <button className="toggle-arrow" onClick={handleArrowClick}>
            {page === 0 ? (
              <i className="far fa-arrow-alt-circle-right arrow-icons"></i>
            ) : (
              <i className="far fa-arrow-alt-circle-left arrow-icons"></i>
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
                />
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank">
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
