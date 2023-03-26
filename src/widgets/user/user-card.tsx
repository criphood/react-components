import React, { Component } from 'react';

interface IUser {
  username: string;
  birthday: string;
  city: string;
  gender: string;
  src: string;
}

interface IProps {
  users: IUser[];
}

class User extends Component<IProps, object> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const users = this.props.users;

    if (users.length > 0) {
      return (
        <div>
          <h1>Users</h1>
          <div className="users__wrapper">
            {users.map(({ username, birthday, city, gender, src }, i) => {
              return (
                <div key={i} className="user">
                  <img src={src} alt="avatar" style={{ maxWidth: '400px' }} />
                  <div className="user__name">{username}</div>
                  <div className="user__birthday">{birthday}</div>
                  <div className="user__city">{city}</div>
                  <div className="user__gender">{gender}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default User;
