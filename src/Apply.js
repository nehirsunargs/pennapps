import React from 'react';
import './styles.css'; 

function Apply() {
  const applyPageStyle = {
    background: '#F5EDD6', 
    minHeight: '100vh', 
    width: '100%', 
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '50px 20px', 
    boxSizing: 'border-box', 
  };

  const headerStyle = {
    width: '505px',
    height: '112px',
    position: 'absolute',
    top: '1251px',
    left: '435px',
    fontFamily: 'Futura PT, sans-serif', 
    fontWeight: '600',
    fontSize: '44px',
    lineHeight: '56.41px',
    color: '#1F4A38', 
    textAlign: 'left', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 30px 0',
  };

  const contentStyle = {
    width: '535.77px',
    height: '63.06px',
    position: 'absolute',
    top: '1378.04px',
    left: '435px',
    fontFamily: 'Proxima Nova, sans-serif', 
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px',
    textAlign: 'left', 
    margin: '0 0 30px 0',
  };

  const applyButtonStyle = {
    width: '103px', 
    height: '41px', 
    position: 'absolute', 
    top: '1471px', 
    left: '436px', 
    textDecoration: 'none', 
    color: 'white', 
    padding: '10px 20px', 
    borderRadius: '20px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    border: 'none', 
    margin: '30px auto 0',
    cursor: 'pointer', 
    fontSize: '23px', 
    textTransform: 'uppercase', 
    lineHeight: '1', 
    outline: 'none', 
  };

  return (
    <div id="apply" style={applyPageStyle}>
      <h2 style={headerStyle}>Beleaf it or not, applications are open!</h2>
      <p style={contentStyle}>
        Hosted at the nation’s first university, PennApps is the original college hackathon. Come join us to learn something new, build an app, or start a company. Let’s continue to make history together.
      </p>
      <a
        href="https://pennclubs.com/club/pennapps"
        target="_blank"
        rel="noopener noreferrer"
        style={applyButtonStyle}
        className="applyButton"
      >
        Apply
      </a>
    </div>
  );
}

export default Apply;
