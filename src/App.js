import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import About from './About';
import Apply from './Apply';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <Router>
      <NavBar />
      <>
        <LandingPage />
        <Apply />
        <About />
        <Footer />
      </>
    </Router>
  );
}

export default App;
