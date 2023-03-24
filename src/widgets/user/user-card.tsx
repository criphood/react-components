import React from 'react';
import Form from '../form-component/form';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

class User extends Form {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <div></div>;
  }
}
export default User;
