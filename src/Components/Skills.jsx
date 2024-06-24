
import React from 'react';
import '../Styles/Skills.css';
import skillsData from './SkillsData.json'; 

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className='skills'>
              {skillsData.map((category, index) => (
        <div key={index} className="skills-category">
          <h5 className="skills-category-title">{category.category}</h5>
          {category.skills.map((skill, idx) => (
            <div key={idx} className="skill">
              <h6 className="skill-name">{skill.name}</h6>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
          
        </div>
      ))}
      </div>

    </div>
  );
};

export default Skills;
