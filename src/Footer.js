import React from 'react';

function Footer() {
  const footerStyle = {
    width: '100%',
    height: '572.24px',
    backgroundColor: '#FAF5E7',
    backgroundImage: 'url(/footer-background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '1rem',
    position: 'relative',
    overflow: 'hidden',
  };

  const socialLinksStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    bottom: '70px',
    left: '300px',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '1rem',
    color: '#FAF5E7',
    fontWeight: 'bold',
  };

  const leftItemStyle = {
    marginLeft: '2rem',
    marginRight: 'auto'
  };

  const rightItemsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: '20px',
    marginLeft: '60px',
  };

  const rightItemStyle = {
    marginBottom: '8px',
    alignSelf: 'flex-start',
  };

  const logoStyle = {
    position: 'absolute',
    bottom: '30px',
    right: '30px',
    width: '234px',
    height: '100px',
  };

  const appsStyle = {
    textAlign: 'center',
    fontSize: '50px',
    color: '#FAF5E7',
    width: '134px',
    height: '90px',
    bottom: '100px',
    left: '10px',
    fontWeight: 'bold',
  };

  const footerTextStyle = {
    color: '#FAF5E7',
    position: 'absolute',
    bottom: '140px',
    left: '10px',
  };

  const logoTextStyle = {
    color: '#FAF5E7',
    position: 'absolute',
    bottom: '130px',
    right: '63px',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerTextStyle}>
        <p style={appsStyle}>PENN APPS</p>
        <p>© 2022 PennApps</p>
        <a>contact@pennapps.com</a>
      </div>
      <div style={socialLinksStyle}>
        <a style={leftItemStyle}>Code of Conduct</a>
        <div style={rightItemsContainerStyle}>
          <a style={rightItemStyle}>Facebook</a>
          <a style={rightItemStyle}>Twitter</a>
          <a style={rightItemStyle}>Instagram</a>
        </div>
      </div>
      <p style={logoTextStyle}>Organized with support from:</p>
      <img src="/penn-logo.png" alt="PennApps Logo" style={logoStyle} />
    </footer>
  );
}

export default Footer;
