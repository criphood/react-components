import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../../app/App';

describe('Navigation', () => {
  it('should be navigation elements at header', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const name = screen.getByText(/About/i);
    expect(name).toBeInTheDocument();
  });
});
