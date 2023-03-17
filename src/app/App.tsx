import React, { Component } from 'react';
import AppRouter from '../widgets/router/AppRouter';
import Navigation from '../widgets/navigation/navigation';

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
