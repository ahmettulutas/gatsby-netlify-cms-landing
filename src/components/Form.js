import React from 'react';
import FormInput from './FormInput.js';
import emailjs from 'emailjs-com';
/* import { normalizeTurkishPhone } from '../utils/helpers.js'; */
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
    handleChange = e => {
      const { name, value } = e.target;
      /* if (name === 'phone_number')
        setFormData({ ...formData, [name]: normalizeTurkishPhone(value) });
      else */ setFormData({ ...formData, [name]: value });
    },

    handleSubmit = e => {
      e.preventDefault();
      if (Object.values(formData).some(item => !item)) {
        return;
      }
      else {
        setLoading(true);
        emailjs.send(process.env.GATSBY_FORM_SERVICE_ID, process.env.GATSBY_FORM_TEMPLATE_ID, process.env.GATSBY_FORM_PUBLIC_KEY, formData
        ).then(() => {
          setLoading(false);
          window.alert('Mesajınız gönderildi.');
          setFormData(emptyState);
        }).catch(error => window.alert(error));
      }
    };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {contactInputs.map(input => (
        <FormInput changeData={handleChange} key={input.key} {...input} value={formData[input.name]} />
      ))}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <button disabled={loading} className="submit-button" type='submit'>{loading ? <Loading type="white" size="small"/> : 'Gönder'}</button>
    </form>
  );
};
