import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './vendor/normalize.scss';
import './vendor/fonts.scss';
import './index.scss';
import { HashRouter } from 'react-router-dom';

import App from './components/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
