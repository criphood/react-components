import React from 'react';
import { IUsers } from '../form/form';
import User from '../../entities/user/user';
import { useSelector } from 'react-redux';

const Users = () => {
  const users = useSelector((state: IUsers) => state.users.users);
  if (users.length > 0) {
    return (
      <div className="users__wrapper" data-testid="users">
        {users.map(({ username, birthday, city, gender, src }, i) => {
          return (
            <User
              birthday={birthday}
              username={username}
              city={city}
              gender={gender}
              src={src}
              key={i}
              consent={''}
            />
          );
        })}
      </div>
    );
  }
  return <div></div>;
};

export default Users;
