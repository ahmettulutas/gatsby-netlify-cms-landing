import React from 'react';

const FormInput = props => {
  const { message, changeData, label, type, ...inputProps } = props,
    [focused, setFocused] = React.useState(false);

  return (
    <div className='form-item'>
      <label>{label}</label>
      {type !== 'textarea' ?
        <div className='input-container'>
          <input
            {...inputProps}
            onChange={changeData}
            onBlur={() => setFocused(true)}
            // eslint-disable-next-line react/no-unknown-property
            focused={String(focused)}
            title={message}
          />
          <span>{message}</span>
        </div>
        :
        <div className='input-container'>
          <textarea
            rows={6}
            {...inputProps}
            onChange={changeData}
            onBlur={() => setFocused(true)}
            // eslint-disable-next-line react/no-unknown-property
            focused={String(focused)}
            title={message}
          />
          <span>{message}</span>
        </div>
      }

    </div>
  );
};
export default FormInput;
