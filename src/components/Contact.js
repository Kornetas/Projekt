import React from 'react'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { ContactContainer, ContactTitle, ContactForm, Input, Textarea, SubmitButton, ContactInfo, SocialLinks, SocialLink, CheckboxWrapper, CheckboxLabel } from './Styles'; // Importujemy style

const Contact = () => {
  // Walidacja formularza za pomocą Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Imię musi mieć co najmniej 2 znaki')
      .required('Imię jest wymagane'),
    email: Yup.string()
      .email('Niepoprawny email')
      .required('Email jest wymagany'),
    message: Yup.string()
      .min(10, 'Wiadomość musi mieć co najmniej 10 znaków')
      .required('Wiadomość jest wymagana'),
    phone: Yup.string()
      .matches(/^[0-9]{9}$/, 'Numer telefonu powinien zawierać dokładnie 9 cyfr'), // Dokładnie 9 cyfr
    consent: Yup.boolean()
      .oneOf([true], 'Musisz wyrazić zgodę na przetwarzanie danych'), // Wymagane pole zgody
  });

  // Konfiguracja Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '', // Dodano numer telefonu
      message: '',
      consent: false, // Dodano zgodę
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Używamy EmailJS do wysyłania emaila
      emailjs.send(
        'service_j19gd4t', // Wstaw swój EmailJS Service ID
        'template_jylu57u', // Wstaw swój EmailJS Template ID
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        'daZ1C2kZUoJfevO8b' // Wstaw swój EmailJS User ID
      ).then((result) => {
        console.log(result.text);
        alert('Wiadomość została wysłana!');
        resetForm(); // Resetowanie formularza po wysłaniu
      }, (error) => {
        console.log(error.text);
        alert('Błąd podczas wysyłania wiadomości.');
      });
    },
  });

return (
    <ContactContainer>
      {/* Sekcja danych kontaktowych */}
      <ContactInfo>
        <h2>Dane kontaktowe</h2>
        <p><strong>Imię i nazwisko:</strong> Arkadiusz Rak</p>
        <p><strong>Miejsce zamieszkania:</strong> Rzeszów, Polska</p>
        <p><strong>Narodowość:</strong> Polska</p>
        <p><strong>Telefon:</strong> +48 123 456 789</p>

        {/* Linki do social mediów z ikonami */}
        <SocialLinks>
  <SocialLink href="https://www.facebook.com/profile.php?id=100010319104907" target="_blank" className="facebook">
    <FaFacebookF size={20} /> Facebook
  </SocialLink>
  <SocialLink href="https://www.instagram.com/arek_r_k/" target="_blank" className="instagram">
    <FaInstagram size={20} /> Instagram
  </SocialLink>
  <SocialLink href="https://www.linkedin.com/in/arkadiusz-rak-807272306/" target="_blank" className="linkedin">
    <FaLinkedinIn size={20} /> LinkedIn
  </SocialLink>
  <SocialLink href="https://github.com/Kornetas/Kornetas" target="_blank" className="github">
    <FaGithub size={20} /> GitHub
  </SocialLink>
  <SocialLink href="https://x.com/arek93r" target="_blank" className="X">
    <FaTwitter size={20} /> X
  </SocialLink>
</SocialLinks>

      </ContactInfo>

      <ContactTitle>Formularz kontaktowy</ContactTitle>
      
      {/* Formularz kontaktowy */}
      <ContactForm onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Twoje imię"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <Input
          type="email"
          name="email"
          placeholder="Twój email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        {/* Opcjonalne pole numeru telefonu */}
        <Input
          type="text"
          name="phone"
          placeholder="Twój numer telefonu (opcjonalnie)"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxLength="9"  // Ograniczamy do maksymalnie 9 cyfr
        />
        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

        <Textarea
          name="message"
          placeholder="Twoja wiadomość"
          rows="5"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}

        {/* Checkbox zgody na przetwarzanie danych */}
        <CheckboxWrapper>
          <input
            type="checkbox"
            name="consent"
            checked={formik.values.consent}
            onChange={formik.handleChange}
          />
          <CheckboxLabel>Wyrażam zgodę na przetwarzanie moich danych osobowych</CheckboxLabel>
        </CheckboxWrapper>
        {formik.touched.consent && formik.errors.consent ? <div>{formik.errors.consent}</div> : null}

        <SubmitButton type="submit">Wyślij</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
