import React from 'react';

const FormInput = props => {
  const { message, changeData, label, type, ...inputProps } = props,
    [focused, setFocused] = React.useState(false);

  return (
    <div className="form-item">
      <label>{label}</label>
      {
        type !== 'textarea' ?
          <input
            {...inputProps}
            onChange={changeData}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            // eslint-disable-next-line react/no-unknown-property
            focused={String(focused)}
          />
          :
          <textarea
            rows={6}
            {...inputProps}
            onChange={changeData}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            // eslint-disable-next-line react/no-unknown-property
            focused={String(focused)}
          />

      }
      <span>{message}</span>
    </div>
  );
};
export default FormInput;
