import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PremiumPage from './pages/PremiumPage';
import { FaGithubSquare } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="navbar-links">
            <NavLink className="navlink" exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" activeClassName="active" to="about">
              About
            </NavLink>
            <NavLink className="navlink" activeClassName="active" to="premium">
              AWS Auth
            </NavLink>
          </div>
          <a
            className="social-link"
            href="https://github.com/ArmeenF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare  />
          </a>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/premium" element={<PremiumPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
