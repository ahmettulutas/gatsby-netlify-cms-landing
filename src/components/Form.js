import React from 'react';
import FormInput from './FormInput.js';
import emailjs from 'emailjs-com';
/* import { navigate } from 'gatsby-link'; */
import { normalizeTurkishPhone } from '../utils/helpers.js';
import { contactInputs } from '../lib/constants';
import { Loading } from './Loading.js';

const emptyState = {
  name_surname: '',
  phone_number: '',
  message: ''
};


export const Form = () => {
  const [formData, setFormData] = React.useState(emptyState),
    [loading, setLoading] = React.useState(false),
    checkInputsValid = Object.entries(formData).some(([key, value]) => {
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
      if (Object.values(formData).some(item => !item)) {
        return;
      }
      else {
        setLoading(true);
        emailjs.send(
          process.env.GATSBY_FORM_SERVICE_ID, process.env.GATSBY_FORM_TEMPLATE_ID, formData, process.env.GATSBY_FORM_PUBLIC_KEY
        ).then(() => {
          setLoading(false);
          window.alert('Mesajınız gönderildi.');
          setFormData(emptyState);
        })/* .then(() => navigate('/')) */
          .catch(error => window.alert(error));
      }
    };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {contactInputs.map(input => (
        <FormInput changeData={handleChange} key={input.key} {...input} value={formData[input.name]} />
      ))}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <button disabled={checkInputsValid} className="submit-button" type='submit'>{loading ? <Loading type="white" size="small"/> : 'Gönder'}</button>
    </form>
  );
};
