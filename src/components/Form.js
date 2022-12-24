import React from 'react';
import FormInput from './FormInput.js';
import emailjs from 'emailjs-com';

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
      message: 'Lütfen adınızı ve soyadınızı eksiksiz giriniz.'
    },
    {
      label: 'Email Adresiniz',
      type: 'email',
      key: 2,
      name: 'reply_to',
      message: 'Geçersiz email adresi'
    },
    {
      pattern: '^.{20,500}$',
      label: 'Mesajınız',
      type: 'textarea',
      key: 3,
      name: 'message',
      message: 'Mesajınız en az 20 en fazla 500 karakter olmalıdır.'
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
        }).catch(error => window.alert(error));
    };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {inputs.map(input => (
        <FormInput changeData={handleChange} key={input.key} {...input} value={formData[input.name]} />
      ))}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <button disabled={formDisabled} className='w-100 more-btn' type='submit'>Submit</button>
    </form>
  );
};
