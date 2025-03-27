import React, { useState, useEffect } from 'react';
import './commingSoon.css';
import login_logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom";

const ComingSoon = () => {
  // Countdown Timer logic
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2025-05-01T00:00:00"); // Target date

    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeRemaining = targetDate - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <>
    <Link to="/">
    <img src={login_logo} className="comming_logo"/></Link>
    <div className="coming-soon-container">
      <div className="overlay"></div>
      <div className="coming-soon-content">
        <h1 className="title">Coming Soon!</h1>
        <p className="description">We're working hard to launch something amazing.</p>
        
        <div className="countdown">
          <div className="time-box">
            <span className="time">{timeLeft.days || '0'}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.hours || '00'}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.minutes || '00'}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.seconds || '00'}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
        
        <button className="notify-button">Notify Me</button>
      </div>
    </div>
    </>
  );
};

export default ComingSoon;
