import React from 'react';
import PropTypes from "prop-types";

function Input({className, onChange, label, placeholder, value, name, type, children}){
  // const onChangeInput = (value) => {
  //   if (onChange) {
  //     onChange(value);
  //   }
  // };

  return (
    <div className={className}>
      {label && <label className='label'>{label}{children}</label>}
      <input onChange={(event) => onChange(event.target.value)} type={type} className='input'
             placeholder={placeholder} value={value} name={name}/>
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  children: null,
  onChange: () => {},
  className: '',
  label: '',
  placeholder: '',
  value: '',
  name: '',
  type: 'text',
};

export default Input;
