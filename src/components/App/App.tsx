import './App.scss';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Projects from '../../pages/Projects';
import About from '../../pages/About';
import Technologies from '../../pages/Technologies';
import Signin from '../../pages/Signin';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </div>
  );
}

export default App;
