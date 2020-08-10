import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import('./view/index/index.jsx'))}
            />
            <Route
              exact
              path="/log"
              component={lazy(() => import('./view/log/index.jsx'))}
            />
            <Route
              component={lazy(() => import('./view/notFound/index.jsx'))}
            />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}
