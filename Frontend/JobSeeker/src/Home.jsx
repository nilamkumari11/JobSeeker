// import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  const handleDisplayClick = () => {
    navigate('/read'); 
  };

  const handleApplyClick = () => {
    navigate('/create');
  }

    
    return (
        <div className="container">
      <header className="header">
        <h1 className="logo">JobSeeker</h1>
        <button onClick={handleDisplayClick} className="display-btn">Display</button>
      </header>

      <main className="job-card">
        <h2>Software Developer</h2>
        <p>Looking for a passionate developer to join our team.</p>
        <button onClick={handleApplyClick}  className="apply-btn">Apply</button>
      </main>
    </div>
    );
}

export default Home