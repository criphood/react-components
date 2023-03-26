import FormsPage from './forms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('123', () => {
  beforeEach(() => render(<FormsPage />));
  it('should be input on page', () => {
    const name = screen.getByPlaceholderText(/input/i);
    expect(name).toBeInTheDocument();
  });
  it('should be input on page', async () => {
    const handleSubmit = jest.fn();
    const button = screen.getByText('Submit');
    await userEvent.click(button);
    expect(handleSubmit).toBeCalledTimes(0);
  });
});
