import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React, { useState as useStateMock } from 'react';
import Modal from './modal-window';
import { Provider } from 'react-redux';
import { store } from '../../processes/store/index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Modal', () => {
  const setState = jest.fn();
  it('modal', () => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal active={true} setModalActive={setState} />
        </BrowserRouter>
      </Provider>
    );

    setTimeout(async () => {
      const name = screen.getByText(/Author/i);
      expect(name).toBeInTheDocument();
      const modal = screen.getByTestId('modal');
      await userEvent.click(modal);
      expect(modal).not.toBeInTheDocument();
    }, 2000);
  });
});
