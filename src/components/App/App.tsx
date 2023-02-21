import './App.scss';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Project from '../../pages/Project';
import About from '../../pages/About';
import Technologies from '../../pages/Technologies';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </div>
  );
}

export default App;
