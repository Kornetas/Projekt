import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Stylizacja tekstu powitalnego
export const WelcomeText = styled.p`
  margin-top: 20px;
  color: white; // Możesz zmienić na inny kolor
  margin-left: 0px; // Ustaw margines z lewej strony
  font-size: 1rem;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 10px;
`;

// Stylizacja kontenera nawigacji
export const NavbarContainer = styled.nav`
  background: #16a085;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 250px;
  height: 100vh;
  position: fixed;
`;

// Stylizacja sekcji profilu
export const Profile = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

// Stylizacja zdjęcia profilowego
export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

// Stylizacja imienia i nazwiska
export const Name = styled.h1`
  font-size: 1.5rem;
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
  font-size: 1.2rem;
  text-align: left;
  padding: 10px 20px; // Dodaj przestrzeń wewnętrzną
  display: flex;
  align-items: center; // Wyrównaj ikony i tekst w pionie
  margin-bottom:0px; // Dodaj odstęp między linkami
  &:hover {
    background-color: #1abc9c;
  }
`;

// Stylizacja ikon z odstępem od tekstu
export const Icon = styled(FontAwesomeIcon)`
  margin-right: 15px; // Ustal odstęp między ikoną a tekstem
`;

// Kontener dla sekcji projektów
export const ProjectsContainer = styled.div`
  padding: 50px;
  background-color: #f4f4f4;
`;

// Siatka dla projektów
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

// Karta projektu
export const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

// Tytuł projektu
export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

// Opis projektu
export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Kontener dla strony głównej
export const HomeContainer = styled.div`
  padding-left: 250px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e8f1f2;
`;

// Tytuł główny na stronie
export const Title = styled.h1`
  font-size: 3rem;
  color: #34495e;
  margin-bottom: 20px;
`;

// Podtytuł na stronie
export const Subtitle = styled.h3`
  font-size: 1.8rem;
  color: #7f8c8d;
  margin-bottom: 40px;
`;

// Kontener dla przycisków
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

// Styl dla przycisku
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
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
  font-size: 2.5rem;
  color: #34495e;
  margin-bottom: 20px;
`;

// Tekst w sekcji About
export const AboutText = styled.p`
  font-size: 1.2rem;
  color: #2c3e50;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

// Kontakt - Container
export const ContactContainer = styled.div`
  padding-left: 250px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ecf0f1;
`;

// Tytuł sekcji Kontakt
export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

// Formularz kontaktowy
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
`;

// Pole Input (np. imię, email)
export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
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
  font-size: 1rem;
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
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #16a085;
  }
`;

// Nowe style przeniesione z Home.js
export const SkillsContainer = styled.div`
  margin: 20px 0;  // Ustal margines z góry i dołu dla kontenera
  text-align: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 2rem;  // Ustal większy rozmiar czcionki dla tytułu umiejętności
  color: #34495e;  // Ustal kolor zgodny z resztą projektu
  margin-bottom: 20px;
`;

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;  // Ustal wyrównanie tekstu do lewej
  max-width: 600px;  // Ustal maksymalną szerokość listy umiejętności
  margin: 0 auto;    // Wyrównaj listę na środku
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;  // Zmień kierunek flexboxa, aby ikony i tekst były w kolumnie
  align-items: flex-start;  // Wyrównaj do początku
  margin: 15px 0;  // Ustal margines góra-dół
  font-size: 1rem;  // Ustal rozmiar czcionki
  color: #2c3e50;  // Ustal kolor tekstu
`;

export const SkillIcon = styled(FontAwesomeIcon)`
  margin-right: 10px; // Ustal odstęp między ikoną a tekstem
  color: #16a085; // Kolor ikony
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 10%;
  width: 250px; /* Szerokość zdjęcia */
  height: 250px; /* Wysokość zdjęcia */
  object-fit: cover;
`;
