import React from 'react';
import { IUser } from '../../widgets/form/form';

const User = ({ username, birthday, city, gender, src }: IUser) => {
  return (
    <div className="user">
      <img src={src} alt="avatar" style={{ maxWidth: '400px' }} />
      <div className="user__name">{username}</div>
      <div className="user__birthday">{birthday}</div>
      <div className="user__city">{city}</div>
      <div className="user__gender">{gender}</div>
    </div>
  );
};

export default User;
