import { FunctionComponent, PropsWithChildren } from 'react';
import './AddProjectBtn.scss';

const AddProjectBtn: FunctionComponent<PropsWithChildren> = () => {


  return (
    <li className='add-project'>
      <button className='add-project__btn'>
        <div className='add-project__icon' />
      </button>
    </li>
  );
}

export default AddProjectBtn;
