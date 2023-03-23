import React, { Component } from 'react';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

class Form extends Component {
  nameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  cityRef: React.RefObject<HTMLSelectElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  consentRef: React.RefObject<HTMLInputElement>;
  submitRef: React.RefObject<HTMLButtonElement>;
  state: {
    nameError: boolean;
    genderError: boolean;
    consentError: boolean;
  };

  constructor(props: IProps) {
    super(props);
    this.nameRef = React.createRef();
    this.dateRef = React.createRef();
    this.cityRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.consentRef = React.createRef();
    this.submitRef = React.createRef();
    this.state = {
      nameError: false,
      genderError: false,
      consentError: false,
    };
  }

  validateForm() {
    const name = this.nameRef.current?.value;
    if (name?.slice(0, 1).toUpperCase() !== name?.slice(0, 1) || !name) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }

    if (!this.maleRef.current?.checked && !this.femaleRef.current?.checked) {
      this.setState({ genderError: true });
    } else {
      this.setState({ genderError: false });
    }

    if (!this.consentRef.current?.checked) {
      this.setState({ consentError: true });
    } else {
      this.setState({ consentError: false });
    }

    Object.values(this.state).map((value: boolean) => {
      if (this.submitRef.current) {
        if (value) {
          this.submitRef.current.disabled = false;
        } else {
          this.submitRef.current.disabled = true;
        }
      }
    });
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    this.validateForm();

    console.log(this.maleRef.current?.checked);

    // console.log(this.dateRef.current?.value);
    // console.log(this.cityRef.current?.value);
    // console.log(this.state.gender);
    // console.log(this.state.consent);
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

        <div className="field">
          <div className="input__container">
            <label htmlFor="username">Name:</label>
            <input ref={this.nameRef} type="text" id="username" />
          </div>
          {this.state.nameError && <span className="error">Capitalize your name</span>}
        </div>

        <div className="field">
          <div className="input__container">
            <label htmlFor="date">Birthday:</label>
            <input ref={this.dateRef} type="date" id="date" />
          </div>
        </div>

        <div className="field">
          <div className="input__container">
            <label htmlFor="city">City:</label>
            <select ref={this.cityRef} defaultValue="Moscow" id="city">
              <option>Moscow</option>
              <option>Kazan</option>
              <option>Minsk</option>
            </select>
          </div>
        </div>

        <div className="field">
          <div className="input__container">
            <label htmlFor="genders">Your gender:</label>
            <div id="genders">
              <input ref={this.maleRef} type="radio" id="Male" name="gender" />
              <label htmlFor="Male">Male</label>

              <input ref={this.femaleRef} type="radio" id="Female" name="gender" />
              <label htmlFor="Female">Female</label>
            </div>
          </div>

          {this.state.genderError && <span className="error">Choose your gender</span>}
        </div>

        <div className="field">
          <div className="container__input">
            <label htmlFor="file">Avatar</label>
            <input type="file" id="file" />
          </div>
        </div>

        <div className="field">
          <div className="input__container">
            <input id="checkbox" type="checkbox" ref={this.consentRef} />
            <label htmlFor="checkbox">I consent to my personal data</label>
          </div>

          {this.state.consentError && <span className="error">Accept our policy</span>}
        </div>

        <button type="submit" onClick={(e) => this.handleSubmit(e)} ref={this.submitRef}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
