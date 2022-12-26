import React from 'react';
import FormInput from './FormInput.js';
import emailjs from 'emailjs-com';
import { navigate } from 'gatsby-link';
import { normalizeTurkishPhone } from '../utils/helpers.js';
import { contactInputs } from '../lib/constants';
const emptyState = {
  name_surname: '',
  phone_number: '',
  message: ''
};


export const Form = ({ title }) => {
  const [formData, setFormData] = React.useState(emptyState),
    formDisabled = Object.entries(formData).some(([key, value]) => {
      const { pattern } = contactInputs.find(item => item.name === key),
        isValid = new RegExp(pattern, 'g').test(value);
      return !value || !isValid;

    }),

    handleChange = e => {
      const { name, value } = e.target;
      if (name === 'phone_number')
        setFormData({ ...formData, [name]: normalizeTurkishPhone(value) });
      else setFormData({ ...formData, [name]: value });
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
      <h2 className='title is-2 is-capitalized has-text-centered'>{title}</h2>
      {contactInputs.map(input => (
        <FormInput changeData={handleChange} key={input.key} {...input} value={formData[input.name]} />
      ))}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <button disabled={formDisabled} className='more-btn' type='submit'>Gönder</button>
    </form>
  );
};
