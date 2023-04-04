import { FunctionComponent } from 'react';
import HeaderAuth from '../components/HeaderAuth/HeaderAuth';
import Main from '../components/Main/Main';
import SigninForm from '../components/SigninForm/SigninForm';

const Signin: FunctionComponent = () => {
  return (
    <>
      <HeaderAuth />
      <Main>
        <SigninForm />
      </Main>
    </>
  );
}

export default Signin;
