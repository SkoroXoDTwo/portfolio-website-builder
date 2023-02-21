import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

type Props = {
  logoTitle: string;
}

const Header: FunctionComponent<Props> = ({ logoTitle }) => {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

  const handleToggleOpenedMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  }

  return (
    <header className="header">
      <h1 className='header__logo'>{logoTitle}</h1>

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

      <button className={`header__exit-btn ${isOpenedMenu ? 'header__exit-btn_visible' : ''}`}>
        Выйти
      </button>

      <button className='header__burger-btn' onClick={handleToggleOpenedMenu}>|||</button>
    </header>
  );
}

export default Header;
