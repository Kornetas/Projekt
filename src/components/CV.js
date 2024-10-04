import React from 'react';
import styled from 'styled-components'; // Upewnij się, że to jest poprawny import

// Stylowany komponent
const StyledCV = styled.div`
  .contact-container {
    margin-bottom: 20px;
  }

  .contact-info {
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .contact-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .skills-container {
    margin: 20px 0;
  }

  .skills-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .skill-list {
    list-style-type: none;
    padding: 0;
  }

  .skill-item {
    background-color: #e0e0e0;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }

  .about-container {
    margin: 20px 0;
  }

  .about-text {
    font-size: 1.1em;
    line-height: 1.5;
  }

  .projects-container {
    margin: 20px 0;
  }

  .project-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .project-card {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
    flex: 1 1 calc(33% - 15px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .project-title {
    font-size: 1.2em;
  }

  .project-description {
    font-size: 0.9em;
    margin: 5px 0;
  }

  .project-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .project-button:hover {
    background-color: #0056b3;
  }
`;

// Komponent CV
const CV = () => {
  const personalInfo = {
    name: "Jan Kowalski",
    address: "ul. Przykładowa 1, 00-001 Warszawa",
    phone: "+48 123 456 789",
    email: "jan.kowalski@example.com",
    linkedIn: "https://www.linkedin.com/in/jankowalski",
  };

  const experience = [
    {
      title: "Frontend Developer",
      company: "Firma A",
      location: "Warszawa",
      date: "Czerwiec 2021 - obecnie",
      responsibilities: [
        "Tworzenie i utrzymanie aplikacji webowych.",
        "Współpraca z zespołem projektowym.",
        "Optymalizacja wydajności aplikacji."
      ],
    },
    {
      title: "Web Developer",
      company: "Firma B",
      location: "Kraków",
      date: "Styczeń 2020 - Maj 2021",
      responsibilities: [
        "Rozwój stron internetowych.",
        "Implementacja responsywnego designu.",
        "Zarządzanie bazami danych."
      ],
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML & CSS",
    "SQL",
    "Git",
  ];

  return (
    <StyledCV>
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Kontakt</h2>
          <p><strong>Imię i Nazwisko:</strong> {personalInfo.name}</p>
          <p><strong>Adres:</strong> {personalInfo.address}</p>
          <p><strong>Telefon:</strong> {personalInfo.phone}</p>
          <p><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
          <p><strong>LinkedIn:</strong> <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">{personalInfo.linkedIn}</a></p>
        </div>
      </div>

      <div className="about-container">
        <p className="about-text">
          Jestem frontend developerem z doświadczeniem w tworzeniu aplikacji webowych. Posiadam umiejętności w JavaScript, React i Node.js.
        </p>
      </div>

      <div className="skills-container">
        <h2 className="skills-title">Umiejętności</h2>
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li className="skill-item" key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="projects-container">
        <h2>Doświadczenie</h2>
        <div className="project-grid">
          {experience.map((job, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{job.title}</h3>
              <p className="project-description">{job.company}, {job.location}</p>
              <p className="project-description"><strong>Okres:</strong> {job.date}</p>
              <button className="project-button">Więcej</button>
            </div>
          ))}
        </div>
      </div>
    </StyledCV>
  );
};

export default CV;