
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Sivasankar k</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       <Link to="https://drive.google.com/file/d/1ium6hHxw_4VWQMPoXGyvXy7ZfcKqiZfd/view?usp=drive_link" target='_blank'> <li className='resume-download-btn' >Download resume!</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
