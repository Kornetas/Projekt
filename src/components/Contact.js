import React from 'react';
import { ContactContainer, ContactTitle, ContactForm, Input, Textarea, SubmitButton } from './Styles'; // Importujemy style

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Kontakt</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Twoje imię" />
        <Input type="email" placeholder="Twój email" />
        <Textarea placeholder="Twoja wiadomość" rows="5"></Textarea>
        <SubmitButton type="submit">Wyślij</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
