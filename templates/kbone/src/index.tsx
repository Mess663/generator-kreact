import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/"
            component={lazy(() => import('./view/index'))}
          />
          <Route
            exact
            path="/log"
            component={lazy(() => import('./view/log'))}
          />
          <Route
            component={lazy(() => import('./view/notFound'))}
          />
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
