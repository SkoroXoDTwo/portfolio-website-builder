import { FunctionComponent } from 'react';
import Main from '../components/Main/Main';
import SigninForm from '../components/SigninForm/SigninForm';

const Signin: FunctionComponent = () => {
  return (
    <>
      <Main>
        <SigninForm />
      </Main>
    </>
  );
}

export default Signin;
