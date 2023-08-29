import { FC } from 'react';
import './HeaderAuth.scss';

const HeaderAuth: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Portfolio-Constructor</h1>
      <button className="header__btn-auth">Регистрация</button>
    </header>
  );
};

export default HeaderAuth;
