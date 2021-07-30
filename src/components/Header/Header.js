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
              <p className={style.MainNavText}>Главная страница</p>
            </li>
            <li className={style.MainNavItem}>
              <p className={style.MainNavText}>Фото</p>
            </li>
            <li className={style.MainNavItem}>
              <p className={style.MainNavText}>О нас</p>
            </li>
            <li className={style.MainNavLastItem}>
              <p className={style.MainNavText}>Личный кабинет</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
