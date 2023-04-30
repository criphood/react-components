import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import { store } from './processes/store/index';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.scss';

function entryClient(store: Store) {
  ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

entryClient(store);
