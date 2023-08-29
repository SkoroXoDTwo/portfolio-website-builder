import { FunctionComponent, PropsWithChildren } from 'react';
import './SigninForm.scss';

const SigninForm: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <section className="signin">
      <form className="signin__form">
        <h2 className="signin__title">Авторизация</h2>
        <input className="signin__input" placeholder="email" type="email" />
        <input className="signin__input" placeholder="пароль" type="password" />
        <button className="signin__btn">Войти</button>
      </form>
    </section>
  );
};

export default SigninForm;
