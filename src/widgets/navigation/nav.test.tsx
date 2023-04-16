import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../../app/App';
import { Provider } from 'react-redux';
import { store } from '../../processes/store/index';

describe('Navigation', () => {
  it('should be navigation elements at header', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const name = screen.getByText(/About/i);
    expect(name).toBeInTheDocument();
  });
});
