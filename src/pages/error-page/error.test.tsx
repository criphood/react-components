import Error from './error';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('123', () => {
  beforeEach(() => render(<Error />));
  it('should be message on page', () => {
    const name = screen.getByText(/page/i);
    expect(name).toBeInTheDocument();
  });
});
