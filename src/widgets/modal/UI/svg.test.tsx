import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React, { useState as useStateMock } from 'react';
import Svg from './svg';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Navigation', () => {
  const setState = jest.fn();
  it('should be navigation elements at header', async () => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
    render(
      <BrowserRouter>
        <Svg setActive={setState} />
      </BrowserRouter>
    );
    const name = screen.getByTestId('custom-element');
    await userEvent.click(name);
    expect(name).toBeInTheDocument();
  });
});
