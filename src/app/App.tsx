import React, { Component } from 'react';
import AppRouter from '../widgets/router/app-router';
import Navigation from '../widgets/navigation/nav';

const App = () => {
  return (
    <>
      <Navigation />
      <AppRouter />
    </>
  );
};

export default App;
