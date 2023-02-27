import { FunctionComponent } from 'react';
import Header from '../components/Header/Header';
import Main from "../components/Main/Main"
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Projects: FunctionComponent = () => {
  return (
    <>
      <Header logoTitle='belkov' />
      <Main>
        <ProjectsList>

        </ProjectsList>
      </Main>
    </>
  );
}

export default Projects;
