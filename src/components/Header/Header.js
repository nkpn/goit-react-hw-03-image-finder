import React from 'react';
import style from './Header.module.css';
import { ReactComponent as MyIcon } from '../../images/pixabay-logo.svg';

const Header = () => {
  return (
    <>
      <header className={style.PageHeader}>
        <div className={style.Container}>
          <ul className={style.MainNav}>
            <MyIcon
              className={style.logo}
              src="./images/pixabay-logo.svg"
              alt="pixabay-logo"
              width="35"
              height="35"
            ></MyIcon>
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
