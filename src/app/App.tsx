import React, { Component } from 'react';
import AppRouter from '../widgets/router/app-router';
import Navigation from '../widgets/navigation/nav';

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
