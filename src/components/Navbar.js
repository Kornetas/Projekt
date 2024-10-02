import React from 'react';
import {
  NavbarContainer,
  Profile,
  ProfileImg,
  Name,
  NavLinks,
  NavLink,
  Icon,
  WelcomeText, // Importuj WelcomeText
} from './Styles'; // Upewnij się, że importujesz odpowiednie komponenty
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importuj ikony
import ProfilePic from './Photo.jpg'; // Upewnij się, że ścieżka do zdjęcia jest poprawna

const Navbar = () => {
  return (
    <NavbarContainer>
      <Profile>
        <Name>Arkadiusz Rak</Name> {/* Przeniesione nad zdjęcie */}
        <ProfileImg src={ProfilePic} alt="Profile" />

        {/* Zastąpienie tekstu powitalnego komponentem WelcomeText */}
        <WelcomeText>
          Witam, nazywam się Arkadiusz Rak i jestem junior full stack developer<br />
          Witam na mojej osobistej stronie internetowej! <br />
          
        </WelcomeText>
      </Profile>

      {/* Sekcja linków do mediów społecznościowych */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', padding: '10px 0' }}>
        <NavLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faFacebook} />
        </NavLink>
        <NavLink href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faGithub} />
        </NavLink>
        <NavLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faLinkedin} />
        </NavLink>
      </div>

      {/* Dodaj większy odstęp przed linkami nawigacyjnymi */}
      <NavLinks style={{ marginTop: '30px' }}>
        <NavLink href="/"><Icon icon={faHome} /> Strona główna</NavLink>
        <NavLink href="/about"><Icon icon={faUser} /> O mnie</NavLink>
        <NavLink href="/projects"><Icon icon={faBriefcase} /> Projekty</NavLink>
        <NavLink href="/contact"><Icon icon={faEnvelope} /> Kontakt</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
