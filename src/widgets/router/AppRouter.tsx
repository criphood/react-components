import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import About from '../../pages/About/About';
import Error from '../../pages/Error/Error';

class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path={'/'} element={<Main />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'*'} element={<Error />}></Route>
      </Routes>
    );
  }
}

export default AppRouter;
