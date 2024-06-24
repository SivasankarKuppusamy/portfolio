
import React, { useState, useEffect } from 'react';
import '../Styles/Experience.css';
import experienceData from './experienceData.json'; 

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
  
    setExperiences(experienceData.experiences);
  }, []);

  return (
    <div className="experience-container">
        <h2>Pofessional Experiences</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3>{experience.title}</h3>
          <p className="company">{experience.company}</p>
          <ul className="description">
            {experience.description.split('.').map((item, index) =>
              item.trim() ? <li key={index}>{item.trim()}.</li> : null
            )}
          </ul>
          <p className="duration">{experience.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
