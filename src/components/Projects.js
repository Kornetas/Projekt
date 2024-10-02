import React from 'react';
import { ProjectsContainer, ProjectGrid, ProjectCard, ProjectTitle, ProjectDescription } from './Styles';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Moje Projekty</h2>
      <ProjectGrid>
        <ProjectCard>
          <ProjectTitle>Projekt 1</ProjectTitle>
          <ProjectDescription>Opis projektu 1.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Projekt 2</ProjectTitle>
          <ProjectDescription>Opis projektu 2.</ProjectDescription>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
