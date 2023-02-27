import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

type Props = {
  logoTitle: string;
}

const Header: FunctionComponent<Props> = ({ logoTitle }) => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  const [isActiveEditLogoMode, setIsActiveEditLogoMode] = useState<boolean>(false);

  const handleToggleOpenedMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  }

  return (
    <header className="header">
      {isActiveEditLogoMode
        ?
        <div className='header__logo-edit-container'>
          <input className='header__input-logo' />
          <button className='header__save-btn' onClick={() => setIsActiveEditLogoMode(false)} />
        </div>

        :
        <div className='header__logo-container'>
          <h1 className='header__logo'>{logoTitle}</h1>
          <button className='header__edit-btn' onClick={() => setIsActiveEditLogoMode(true)} />
        </div>
      }



      <nav className={`header__menu ${isOpenedMenu ? 'header__menu_visible' : ''}`}>
        <ul className='header__menu-list'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                (`header__menu-link ${isActive ? "header__menu-link_active" : ''}`)
              }
            >
              Проекты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                (`header__menu-link ${isActive ? "header__menu-link_active" : ''}`)
              }
            >
              Обо мне
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                (`header__menu-link ${isActive ? "header__menu-link_active" : ''}`)
              }
            >
              Технологии
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='header__exit-btn-container'>
        <button className={`header__exit-btn ${isOpenedMenu ? 'header__exit-btn_visible' : ''}`}>
          Выйти
        </button>
      </div>


      <button
        className={`header__burger-btn ${isOpenedMenu ? 'header__burger-btn_close' : ''}`}
        onClick={handleToggleOpenedMenu}
      />
    </header>
  );
}

export default Header;
