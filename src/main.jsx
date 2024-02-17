import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import './styles/styleGlobal.css';

import { FlipCardsProvider } from './utils/Context/useFlipCards';

import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlipCardsProvider>
      <Home></Home>
    </FlipCardsProvider>
  </React.StrictMode>,
);
