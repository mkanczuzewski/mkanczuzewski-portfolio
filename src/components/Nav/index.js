import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
      } = props;

  return (
    <header>
        <h2> 
            <a href="/">
            <span role="img" aria-label="computer"> 🖥️</span> Mark Kanczuzewski
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false)}>
                        <span>About me</span>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio">
                        <span>Portfolio</span>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#resume">
                        <span>Resume</span>
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav; 

