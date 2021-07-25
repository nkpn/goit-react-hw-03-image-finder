import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={style.PageHeader}>
        <div className={style.Container}>
          <ul className={style.MainNav}>
            <li className={style.MainNavItem}>
              <a href="#" className={style.MainNavLink}>
                Главная страница
              </a>
            </li>
            <li className={style.MainNavItem}>
              <a href="#" className={style.MainNavLink}>
                Фото
              </a>
            </li>
            <li className={style.MainNavItem}>
              <a href="#" className={style.MainNavLink}>
                О нас
              </a>
            </li>
            <li className={style.MainNavLastItem}>
              <a href="#" className={style.MainNavLink}>
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
