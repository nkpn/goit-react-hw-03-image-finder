import React from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ SubmitFn }) => {
  return (
    <>
      <section className={style.Searchbar}>
        <form className={style.SearchForm}>
          <input
            className={style.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Поиск картинок"
          />
          <button
            type="submit"
            className={style.SearchFormButton}
            onClick={SubmitFn}
          >
            Поиск
          </button>
        </form>
      </section>
    </>
  );
};

export default Searchbar;
