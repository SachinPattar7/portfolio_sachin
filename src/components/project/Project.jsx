import React from 'react';
import '../../assets/scss/Project.scss';

const Project = () => {
  const projects = [
    {
      title: 'DRB',
      image: require('../../assets/images/photos/profilez3.jpg'),
      description: 'DRB is a web application designed for clients seeking tax-related solutions. It offers a convenient platform for managing and processing tax-related tasks efficiently. With DRB, clients can easily handle various tax-related processes, ensuring accuracy and compliance. The application streamlines the tax workflow, providing a user-friendly interface and robust features. DRB is a reliable tool that simplifies tax management for clients and enhances their overall tax experience.',
    },
    {
      title: 'WWR (Wild West Rummy)',
      image: require('../../assets/images/photos/profilez.jpg'),
      description: 'WWR Rummy is a popular card game played with a standard deck of 52 cards. The objective is to form sets or sequences of cards and be the first to eliminate all cards. Players take turns drawing and discarding cards to build their sets. Strategy, skill, and luck are key.',
    },
    {
      title: 'SPORTI',
      image: require('../../assets/images/photos/engg1.jpg'),
      description: 'SPORTI, formerly known as "Senior Police Officer Mess," served as a prominent institution for over 45 years. Initially established in 1973 to meet the specific requirements of police authorities, it underwent a name change in 2019 to "Senior Police Officers Research and Training Institute." This transformation aimed to enhance the quality of services offered to police officials. SPORTI has been dedicated to providing specialized training and conducting research for the benefit of law enforcement professionals.',
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
