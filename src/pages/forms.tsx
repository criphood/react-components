import React, { Component } from 'react';
import Form from '../widgets/form-component/form';
import User from '../widgets/user/user-card';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

class FormsPage extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="form__wrapper">
        <Form />
        <User />
      </div>
    );
  }
}

export default FormsPage;
