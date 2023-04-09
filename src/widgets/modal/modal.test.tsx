import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React, { useState as useStateMock } from 'react';
import Modal from './modal-window';

const card = {
  id: '3ZUsNJhi_Ik',
  created_at: '2017-08-22T04:40:30Z',
  description: 'High Roller',
  alt_description: 'running black Porsche sedan',
  urls: {
    raw: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=Mnw0MzE3ODV8MHwxfGFsbHx8fHx8fHx8fDE2ODEwNjgyODA&ixlib=rb-4.0.3',
    full: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfGFsbHx8fHx8fHx8fDE2ODEwNjgyODA&ixlib=rb-4.0.3&q=85',
    regular:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfGFsbHx8fHx8fHx8fDE2ODEwNjgyODA&ixlib=rb-4.0.3&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfGFsbHx8fHx8fHx8fDE2ODEwNjgyODA&ixlib=rb-4.0.3&q=80&w=400',
    thumb:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE3ODV8MHwxfGFsbHx8fHx8fHx8fDE2ODEwNjgyODA&ixlib=rb-4.0.3&q=80&w=200',
    small_s3:
      'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1503376780353-7e6692767b70',
  },
  likes: 1666,
  user: {
    username: 'campful',
    name: 'Campbell',
    profile_image: {
      small:
        'https://images.unsplash.com/profile-1503375899598-b417cf704ce4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
    },
  },
  tags: [
    {
      type: 'landing_page',
      title: 'car',
    },
    {
      type: 'landing_page',
      title: 'black',
    },
    {
      type: 'search',
      title: 'tulsa',
    },
    {
      type: 'search',
      title: 'sports car',
    },
    {
      type: 'search',
      title: 'auto',
    },
    {
      type: 'search',
      title: 'street',
    },
    {
      type: 'landing_page',
      title: 'dark',
    },
    {
      type: 'search',
      title: 'wing',
    },
    {
      type: 'search',
      title: 'photography',
    },
    {
      type: 'search',
      title: 'stance',
    },
    {
      type: 'search',
      title: 'panamera',
    },
    {
      type: 'search',
      title: 'car porn',
    },
    {
      type: 'search',
      title: 'bagged',
    },
    {
      type: 'search',
      title: 'turbo',
    },
    {
      type: 'search',
      title: 'luxury',
    },
    {
      type: 'landing_page',
      title: 'wallpaper',
    },
    {
      type: 'search',
      title: 'automobile',
    },
    {
      type: 'search',
      title: 'coupe',
    },
    {
      type: 'search',
      title: 'transportation',
    },
    {
      type: 'search',
      title: 'sedan',
    },
  ],
};

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
        <Modal active={false} setActive={setState} activeCard={card} setActiveCard={setState} />
      </BrowserRouter>
    );
    const name = screen.getByText(/Author/i);
    await userEvent.click(name);
    expect(name).toBeInTheDocument();
  });
});
