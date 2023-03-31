import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../../pages/about-page/about';
import Error from '../../pages/error-page/error';
import Main from '../../pages/main-page/main';
import Forms from '../../pages/forms-page/forms';

class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/forms'} element={<Forms />} />
        <Route path={'*'} element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<Error />} />
      </Routes>
    );
  }
}

export default AppRouter;
