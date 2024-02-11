import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnitContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
  };

  const timeUnitStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    margin: '0 5px',
    flexBasis: 'calc(25% - 10px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const numberStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#214A38',
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: 'normal',
    color: '#40916C',
    textTransform: 'uppercase',
    marginTop: '5px',
  };

  return (
    <div style={timeUnitContainerStyle}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} style={timeUnitStyle}>
          <span style={numberStyle}>{value}</span>
          <span style={labelStyle}>{unit}</span>
        </div>
      ))}
    </div>
  );
}

function calculateTimeLeft() {
  const hackathonStartDate = new Date("2024-09-10T18:00:00-04:00").getTime();
  const now = new Date().getTime();
  const timeLeft = hackathonStartDate - now;

  if (timeLeft > 0) {
    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  }
  return {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };
}

export default CountdownTimer;
