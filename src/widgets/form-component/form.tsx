import React, { Component } from 'react';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

class Form extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <label>
          Name:
          <input type="text" />
        </label>

        <label>
          Date:
          <input type="date" />
        </label>

        <label>
          City:
          <select name="city">
            <option selected>Moscow</option>
            <option selected>Kazan</option>
            <option selected>Minsk</option>
          </select>
        </label>

        <label>
          I consent to my personal data
          <input type="checkbox" />
        </label>

        <label>
          Male
          <input type="radio" />
          Female:
          <input type="radio" />
        </label>

        <label>
          Upload avatar
          <input type="file" />
        </label>
      </form>
    );
  }
}

export default Form;
