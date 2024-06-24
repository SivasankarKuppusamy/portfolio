import React from 'react';
import '../Styles/Home.css';
import profile from '../profile.jpg'
const HomePage = () => {
  return (
    <div className="container">
       
      <header className="header">
        <h1 className="title">Welcome to My Portfolio</h1>
        <h2 className="subtitle">I'm Sivasankar K, a Full-Stack Developer</h2>
        <a href="#contact" className="button">Get in Touch</a>
      </header>
      <img className="profile-image" src={profile} alt="Profile" />
    </div>
  );
};

export default HomePage;
