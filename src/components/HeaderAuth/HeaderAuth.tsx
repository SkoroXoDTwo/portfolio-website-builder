import { FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderAuth.scss';

type Props = {
}

const HeaderAuth: FunctionComponent<Props> = () => {
  return (
    <header className="header">
      <h1 className='header__logo'>Portfolio-Constructor</h1>

      <button
        className={`header__btn-auth`}
      />
    </header>
  );
}

export default HeaderAuth;
