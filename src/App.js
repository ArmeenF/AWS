import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PremiumPage from './pages/PremiumPage';
import Scraper from './pages/Scraper';
import PickupSoccer from './pages/PickupSoccer';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="navbar-links">
            <NavLink className="navlink" exact activeClassName="active" to="/">
              Home
            </NavLink>
            {/* <NavLink className="navlink" activeClassName="active" to="about">
              About
            </NavLink> */}
            <NavLink className="navlink" activeClassName="active" to="premium">
              AWS Auth
            </NavLink>
            {/* <NavLink className="navlink" activeClassName="active" to="scraper">
              Scraper
            </NavLink> */}
            <NavLink className="navlink" activeClassName="active" to="pickupsoccer">
            PickupSoccer
            </NavLink>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/premium" element={<PremiumPage />} />
            {/* <Route path="/scraper" element={<Scraper />} /> */}
            <Route path="/PickupSoccer" element={<PickupSoccer />} />
          </Routes>
        </div>
        <footer className="footer">
          <a
            className="social-link"
            href="https://github.com/ArmeenF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/armeen-farange/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-link"
            href="mailto:armeenfarange@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </footer>
      </Router>
    </div>
  );
}

export default App;
