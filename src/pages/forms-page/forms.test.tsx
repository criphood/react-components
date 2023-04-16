import FormsPage from './forms';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { store } from '../../processes/store/index';
import { Provider } from 'react-redux';

describe('123', () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <FormsPage />
      </Provider>
    )
  );
  it('should be input on page', () => {
    const name = screen.getByText(/name/i);
    expect(name).toBeInTheDocument();
  });
  it('should be input on page', async () => {
    const handleSubmit = jest.fn();
    const button = screen.getByText('Submit');
    await userEvent.click(button);
    expect(handleSubmit).toBeCalledTimes(0);
  });
});
