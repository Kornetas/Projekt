// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate
import { Title, Subtitle, HomeContainer, ButtonContainer, Button, SkillsContainer, SkillsTitle, SkillList, SkillItem, SkillIcon, ProfileImageContainer, ProfileImage } from './Styles'; 
import { faCode, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from './aro1.jpg'; 
import AnimationWrapper from './Animation'; 

const Home = () => {
  const navigate = useNavigate(); // Inicjalizuj useNavigate

  const handleButtonClick = () => {
    navigate('/projects'); // Przejdź do komponentu Projects
  };

  return (
    <AnimationWrapper>
      <HomeContainer style={{ marginLeft: '260px' }}>
        <ProfileImageContainer>
          <ProfileImage src={ProfilePic} alt="Arkadiusz Rak" />
          <Title>Arkadiusz Rak</Title>
        </ProfileImageContainer>
        <Subtitle>Full Stack Junior Developer</Subtitle>

        <p>
          Cześć! Nazywam się Arkadiusz Rak i jestem pasjonatem programowania, który z radością łączy świat frontendu i backendu. Jako Full Stack Junior Developer, posiadam solidne umiejętności w zakresie:
        </p>
        
        <SkillsContainer>
          <SkillsTitle>Umiejętności</SkillsTitle>
          <SkillList>
            <SkillItem>
              <SkillIcon icon={faCode} /> 
              <strong>Frontend:</strong>
              <p>
                Tworzę nowoczesne i responsywne aplikacje, korzystając z technologii takich jak JavaScript, HTML i CSS. 
                Wspieram swoje projekty z wykorzystaniem React.js, co pozwala mi budować dynamiczne interfejsy użytkownika. 
                Dzięki narzędziom takim jak VS Code oraz bibliotekom do testowania jak Jest i Yup, zapewniam jakość i funkcjonalność swoich rozwiązań.
              </p>
            </SkillItem>
            <SkillItem>
              <SkillIcon icon={faDatabase} /> 
              <strong>Backend:</strong>
              <p>
                Jestem również zaznajomiony z GitHubem, co umożliwia mi efektywne zarządzanie kodem i współpracę w zespole.
              </p>
            </SkillItem>
            <SkillItem>
              <SkillIcon icon={faTools} /> 
              <strong>Dodatkowo:</strong>
              <p>
                Wykorzystuję Vercel do hostowania swoich projektów, co pozwala mi łatwo prezentować efekty mojej pracy.
              </p>
            </SkillItem>
          </SkillList>
        </SkillsContainer>

        <p>
          Z niecierpliwością oczekuję kolejnych wyzwań i możliwości rozwijania swoich umiejętności. Jeśli potrzebujesz pełnego zaangażowania i świeżego spojrzenia na projekt, zapraszam do kontaktu!
        </p>

        <ButtonContainer>
          <Button onClick={handleButtonClick}>Dowiedz się więcej</Button> {/* Dodaj obsługę kliknięcia */}
        </ButtonContainer>
      </HomeContainer>
    </AnimationWrapper>
  );
};

export default Home;
