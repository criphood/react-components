import React, { RefObject, useRef, useState } from 'react';
import User from '../user/user-card';
import { useForm, SubmitHandler } from 'react-hook-form';
import { OutlinedInput, Select, MenuItem } from '@mui/material';

interface IUser {
  username: string;
  birthday: string;
  city: string;
  gender: string;
  src: string;
  consent: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();

  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<string>('');
  const [avatarURL, setAvatarURL] = useState<string>('');
  const [users] = useState<IUser[]>([]);

  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (maleRef) {
      data.gender = maleRef.current?.checked ? 'Male' : 'Female';
    }

    data.src = avatarURL;
    alert('Data has been received!');
    users.push(data);
    reset();
  };
  const setGender = (
    e: { target: { checked: boolean } },
    opposite: RefObject<HTMLInputElement>
  ) => {
    e.target.checked = true;
    if (opposite.current) {
      opposite.current.checked = false;
    }
  };

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="name">Name:</label>
        <OutlinedInput
          id="name"
          type="text"
          {...register('username', {
            required: 'This field is required',
            validate: (value) =>
              value.slice(0, 1) === value.slice(0, 1).toUpperCase() || 'Capitalize your name',
          })}
        />
        <div className="error__container">
          {errors.username && <span>{errors.username.message}</span>}
        </div>

        <label htmlFor="birthday">Birthday:</label>
        <OutlinedInput
          id="birthday"
          type="date"
          {...register('birthday', {
            required: 'This field is required',
          })}
        />
        <div className="error__container">
          {errors.birthday && <span>{errors.birthday.message}</span>}
        </div>

        <label htmlFor="city">Favorite City</label>
        <Select
          id="city"
          label="City"
          defaultValue=""
          {...register('city', {
            required: 'This field is required',
          })}
        >
          <MenuItem value={'Moscow'}>Moscow</MenuItem>
          <MenuItem value={'Kazan'}>Kazan</MenuItem>
          <MenuItem value={'Saint-Petersburg'}>Saint-Petersburg</MenuItem>
          <MenuItem value={'Minsk'}>Minsk</MenuItem>
        </Select>
        <div className="error__container">{errors.city && <span>{errors.city.message}</span>}</div>

        <div className="container__genders">
          <label htmlFor="gender">Gender:</label>
          <div
            className="genders"
            {...register('gender', {
              validate: () =>
                maleRef.current?.checked || femaleRef.current?.checked || 'Choose your gender',
            })}
          >
            <input type="radio" ref={maleRef} onChange={(e) => setGender(e, femaleRef)} />
            <span>Male</span>
            <input type="radio" ref={femaleRef} onChange={(e) => setGender(e, maleRef)} />
            <span>Female</span>
          </div>
        </div>
        <div className="error__container">
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>

        <div className="input__container avatar__container">
          <label htmlFor="avatar">Avatar:</label>
          <label className="avatar__label">
            <input
              type="file"
              id="avatar"
              {...register('src', {
                required: 'Upload your photo',
              })}
              onChange={(e) => {
                if (e.target.files) {
                  const blob = URL.createObjectURL(e.target.files[0]);
                  setAvatar(e.target.files[0].name);
                  setAvatarURL(blob);
                }
              }}
            />
            Upload image
          </label>
          <span className="file__name">{avatar}</span>
        </div>
        <div className="error__container">{errors.src && <span>{errors.src.message}</span>}</div>

        <div className="input__container">
          <input
            id="consent"
            type="checkbox"
            {...register('consent', {
              required: 'Сonsent to the processing of your data',
            })}
          />
          <label htmlFor="consent">I consent to my personal data</label>
        </div>
        <div className="error__container">
          {errors.consent && <span>{errors.consent.message}</span>}
        </div>

        <input type="submit" value="Submit" />
      </form>

      <User users={users} />
    </div>
  );
};

export default Form;
