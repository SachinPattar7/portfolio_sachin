import React, { useState } from 'react';
import '../../assets/scss/About.scss';

const About = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div id="about-section" className={`about-container ${hovered ? 'hovered' : ''}`} onMouseEnter={handleHover}>
      <h2 className={`${hovered ? 'animated' : ''}`}>About Me</h2>
      <p className="about-description">
        Hey, I'm <span className="bold">Sachin Pattar</span>, a Full-stack Java Developer proficient in React and Angular.
      </p>
      <p>Building robust web applications to drive the success of projects from end to end.</p>

      <section id="skills">
        <h1>My Skills</h1>
        <div className="skills">
          <div className="skills-skill">Java</div>
          <div className="skills-skill">SpringBoot</div>
          <div className="skills-skill">Angular</div>
          <div className="skills-skill">React</div>
          <div className="skills-skill">MySQL</div>
          <div className="skills-skill">MongoDB</div>
          <div className="skills-skill">AWS</div>
          <div className="skills-skill">Hibernate/JPA</div>
          <div className="skills-skill">Microservices</div>
          <div className="skills-skill">Python</div>
        </div>
      </section>
    </div>
  );
};

export default About;
