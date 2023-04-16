import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import User from './user';
import { store } from '../../processes/store/index';
import { Provider } from 'react-redux';

const user = {
  username: 'Alex',
  birthday: '04-23-1997',
  city: 'Moscow',
  gender: 'Male',
  src: 'blob:http://localhost:5173/93b1bc82-7c0d-4d6f-a4e7-c9525b1dbc7d',
};

describe('test render main page', () => {
  it('should be input on page', async () => {
    render(
      <Provider store={store}>
        <User
          username={user.username}
          birthday={user.birthday}
          city={user.city}
          gender={user.gender}
          src={user.src}
          consent=""
        />
      </Provider>
    );
    const search = screen.getByText(/Alex/i);
    expect(search).toBeInTheDocument();
  });
});
