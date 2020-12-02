import React from 'react';
import PropTypes from "prop-types";

function Avatar({ avatar, className }) {
  return (
    <img className={className}
         src={avatar} alt='avatar'/>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  avatar: 'https://woodsoft.com.ua/images/no-avatar.png',
  className: '',
};

export default Avatar;
