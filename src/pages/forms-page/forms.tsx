import Form from '../../widgets/form/form';
import Users from '../../widgets/all-users/users';
import React from 'react';

const Forms = () => {
  return (
    <div className="form__wrapper">
      <Form />
      <h1>Users</h1>
      <Users />
    </div>
  );
};

export default Forms;
