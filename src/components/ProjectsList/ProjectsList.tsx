import { FunctionComponent, PropsWithChildren } from 'react';
import './Header.scss';

const ProjectsList: FunctionComponent<PropsWithChildren> = () => {


  return (
    <section className="projects-list">
      <h2 className='projects-list__title'>
        Мои проекты
      </h2>
    </section>
  );
}

export default ProjectsList;
