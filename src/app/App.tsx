import React, { Component } from 'react';
import Navigation from '../widgets/navigation/Navigation';
import AppRouter from '../widgets/router/AppRouter';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <AppRouter />
      </>
    );
  }
}

export default App;
