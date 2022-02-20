import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* {!contactSelected ? (
            <>
              <About></About>
              <Portfolio></Portfolio>
            </>
          ) : (
              <ContactForm></ContactForm>
            )} */}
          <ContactForm></ContactForm>
          <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
  
}

export default App;
