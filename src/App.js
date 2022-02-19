import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
  
}

export default App;
