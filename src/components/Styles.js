import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column; // Ustawiamy kolumny, aby elementy były jeden nad drugim.
  margin-left: 300px; /* Przesunięcie w prawo, dostosuj według potrzeb */
  justify-content: center; // Wyśrodkowanie w pionie.
  align-items: center; // Wyśrodkowanie w poziomie.
  height: 100vh; // Kontener zajmuje 100% wysokości widoku.
  padding: 20px; // Dodajemy trochę paddingu.
  background-color: #ecf0f1;
  gap: 30px; // Przestrzeń między sekcjami.
  z-index: 1;

  @media (max-width: 600px) {
    padding-top: 60px; // Na mniejszych ekranach dodajemy trochę przestrzeni u góry.
    height: auto; // Na małych ekranach wysokość jest automatyczna.
  }
`;

export const ContactInfo = styled.div`
  text-align: center; // Wyśrodkowanie tekstu.
  margin-bottom: 20px;
  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width:100%; // Szerokość 100% dla pełnej elastyczności.
  max-width: 380px; // Maksymalna szerokość formularza.
  gap: 20px;

  @media (max-width: 600px) {
    width: 100%; // Dla mniejszych ekranów szerokość również 100%.
  }
`;
// Tytuł sekcji Kontakt
export const ContactTitle = styled.h2`
  font-size: 2rem; // Ustalamy rozmiar czcionki
  color: #2c3e50; // Ustalamy kolor
  margin-bottom: 20px; // Odstęp poniżej nagłówka
  text-align: center; // Wyśrodkowanie tekstu
`;

// Styl dla linków do social mediów
export const SocialLinks = styled.div`
  margin-top: 15px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-left: 160px; /* Przesuwa element w prawo */
  font-size: 1.5rem;  // Zmniejszono
  /* color: #007bff; */
  text-decoration: none;
  margin-bottom: 10px;

  svg {
    margin-right: 8px;
  }

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

// Pole Input (np. imię, email)
export const Input = styled.input`
  padding: 10px;
  font-size: 1.5rem;  // Zmniejszono
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  background-color: white;
  &:focus {
    outline: none;
    border-color: #16a085;
  }
`;

// Pole Textarea
export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1.5rem;  // Zmniejszono
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  background-color: white;
  &:focus {
    outline: none;
    border-color: #16a085;
  }
`;

// Przycisk wysyłania formularza
export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;  // Zmniejszono
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #16a085;
  }
`;

// Stylizacja dla checkboxa zgody na przetwarzanie danych
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    margin-right: 10px;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;  // Zmniejszono
  color: #555;
`;

// Stylizacja pola dla numeru telefonu (opcjonalnie)
export const OptionalPhoneInput = styled(Input)`
  border: 1px solid #95a5a6; /* Zmieniono kolor obramowania dla pola opcjonalnego */
  &:focus {
    border-color: #3498db;
  }
`;

// Stylizacja tekstu powitalnego
export const WelcomeText = styled.p`
  margin-top: 20px;
  color: white;
  margin-left: 0px;
  font-size: 1.3rem;  // Zmniejszono
  text-align: center;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #16a085 0%, #1abc9c 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  width: 250px;
  height: 100vh;
  position: fixed; // Nawigacja ma być przyklejona do lewej strony.
  top: 0;
  left: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 100; // Ustawiamy wysoki z-index dla nawigacji, aby była na wierzchu.

  &.active {
    background-color: rgba(255, 255, 255, 0.2); /* Kolor tła dla aktywnego linku */
    font-weight: bold; /* Opcjonalnie: pogrubienie aktywnego linku */
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    position: relative; // Na małych ekranach pozycjonowanie jest względne.
    padding: 10px;
    align-items: center;
    z-index: 10; // Na mobilnych zmniejszamy z-index.
  }
`;

// Stylizacja sekcji profilu
export const Profile = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

// Stylizacja zdjęcia profilowego
export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

// Stylizacja imienia i nazwiska
export const Name = styled.h1`
  font-size: 2rem;  // Zmniejszono
  margin: 10px 0;
  text-align: center;
`;

// Stylizacja kontenerów na linki nawigacyjne
export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  
`;

// Stylizacja linku nawigacyjnego
export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  text-align: left;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease;
  }
`;
// Stylizacja ikon z odstępem od tekstu
export const Icon = styled(FontAwesomeIcon)`
  margin-right: 15px;
`;

// Kontener dla projektów
export const ProjectsContainer = styled.div`
  padding: 0px;
  background-color: #ecf0f1;
  max-width: 1200px;
  margin: 0 auto; /* Wyśrodkowanie kontenera */
  text-align: center;
  margin-left: 300px; /* Przesunięcie w prawo, dostosuj według potrzeb */

  h2 {
    margin-bottom: 30px;
    font-size: 2rem;  // Zmniejszono
    color: #333;
  }
`;

// Siatka dla projektów
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center; /* Wyśrodkowanie elementów w siatce */
`;

// Karta projektu
export const ProjectCard = styled.div`
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%; /* Umożliwia kartom wypełnienie przestrzeni */
  max-width: 300px; /* Ustalamy maksymalną szerokość kart */

  &:hover {
    transform: translateY(-5px);
  }
`;

// Tytuł projektu
export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

// Opis projektu
export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

// Przycisk projektu
export const ProjectButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Kontener dla strony głównej
export const HomeContainer = styled.div`
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e8f1f2;
`;

// Tytuł główny na stronie
export const Title = styled.h1`
  font-size: 2rem;  // Zmniejszono
  color: #34495e;
  margin-bottom: 0px;
`;

// Podtytuł na stronie
export const Subtitle = styled.h3`
  font-size: 1.5rem;  // Zmniejszono
  color: black;
  margin-bottom: 20px;
`;

// Kontener dla przycisków
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

// Styl dla przycisku
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.4rem;  // Zmniejszono
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

// Kontener dla About
export const AboutContainer = styled.div`
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f9fa;
`;

// Tytuł sekcji About
export const AboutTitle = styled.h2`
  font-size: 2rem; // Zmniejszono
  color: #34495e;
  margin-bottom: 20px;
`;

// Tekst w sekcji About
export const AboutText = styled.p`
  font-size: 1.2rem; // Zmniejszono
  color: #2c3e50;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

// Stylizacja dla Skills
export const SkillsContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 2rem; // Zmniejszono
  color: #34495e;
  margin-bottom: 20px;
`;

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0;
  font-size: 1rem;
  color: #2c3e50;
`;

export const SkillIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #16a085;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 10%;
  width: 350px;
  height: 350px;
  object-fit: cover;
`;
