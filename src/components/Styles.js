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
  padding: 12px 20px; // Wewnętrzne marginesy
  background: linear-gradient(135deg, #1abc9c, #16a085); // Gradient od ciemniejszego do jaśniejszego koloru
  color: white; // Kolor tekstu
  border: none; // Brak obramowania
  border-radius: 30px; // Zaokrąglone rogi
  font-size: 1.5rem; // Zmniejszona czcionka
  cursor: pointer; // Kursor w postaci wskaźnika
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); // Cień pod przyciskiem
  transition: all 0.3s ease; // Płynna animacja dla wszystkich właściwości
  text-transform: uppercase; // Wielkie litery dla tekstu

  &:hover {
    background: linear-gradient(135deg, #16a085, #1abc9c); // Zmiana gradientu przy hover
    transform: translateY(-2px); // Lekki efekt unoszenia
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); // Zwiększenie cienia przy hover
  }

  &:active {
    transform: translateY(2px); // Efekt "wciskania" przy kliknięciu
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); // Zmniejszenie cienia przy kliknięciu
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
 font-size: 1.3rem; // Zwiększona czcionka
  margin: 10px 0; // Odstępy góra-dół
  text-align: center; // Wyrównanie tekstu do środka
  color: white; // Kolor tekstu
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Wyraźny cień dla kontrastu
  animation: fadeIn 1s ease-in-out; // Animacja pojawiania się

  // Animacja wjazdu
  @keyframes fadeIn {
    from {
      opacity: 0; // Początkowo niewidoczny
      transform: translateY(-20px); // Wjazd z góry
    }
    to {
      opacity: 1; // W pełni widoczny
      transform: translateY(0); // Pozycja końcowa
    }
  }

  // Efekt podkreślenia przy hover
  &:hover {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6); // Zwiększenie cienia przy hover
    transform: scale(1.05); // Powiększenie przy hover
  }
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
  font-size: 2rem; // Zwiększona czcionka
  margin: 10px 0; // Odstępy góra-dół
  text-align: center; // Wyrównanie tekstu do środka
  color: white; // Kolor tekstu
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Wyraźny cień dla kontrastu
  animation: fadeIn 1s ease-in-out; // Animacja pojawiania się

  // Animacja wjazdu
  @keyframes fadeIn {
    from {
      opacity: 0; // Początkowo niewidoczny
      transform: translateY(-20px); // Wjazd z góry
    }
    to {
      opacity: 1; // W pełni widoczny
      transform: translateY(0); // Pozycja końcowa
    }
  }

  // Efekt podkreślenia przy hover
  &:hover {
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6); // Zwiększenie cienia przy hover
    transform: scale(1.05); // Powiększenie przy hover
  }
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
  color: #ffffff; // Kolor tekstu
  text-decoration: none; // Brak podkreślenia
  font-size: 1.5rem; // Rozmiar czcionki
  text-align: left; // Wyrównanie tekstu
  padding: 10px 20px; // Padding
  display: flex; // Flexbox do centrowania
  align-items: center; // Wyrównanie w pionie
  border-radius: 5px; // Zaokrąglone rogi
  background: linear-gradient(135deg, #27ae60, #2980b9); // Gradient w tle
  transition: background 0.3s ease, transform 0.3s ease; // Płynne przejścia
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Delikatny cień

  // Efekt podkreślenia przy hover
  &:hover {
    background: linear-gradient(135deg, #8e44ad, #2980b9); // Odwrotny gradient
    color: #ecf0f1; // Zmiana koloru tekstu na jasny
    transform: scale(1.05); // Powiększenie linku
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); // Zwiększenie cienia
    animation: pulse 0.6s infinite; // Pulsowanie przy hover
  }

  // Dodanie animacji pulsowania
  @keyframes pulse {
    0% {
      transform: scale(1); // Normalny rozmiar
    }
    50% {
      transform: scale(1.1); // Powiększenie
    }
    100% {
      transform: scale(1); // Normalny rozmiar
    }
  }

  // Dodanie animacji przy wjeździe
  @keyframes fadeIn {
    from {
      opacity: 0; // Początkowo niewidoczny
      transform: translateY(-10px); // Wjazd z góry
    }
    to {
      opacity: 1; // W pełni widoczny
      transform: translateY(0); // Pozycja końcowa
    }
  }

  animation: fadeIn 0.5s ease; // Animacja wjazdu
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

export const Title = styled.h1`
  font-size: 2.5rem; // Zwiększona czcionka dla lepszego efektu
  color: #34495e; // Podstawowy kolor tekstu
  margin-bottom: 20px; // Odstęp poniżej
  text-transform: capitalize; // Zmiana pierwszej litery każdego słowa na wielką
  letter-spacing: 2px; // Rozstrzelenie liter
  background: linear-gradient(135deg, #2980b9, #8e44ad); // Gradient w tle
  -webkit-background-clip: text; // Wyświetlanie gradientu tylko na tekście
  -webkit-text-fill-color: transparent; // Ustawienie koloru tekstu na przezroczysty
  background-clip: calc();
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); // Subtelny cień
  transition: transform 0.3s ease, color 0.3s ease; // Animacja transformacji i koloru
  &:hover {
    transform: scale(1.05); // Powiększenie tytułu przy hover
    color: #2980b9; // Zmiana koloru tekstu na gradientowy podczas hover
  }
  // Dodaj animację wjazdu
  @keyframes slideIn {
    from {
      transform: translateY(-20px); // Przesunięcie tytułu z góry
      opacity: 0; // Ukryty na początku
    }
    to {
      transform: translateY(0); // Przesunięcie do normalnej pozycji
      opacity: 1; // W pełni widoczny
    }
  }
  animation: slideIn 0.0s ease; // Dodanie animacji wjazdu
`;


// Podtytuł na stronie
export const Subtitle = styled.h3`
  font-size: 1.75rem; // Trochę większa czcionka
  color: #2c3e50;
  margin-bottom: 25px;
  font-weight: 300; // Lżejsza czcionka dla elegancji
  letter-spacing: 1.5px; // Delikatne rozstrzelenie liter
  position: relative;
  padding-bottom: 5px;
  &:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: #e74c3c; // Podkreślenie w kolorze akcentu
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    width: 100%; // Efekt animowanego podkreślenia przy hover
  }
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

// Tytuł umiejętności na stronie
export const SkillsTitle = styled.h2`
  font-size: 2.5rem; // Większa czcionka dla efektu
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 3px; // Rozstrzelenie liter
  background: linear-gradient(135deg, #3498db, #2ecc71); // Gradient w tle
  background-clip: border-box;
  -webkit-background-clip: text; // Wyświetlanie gradientu tylko na tekście
  -webkit-text-fill-color: transparent; // Ustawienie koloru tekstu na przezroczysty
  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); // Delikatny cień
  transition: all 0.3s ease-in-out; // Efekt przejścia przy hover
  &:hover {
    letter-spacing: 5px; // Powiększenie rozstrzelenia liter przy hover
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); // Zwiększenie cienia
  }
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


// Kontener dla sekcji linków do mediów społecznościowych
export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px 0;
`;

// Stylizacja dla linków do mediów społecznościowych
export const SocialMediaLink = styled.a`
  background-color: #3b5998; // Kolor Facebooka
  color: white;
  border-radius: 10px; // Ustawienie mniejszego zaokrąglenia
  padding: 12px; // Wewnętrzne marginesy
  margin: 0 15px; // Odstęp między ikonami
  display: flex; // Flexbox dla centrowania
  justify-content: center; // Wyrównanie do środka
  align-items: center; // Wyrównanie do środka
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 30px; // Szerokość ikony
  height: 10px; // Wysokość ikony

  &:hover {
    transform: scale(1.1); // Powiększenie przy hover
  }
`;

// Stylizacja dla Facebooka
export const FacebookLink = styled(SocialMediaLink)`
  background-color: #3b5998; // Kolor Facebooka
  &:hover {
    background-color: #8b9dc3; // Jaśniejszy odcień przy hover
  }
`;

// Stylizacja dla GitHub
export const GithubLink = styled(SocialMediaLink)`
  background-color: #333; // Kolor GitHub
  &:hover {
    background-color: #444; // Jaśniejszy odcień przy hover
  }
`;

// Stylizacja dla LinkedIn
export const LinkedInLink = styled(SocialMediaLink)`
  background-color: #0077b5; // Kolor LinkedIn
  &:hover {
    background-color: #0093d0; // Jaśniejszy odcień przy hover
  }
`;

