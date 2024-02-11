import React from 'react';

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const anchorStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', display: 'flex', margin: '0', padding: '0' }}>
        <li style={{ margin: '0 20px' }}>
          <span style={anchorStyle} onClick={scrollToTop}>PENNAPPS</span>
        </li>
        <li style={{ margin: '0 20px' }}>
          <span style={anchorStyle} onClick={() => scrollToSection('about')}>ABOUT</span>
        </li>
        <li style={{ margin: '0 20px' }}>
          <span style={anchorStyle} onClick={() => scrollToSection('apply')}>APPLY</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
