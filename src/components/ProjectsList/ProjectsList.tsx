import { FunctionComponent, PropsWithChildren } from 'react';
import './ProjectsList.scss';

const ProjectsList: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <section className="projects-list">
      <h2 className="projects-list__title">Мои проекты</h2>

      <ul className="projects-list__items">{children}</ul>
    </section>
  );
};

export default ProjectsList;
