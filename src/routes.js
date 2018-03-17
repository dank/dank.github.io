import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import Main from './views/Layouts/Main';
import Home from './views/Screens/Home';

export default () => {
  return (
    <Router>
      <Main>
        <Route path="/" component={Home} exact />
      </Main>
    </Router>
  )
};