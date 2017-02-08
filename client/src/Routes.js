import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import MainLayout from './layouts/MainLayout';
import FourOFour from './components/FourOFour';
import RiverListContainer from './containers/RiverListContainer';

export default (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout} >
          <IndexRoute component={Home} />
          <Route path="rivers" component={RiverListContainer} />
        </Route>
        <Route path='*' component={MainLayout}>
          <IndexRoute component={FourOFour} />
        </Route>

      </Router>
);
