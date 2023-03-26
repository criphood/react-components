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
  src: string;
}

class Form extends Component {
  nameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  cityRef: React.RefObject<HTMLSelectElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  uploadRef: React.RefObject<HTMLInputElement>;
  consentRef: React.RefObject<HTMLInputElement>;
  submitRef: React.RefObject<HTMLButtonElement>;
  state: {
    nameError: boolean;
    dateError: boolean;
    cityError: boolean;
    genderError: boolean;
    uploadError: boolean;
    consentError: boolean;
    users: IUser[];
    file: string;
  };

  constructor(props: IProps) {
    super(props);
    this.nameRef = React.createRef();
    this.dateRef = React.createRef();
    this.cityRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.consentRef = React.createRef();
    this.uploadRef = React.createRef();
    this.submitRef = React.createRef();
    this.state = {
      nameError: false,
      dateError: false,
      cityError: false,
      genderError: false,
      uploadError: false,
      consentError: false,
      users: [],
      file: '',
    };
  }

  validateForm() {
    const user: IUser = {
      username: '',
      birthday: '',
      city: '',
      gender: '',
      src: '',
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

    if (this.uploadRef.current?.files && !this.uploadRef.current?.files[0]) {
      this.setState({ uploadError: true });
    } else {
      this.setState({ uploadError: false });
      const imgSrc = this.setImageSrc();
      if (imgSrc) user.src = imgSrc;
    }

    if (!this.consentRef.current?.checked) {
      this.setState({ consentError: true });
    } else {
      this.setState({ consentError: false });
      if (!Object.values(user).some((value) => !value)) {
        const copy = Object.assign([], this.state.users);
        copy.push(user);
        this.setState({ users: copy });
        alert('Data received seccessfully');
        this.clearForm();
      }
    }
  }

  clearForm() {
    if (
      this.nameRef.current &&
      this.dateRef.current &&
      this.cityRef.current &&
      this.maleRef.current &&
      this.femaleRef.current &&
      this.consentRef.current &&
      this.uploadRef.current?.files
    ) {
      this.nameRef.current.value = '';
      this.dateRef.current.value = '';
      this.cityRef.current.value = '';
      this.maleRef.current.checked = false;
      this.femaleRef.current.checked = false;
      this.consentRef.current.checked = false;
      this.uploadRef.current.value = '';
      this.setState({ file: '' });
    }
  }

  checkForErrors() {
    return Object.values(this.state)
      .slice(0, -2)
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

  setImageSrc() {
    if (this.uploadRef.current?.files) {
      const file = this.uploadRef.current?.files[0];
      if (file) {
        return URL.createObjectURL(file).toString();
      }
    }
  }

  render() {
    return (
      <div className="form__wrapper">
        <form className="form">
          <h1>Registration</h1>

          <div className="field">
            <div className="input__container">
              <label htmlFor="username">Name:</label>
              <input ref={this.nameRef} placeholder="input name" type="text" id="username" />
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
                  Choose your city
                </option>
                <option>Moscow</option>
                <option>Saint-Petersburg</option>
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
            <div className="input__container file__container">
              <label htmlFor="file">Avatar:</label>
              <label className="file__label">
                <input
                  type="file"
                  id="file"
                  ref={this.uploadRef}
                  onChange={() => {
                    if (this.uploadRef.current?.files && this.uploadRef.current?.files[0]) {
                      this.setState({ file: this.uploadRef.current?.files[0].name });
                    }
                  }}
                />
                Upload image
              </label>
              <span className="file__name">{this.state.file}</span>
            </div>
            {this.state.uploadError && <span className="error">Choose avatar</span>}
          </div>

          <div className="field">
            <div className="input__container">
              <input id="checkbox" type="checkbox" ref={this.consentRef} />
              <label htmlFor="checkbox">I consent to my personal data</label>
            </div>

            {this.state.consentError && <span className="error">Accept our policy</span>}
          </div>

          <div className="button__wrapper">
            <button
              type="submit"
              className="button"
              onClick={(e) => this.handleSubmit(e)}
              ref={this.submitRef}
            >
              Submit
            </button>
          </div>
        </form>

        <User users={this.state.users} />
      </div>
    );
  }
}

export default Form;
