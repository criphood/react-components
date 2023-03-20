import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import React from 'react';
import './index.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
