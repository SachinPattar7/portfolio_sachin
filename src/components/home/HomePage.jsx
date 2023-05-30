/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../../assets/scss/Home.scss';
import videoBg from '../../assets/videos/tech2.mp4';
import profilePic from '../../assets/images/photos/dev.png'; // Add the path to your profile picture image
import About from '../about/About';
import NavBar from '../navbar/Navbar';
import Project from '../project/Project';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';

const HomePage = () => {
  const showText = true;

  return (
    <div className="home">
      <NavBar/>
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="text-overlay">
          <div className="welcome-section">
          <div className="profile-pic">
            <img src={profilePic} alt="Profile picture of the website owner" className="round-profile-pic" />
          </div>
            <h1>Welcome to my Portfolio!</h1>
            {showText && (
              <>
                <p className="home-paragraph typewriter-font">This is the homepage of my Portfolio</p>
                <p className="know-me typewriter-font typewriter-delay">
                  Here you will get to know me & My Work !!{' '}
                  <span className="home-smiley" role="img" aria-label="Smiley">
                    😊
                  </span>
                </p>
              </>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  );
};

export default Main;
