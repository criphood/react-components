import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React, { useState as useStateMock } from 'react';
import { store } from '../../processes/store/index';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Search from './search';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('test search component', () => {
  const setState = jest.fn();

  it('should change input value', async () => {
    (useStateMock as jest.Mock).mockImplementation(() => ['', setState]);

    render(
      <Provider store={store}>
        <Search setQuery={setState} />
      </Provider>
    );
    const search = screen.getByPlaceholderText('Search...');
    await userEvent.type(search, 'car{enter}');
    expect(search).toBeInTheDocument();
  });
});
