import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  ContactContainer,
  ContactTitle,
  ContactForm,
  Input,
  Textarea,
  SubmitButton,
  ContactInfo,
  SocialLinks,
  SocialLink,
  CheckboxWrapper,
  ErrorMessage,
  CaptchaContainer // Import CaptchaContainer for styling
} from './Styles'; // Import styles

// Function to generate CAPTCHA
const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Contact = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Generate CAPTCHA

  // Validation schema
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
      .test('isValidPhone', 'Niepoprawny numer telefonu', (value) => {
        if (!value) return true;
        const phoneNumber = parsePhoneNumberFromString(value, 'PL');
        return phoneNumber && phoneNumber.isValid();
      }),
    captcha: Yup.string()
      .required('Wpisz kod z obrazka')
      .oneOf([Yup.ref('captchaValue')], 'Niepoprawny kod CAPTCHA!'),
    consent: Yup.boolean()
      .oneOf([true], 'Musisz wyrazić zgodę na przetwarzanie danych'),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      captcha: '',
      captchaValue: captcha
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Check if CAPTCHA is valid
      if (values.captcha !== captcha) {
        toast.error('Niepoprawny kod CAPTCHA!');
        return;
      }

      // Send the form via EmailJS
      emailjs.send('service_j19gd4t', 'template_jylu57u', {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      }, 'daZ1C2kZUoJfevO8b')
        .then((result) => {
          toast.success('Twoja wiadomość została wysłana. Dziękujemy!', {
            position: 'bottom-center',
            autoClose: 5000
          });
          resetForm();
          setCaptcha(generateCaptcha()); // Generate new CAPTCHA after submission
        }, (error) => {
          toast.error('Błąd podczas wysyłania wiadomości. Spróbuj ponownie później.', {
            position: 'top-right',
            autoClose: 5000
          });
        });
    },
  });

  // Update CAPTCHA on each render
  useEffect(() => {
    formik.setFieldValue('captchaValue', captcha);
  }, [captcha]);

  return (
    <ContactContainer>
      <ToastContainer />

      <ContactInfo>
        <h2>Dane kontaktowe</h2>
        <p><strong>Imię i nazwisko:</strong> Arkadiusz Rak</p>
        <p><strong>Miejsce zamieszkania:</strong> Rzeszów, Polska</p>
        <p><strong>Narodowość:</strong> Polska</p>
        <p><strong>Telefon:</strong> +48 123 456 789</p>

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

      <ContactForm onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Twoje imię"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="name"
          style={{ borderColor: formik.touched.name && formik.errors.name ? 'red' : '' }}
        />
        {formik.touched.name && formik.errors.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}

        <Input
          type="email"
          name="email"
          placeholder="Twój email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="email"
          style={{ borderColor: formik.touched.email && formik.errors.email ? 'red' : '' }}
        />
        {formik.touched.email && formik.errors.email ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}

        <Input
          type="tel"
          name="phone"
          placeholder="Twój numer telefonu (opcjonalnie)"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxLength="15"
          autoComplete="tel"
          style={{ borderColor: formik.touched.phone && formik.errors.phone ? 'red' : '' }}
        />
        {formik.touched.phone && formik.errors.phone ? <ErrorMessage>{formik.errors.phone}</ErrorMessage> : null}

        <Textarea
          name="message"
          placeholder="Twoja wiadomość"
          rows="5"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          style={{ borderColor: formik.touched.message && formik.errors.message ? 'red' : '' }}
        />
        {formik.touched.message && formik.errors.message ? <ErrorMessage>{formik.errors.message}</ErrorMessage> : null}

       {/* CAPTCHA */}
<div>
  <CaptchaContainer>
    <strong>{captcha}</strong> {/* Only the CAPTCHA code is inside the border */}
  </CaptchaContainer>
  <p style={{ fontStyle: 'italic', color: 'red' }}>
    Użyj wielkich i małych liter
  </p>
  <Input
    type="text"
    name="captcha"
    placeholder="Wpisz kod z obrazka"
    value={formik.values.captcha}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    autoComplete="off"
    style={{ borderColor: formik.touched.captcha && formik.errors.captcha ? 'red' : '' }}
  />
  {formik.touched.captcha && formik.errors.captcha ? <ErrorMessage>{formik.errors.captcha}</ErrorMessage> : null}
</div>


        <CheckboxWrapper>
          <label htmlFor="consent">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formik.values.consent}
              onChange={formik.handleChange}
            />
            Wyrażam zgodę na przetwarzanie moich danych osobowych
          </label>
        </CheckboxWrapper>

        {formik.touched.consent && formik.errors.consent ? <ErrorMessage>{formik.errors.consent}</ErrorMessage> : null}

        <SubmitButton type="submit">Wyślij</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
