import React from 'react';
import '../../assets/scss/Experience.scss';

const experiences = [
  {
    company: 'Hanuvel Consultant',
    location: 'Bengaluru',
    role: 'Java Full Stack Developer',
    duration: 'September 2022 - Present',
  },
  {
    company: 'ACS Global Tech Solutions Pvt.Ltd',
    location: 'Hyderabad',
    role: 'Java Developer',
    duration: 'July 2021 - August 2022',
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>

      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.location}</p>
            <p>{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
