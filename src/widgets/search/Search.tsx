import React, { Component } from 'react';
import { getState, setState } from './utils/utils';
import styles from './Search.module.scss';
import Products from '../products/Products';

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
      <div className={styles.search__container}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.onChange}
          className={styles.search__input}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;
