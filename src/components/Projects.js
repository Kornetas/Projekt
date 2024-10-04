import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import ikony GitHub
import { ProjectsContainer, ProjectGrid, ProjectCard, ProjectTitle, ProjectDescription, ProjectButton } from './Styles';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Moje Projekty</h2>
      <ProjectGrid>
        <ProjectCard>
          <ProjectTitle>Projekt 1: Interaktywny Kalkulator</ProjectTitle>
          <ProjectDescription>
            To mój pierwszy projekt kalkulator. Jest to prosty kalkulator zbudowany z HTML, CSS i waniliowego JavaScript. Kalkulator obsługuje podstawowe operacje arytmetyczne: dodawanie, odejmowanie, mnożenie i dzielenie.
            Możesz go znaleźć na GitHubie: 
            <a href="https://github.com/Kornetas/24w4-starter-calculator" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '5px', fontSize: '2.5rem' }} />
            </a>
            </ProjectDescription>
          <a href="https://github.com/Kornetas/24w4-starter-calculator" target="_blank" rel="noopener noreferrer">
            <ProjectButton>Więcej informacji</ProjectButton>
          </a>
        </ProjectCard>
        <ProjectCard>
        <ProjectTitle>Projekt 2: Moja Własna Strona Osobista</ProjectTitle>
          <ProjectDescription>
            To moja własna strona osobista, która przedstawia moje umiejętności, doświadczenie oraz projekty. 
            Możesz go znaleźć na GitHubie:   
            <a href="https://github.com/Kornetas/Projekt" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '5px', fontSize: '2.5rem' }} />
            </a>
          </ProjectDescription>
          <a href="https://github.com/Kornetas/Projekt" target="_blank" rel="noopener noreferrer">
            <ProjectButton>Więcej informacji</ProjectButton>
          </a>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Projekt 3</ProjectTitle>
          <ProjectDescription>Wkrótce.</ProjectDescription>
          <ProjectButton>Więcej informacji</ProjectButton>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Projekt 4</ProjectTitle>
          <ProjectDescription>Wkrótce.</ProjectDescription>
          <ProjectButton>Więcej informacji</ProjectButton>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
