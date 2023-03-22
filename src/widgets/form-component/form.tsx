import React, { Component } from 'react';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

class Form extends Component {
  nameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  cityRef: React.RefObject<HTMLSelectElement>;
  state: {
    gender: string;
    consent: boolean;
  };

  constructor(props: IProps) {
    super(props);
    this.nameRef = React.createRef();
    this.dateRef = React.createRef();
    this.cityRef = React.createRef();
    this.state = {
      gender: 'Male',
      consent: false,
    };
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(this.nameRef.current?.value);
    console.log(this.dateRef.current?.value);
    console.log(this.cityRef.current?.value);
    console.log(this.state.gender);
    console.log(this.state.consent);
  }

  setGender(e: { target: { id: string } }) {
    this.setState({
      gender: e.target.id,
    });
  }

  setConsent(e: {
    target: {
      checked: boolean;
    };
  }) {
    this.setState({
      consent: e.target.checked,
    });
  }

  render() {
    return (
      <form className="form">
        <h1>Registration</h1>

        <label>
          Name:
          <input ref={this.nameRef} type="text" />
        </label>

        <label>
          Date:
          <input ref={this.dateRef} type="date" />
        </label>

        <label>
          City:
          <select ref={this.cityRef} defaultValue="Moscow">
            <option>Moscow</option>
            <option>Kazan</option>
            <option>Minsk</option>
          </select>
        </label>

        <label>
          Male
          <input
            type="radio"
            id="Male"
            checked={this.state.gender === 'Male'}
            onChange={this.setGender.bind(this)}
          />
        </label>

        <label>
          Female
          <input
            type="radio"
            id="Female"
            checked={this.state.gender === 'Female'}
            onChange={this.setGender.bind(this)}
          />
        </label>

        <label>
          Upload avatar
          <input type="file" />
        </label>

        <label>
          I consent to my personal data
          <input
            type="checkbox"
            checked={this.state.consent}
            onChange={this.setConsent.bind(this)}
          />
        </label>

        <button type="submit" onClick={(e) => this.handleSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
