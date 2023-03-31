import About from './about';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('123', () => {
  beforeEach(() => render(<About />));
  it('should be message on page', () => {
    const name = screen.getByText(/Lorem/i);
    expect(name).toBeInTheDocument();
  });
});
