import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/Navbar.scss';

const NavBar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.navbar-link');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkMouseEnter);
      link.addEventListener('mouseleave', handleLinkMouseLeave);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkMouseEnter);
        link.removeEventListener('mouseleave', handleLinkMouseLeave);
      });
    };
  }, []);

  const handleLinkMouseEnter = (event) => {
    const link = event.target;
    const words = link.textContent.split(' ');
    const animatedWords = words
      .map((word) => {
        const letters = word
          .split('')
          .map((letter) => `<span class="animated-letter">${letter}</span>`)
          .join('');
        return `<span class="animated-word">${letters}</span>`;
      })
      .join(' ');
    link.innerHTML = animatedWords;
  };

  const handleLinkMouseLeave = (event) => {
    const link = event.target;
    const words = link.textContent.split(' ');
    const unanimatedWords = words.join(' ');
    link.innerHTML = unanimatedWords;
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/project" className="navbar-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/experience" className="navbar-link">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
