import React from 'react';
import "./css/about.css"
import Container from 'react-bootstrap/Container';


function About() {
  return (
      <Container id="about" className='aboutme'>
        <h1>About Me</h1>

        <p>
            Hi my name is David, I'm an aspiring web developer, embedded systems tinkerer and photographer & videographer

            My journey involves writing code for edge devices used in Quality-Control automation, working as a freelance photographer, and much more.

        </p>
      </Container>
  );
};

export default About;