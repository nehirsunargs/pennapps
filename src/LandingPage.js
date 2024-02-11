import React from 'react';
import CountdownTimer from './CountdownTimer';

function LandingPage() {
  const landingPageStyle = {
    textAlign: 'center',
    backgroundImage: 'url(/landing-background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: '#FAF5E7',
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dateStyle = {
    width: '255px',
    height: '25px',
    position: 'absolute',
    top: '351px',
    left: '894px',
    fontFamily: '"Proxima Nova", sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '24px',
    textAlign: 'right',
    color: '#1F4A38',
    backgroundColor: 'transparent',
  };

  const countdownWrapperStyle = {
    width: '588.57px',
    height: '128.1px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: '404.9px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'none',
    border: 'none',
  };

  const bannerStyle = {
    maxWidth: '881px',
    maxHeight: '77.86px',
    position: 'absolute',
    top: '249px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <div id="landing-page" style={landingPageStyle}>
      <img src="/banner.png" alt="PennApps XXIII Banner" style={bannerStyle} />
      <div style={dateStyle}>September 8-10, 2023</div>
      <div style={countdownWrapperStyle}>
        <CountdownTimer />
      </div>
    </div>
  );
}

export default LandingPage;
