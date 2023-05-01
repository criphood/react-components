// import Cards from './cards';
import Main from '../../pages/main-page/main';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { store } from '../../processes/store/index';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

describe('test api', () => {
  it('should return first item', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    await waitFor(async () => {
      const card = screen.getByTestId('0');
      expect(card).toBeInTheDocument();
      await userEvent.click(card);
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
      const name = screen.getByText(/Author/i);
      expect(name).toBeInTheDocument();
      const content = screen.getByTestId('modal__content');
      expect(content).toBeInTheDocument();
      await userEvent.click(modal);
    });
  });
});
