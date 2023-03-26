import React, { Component } from 'react';
import Form from '../widgets/form-component/form';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

class FormsPage extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default FormsPage;
