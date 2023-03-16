import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { getState, setState } from './utils/utils';

type State = { text: string };

class Search extends Component<object, State> {
  state = {
    text: '',
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };

  componentDidMount() {
    this.setState({ text: getState() });
  }

  componentWillUnmount() {
    console.log(123);
    setState(this.state.text);
  }

  render() {
    return (
      <div className="search__container">
        <input
          type="text"
          className="search__input"
          value={this.state.text}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Search;
