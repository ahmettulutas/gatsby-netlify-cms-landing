import React from 'react';
import FormInput from './FormInput.js';
import emailjs from 'emailjs-com';
import { navigate } from 'gatsby-link';

const emptyState = {
    first_name: '',
    reply_to: '',
    message: ''
  },
  inputs = [
    {
      pattern: '^[-_ a-zA-Z0-9ğüşöçİĞÜŞÖÇ]{4,100}$',
      label: 'Ad ve Soyad',
      type: 'text',
      key: 1,
      name: 'first_name',
      message: 'Lütfen adınızı ve soyadınızı eksiksiz giriniz.',
      placeholder: 'Adınız ve soyadınızı buraya yazınız.',
      required: true
    },
    {
      label: 'Email Adresiniz',
      type: 'email',
      key: 2,
      name: 'reply_to',
      message: 'Geçersiz email adresi',
      placeholder: 'Email adresinizi buraya yazınız.',
      required: true
    },
    {
      pattern: '^.{20,500}$',
      label: 'Mesajınız',
      type: 'textarea',
      key: 3,
      name: 'message',
      message: 'Mesajınız en az 20 en fazla 500 karakter olmalıdır.',
      placeholder: 'Mesajınızı buraya yazınız.',
      required: true
    }
  ];

export const Form = () => {
  const [formData, setFormData] = React.useState(emptyState),
    formDisabled = Object.entries(formData).some(([key, value]) => {
      const { pattern } = inputs.find(item => item.name === key),
        isValid = new RegExp(pattern, 'g').test(value);
      return !value || !isValid;

    }),

    handleChange = e => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },

    handleSubmit = e => {
      e.preventDefault();
      if (Object.values(formData).some(item => !item))
        return;
      else
        emailjs.send(
          process.env.GATSBY_FORM_SERVICE_ID, process.env.GATSBY_FORM_TEMPLATE_ID, formData, process.env.GATSBY_FORM_PUBLIC_KEY
        ).then(() => {
          window.alert('Mesajınız gönderildi.');
          setFormData(emptyState);
        }).then(() => navigate('/'))
          .catch(error => window.alert(error));
    };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>İletişime Geçin</h2>
      {inputs.map(input => (
        <FormInput changeData={handleChange} key={input.key} {...input} value={formData[input.name]} />
      ))}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <button disabled={formDisabled} className='more-btn' type='submit'>Submit</button>
    </form>
  );
};
