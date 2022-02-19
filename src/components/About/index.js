import React from 'react';
import coverImage from "../../assets/img/cover-image.jpg"

function About() {
  return (
    <section className="aboutme">
        <h1>Who am I?</h1>
        <img src={coverImage} style={{ width: "15%" }} alt="Cover head shot" />
        <p>I am a life long information technology professional looking to stretch my software development knowledge so that i can better understand the building blocks of software. While I have been a Project Manager, Educator, IT Help-desk, and Cellist in the past, in this phase of my life I find that I am looking for something that both challenges me and gives me a tangible product. Software development allows me to use all of my skills I previously gained and explore new ones that satisfy my needs for curiosity. Please take a moment and review what I am doing, where I have been, and what it all means to have my skill set.</p>
        <ul>
            <li>Porfolio: Demonstrations of various skills learned in software development.</li>
            <li>Resume: Past positions I have held and educational degrees earned.</li>
            <li>Contact: Various ways of contacting me.</li>
        </ul>
    </section>
  );
}

export default About; 