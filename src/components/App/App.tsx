import './App.scss';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Project from '../../pages/Project';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
