import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

const project = {
  image: 'img/listings-page.jpg',
  name: 'Group Project 1: Its Amiibo, Mario!',
  description: 'This was the first five team member project completed during the boot camp. It features two API searches, local storage, and materialize CSS usage.',
  url: 'https://alex-soucy.github.io/its-amiibo-mario/'
};

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
          <Portfolio image={project.image} name={project.name} description={project.description} url={project.url} />
          <Portfolio image='img/Project2-SS.jpg'
            name="Group Project 2: Fantasy Stock Picks" 
            description="The project for Fantasy Stock Picks was the first time the class put together a MVC style project. It featured a number of NPM, Express, and mySQL technologies." 
            url='https://marks-fantasy-stock-picks.herokuapp.com' />
        <About></About>
      </main>
    </div>
  );
  
}

export default App;
