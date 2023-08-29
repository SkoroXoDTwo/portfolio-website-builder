import { FunctionComponent } from 'react';

import AddProjectBtn from '../components/AddProjectBtn/AddProjectBtn';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Projects: FunctionComponent = () => {
  return (
    <>
      <Header logoTitle="belkov" />
      <Main>
        <ProjectsList>
          <AddProjectBtn />
        </ProjectsList>
      </Main>
    </>
  );
};

export default Projects;
