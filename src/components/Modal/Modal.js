import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const Modal = () => {
  return (
    <>
      <div className={style.Overlay}>
        <div className={style.Modal}></div>
      </div>
    </>
  );
};

export default Modal;
