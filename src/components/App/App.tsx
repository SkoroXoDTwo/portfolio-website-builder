import './App.scss';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Projects from '../../pages/Projects';
import About from '../../pages/About';
import Technologies from '../../pages/Technologies';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </div>
  );
}

export default App;
