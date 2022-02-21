import React, { Component } from 'react';
import './App.css';
import {
  HashRouter,
  Route,
  NavLink,
  Routes
} from "react-router-dom";
import About from './components/About';
// import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

class App extends Component {
  render() {

    let activeStyle = {
      textDecoration: "purple wavy underline"
    };

    return (
      <HashRouter>
        <div>
          <header>
              <h1> 
                  <a href="/">
                  <span role="img" aria-label="computer"> 🖥️</span> Mark Kanczuzewski
                  </a>
              </h1>
              <nav>
                  <h2>
                  <ul className="flex-row">
                      <li className="mx-2">
                          <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to="/portfolio" style={({ isActive }) => isActive ? activeStyle : undefined}>Portfolio</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to="/resume" style={({ isActive }) => isActive ? activeStyle : undefined}>Resume</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to="/contactform" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
                      </li>
                  </ul>
                  </h2>
              </nav>
          </header>
          <main>
            <div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contactform" element={<ContactForm />} />
            </Routes>
            </div>
          </main>
          <footer>
            <ul className="flex-row">
              <li className="mx-2"><h2><a href="https://github.com/mkanczuzewski">GitHub</a></h2></li>
              <li className="mx-2"><h2><a href="https://www.linkedin.com/in/mark-kanczuzewski-45114810/">LinkedIn</a></h2></li>
              <li className="mx-2"><h2><a href="https://stackoverflow.com/users/16797037/mark-kanczuzewski">Stackoverflow</a></h2></li>
            </ul>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
