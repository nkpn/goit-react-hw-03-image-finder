import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onLoadClick }) => {
  return (
    <button type="button" className={style.Button} onClick={onLoadClick}>
      Загрузить
    </button>
  );
};

export default Button;
