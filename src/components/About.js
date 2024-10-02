import React from 'react';
import { AboutContainer, AboutTitle, AboutText } from './Styles'; // Importujemy style

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>O mnie</AboutTitle>
      <AboutText>
        Jestem doświadczonym deweloperem front-endowym z pasją do React. Uwielbiam tworzyć
        interaktywne i nowoczesne strony internetowe, które łączą estetykę z funkcjonalnością.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
