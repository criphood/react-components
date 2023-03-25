import React, { Component } from 'react';
import User from '../user/user-card';

interface IProps {
  handle: (e: React.MouseEvent) => void;
}

interface IUser {
  username: string;
  birthday: string;
  city: string;
  gender: string;
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
    dateError: boolean;
    cityError: boolean;
    genderError: boolean;
    consentError: boolean;
    users: IUser[];
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
      dateError: false,
      cityError: false,
      genderError: false,
      consentError: false,
      users: [],
    };
  }

  validateForm() {
    const user: IUser = {
      username: '',
      birthday: '',
      city: '',
      gender: '',
    };
    const name = this.nameRef.current?.value;
    const gender = this.setGender();

    if (name?.slice(0, 1).toUpperCase() !== name?.slice(0, 1) || !name) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
      user.username = name;
    }

    if (!this.dateRef.current?.value) {
      this.setState({ dateError: true });
    } else {
      this.setState({ dateError: false });
      user.birthday = this.dateRef.current.value;
    }

    if (!this.cityRef.current?.value) {
      this.setState({ cityError: true });
    } else {
      this.setState({ cityError: false });
      user.city = this.cityRef.current.value;
    }

    if (!this.maleRef.current?.checked && !this.femaleRef.current?.checked) {
      this.setState({ genderError: true });
    } else {
      this.setState({ genderError: false });
      if (gender) user.gender = gender;
    }

    if (!this.consentRef.current?.checked) {
      this.setState({ consentError: true });
    } else {
      this.setState({ consentError: false });
      if (!Object.values(user).some((value) => !value)) {
        const copy = Object.assign([], this.state.users);
        copy.push(user);
        this.setState({ users: copy });
      }
    }
  }

  checkForErrors() {
    return Object.values(this.state)
      .slice(0, -1)
      .some((value) => value);
  }

  setGender() {
    if (this.maleRef.current && this.maleRef.current.checked) return this.maleRef.current.id;
    if (this.femaleRef.current && this.femaleRef.current.checked) return this.femaleRef.current.id;
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.validateForm();
  }

  render() {
    return (
      <div className="div__wrapper">
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
            {this.state.dateError && <span className="error">Enter birthday</span>}
          </div>

          <div className="field">
            <div className="input__container">
              <label htmlFor="city">City:</label>
              <select ref={this.cityRef} defaultValue={''} id="city">
                <option disabled value="">
                  Choose favorite city
                </option>
                <option>Moscow</option>
                <option>Kazan</option>
                <option>Minsk</option>
              </select>
            </div>
            {this.state.cityError && <span className="error">Choose your favorite city</span>}
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

        <User users={this.state.users} />
      </div>
    );
  }
}

export default Form;
