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
                          <NavLink to="/">About</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to="/portfolio">Portfolio</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to="/resume">Resume</NavLink>
                      </li>
                      <li className="mx-2">
                          <NavLink to="/contactform">Contact</NavLink>
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
        </div>
      </HashRouter>
    );
  }
}

export default App;
