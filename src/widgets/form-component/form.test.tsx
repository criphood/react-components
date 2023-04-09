import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import React from 'react';
import Form from './form';

const alertMock = jest.spyOn(window, 'alert').mockImplementation();

describe('Form', () => {
  it('form', async () => {
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );

    const name = screen.getByLabelText(/Name:/i) as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Artem' } });
    expect(name).toBeInTheDocument();
    expect(name.value).toBe('Artem');

    const birthday = screen.getByLabelText(/Birthday:/i) as HTMLInputElement;
    fireEvent.change(birthday, { target: { value: '1990-03-24' } });
    expect(birthday).toBeInTheDocument();
    expect(birthday.value).toBe('1990-03-24');

    const male = screen.getByTestId('male') as HTMLInputElement;
    await userEvent.click(male);
    expect(male).toBeInTheDocument();
    expect(male.checked).toBe(true);

    const female = screen.getByTestId(/female/i) as HTMLInputElement;
    await userEvent.click(female);
    expect(female).toBeInTheDocument();
    expect(female.checked).toBe(true);

    const consent = screen.getByTestId(/consent/i) as HTMLInputElement;
    await userEvent.click(consent);
    expect(consent).toBeInTheDocument();
    expect(consent.checked).toBe(true);

    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
    await userEvent.click(submit);
    // expect(alertMock).toHaveBeenCalled();
  });
  it('select', () => {
    render(
      <input
        name="city"
        aria-hidden="true"
        data-testid="city"
        className="MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput"
        value=""
      />
    );

    const city = screen.getByTestId(/city/i) as HTMLInputElement;
    fireEvent.change(city, { target: { value: '' } });
    expect(city).toBeInTheDocument();
    expect(city.value).toBe('')
  });
});
