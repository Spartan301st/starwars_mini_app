import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

import { CharactersProvider } from './contexts/characters.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
