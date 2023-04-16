import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './processes/store/index';
import React from 'react';

describe('Root', () => {
  it('root', async () => {
    render(
      <div id="root" data-testid="root">
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </div>
    );

    expect(screen.getByTestId('root')).toBeInTheDocument();
  });
});
