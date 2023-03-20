import React, { Component } from 'react';
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
    setState(this.state.text);
  }

  render() {
    return (
      <div className="search__container">
        <input
          type="text"
          value={this.state.text}
          onChange={this.onChange}
          className="search__input"
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;
