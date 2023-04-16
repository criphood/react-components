import Cards from './cards';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { store } from '../../processes/store/index';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('test api', () => {
  it('should return first item', async () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    setTimeout(async () => {
      const card = screen.getByTestId('0');
      expect(card).toBeInTheDocument();
      await userEvent.click(card);
    }, 2000);
  });
});
