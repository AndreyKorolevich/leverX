import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children, className, type, disabled, onClick,
}) {
  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  type: 'submit',
  disabled: false,
};

export default Button;
