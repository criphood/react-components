import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import About from '../../pages/About/About';
import Error from '../../pages/Error/Error';

class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'*'} element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    );
  }
}

export default AppRouter;
