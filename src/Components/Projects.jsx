// src/Projects.js

import React, { useState } from 'react';
import '../Styles/Projects.css';
import { projectsData } from './ProjectsData';
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? projectsData.length - 1 : prevPage - 1
    );
  };

  const project = projectsData[currentPage];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className={`project-card ${currentPage % 2 === 0 ? 'left' : 'right'}`}>
        <div className="project-content">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-text">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className='features'>
                {project.features.map((feature)=>(
                    <li>{feature}</li>
))}
            </div>
            <p className="project-date">{project.date}</p>
          </div>
        </div>
      </div>
      <div className="pagination">
        <button onClick={handlePrevious} className="pagination-button"><i class="fa-solid fa-arrow-left"></i></button>
        {currentPage+1} of {projectsData.length}
        <button onClick={handleNext} className="pagination-button"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Projects;
