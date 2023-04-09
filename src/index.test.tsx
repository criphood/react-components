import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './app/App';

describe('Root', () => {
  it('root', async () => {
    render(
      <div id="root" data-testid="root">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    );
    const root = screen.getByTestId('root');
    expect(root).toBeInTheDocument();
  });
});
