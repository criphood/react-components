import React, { Component } from 'react';

interface IUser {
  username: string;
  birthday: string;
  city: string;
  gender: string;
}

interface IProps {
  users: IUser[];
}

class User extends Component<IProps, object> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidUpdate() {
    this.render();
  }

  render() {
    const users = this.props.users;

    if (users.length > 0) {
      return users.map(({ username, birthday, city, gender }, i) => {
        return (
          <div key={i} className="user">
            <div className="user__name">{username}</div>
            <div className="user__birthday">{birthday}</div>
            <div className="user__city">{city}</div>
            <div className="user__gender">{gender}</div>
          </div>
        );
      });
    }
  }
}
export default User;
