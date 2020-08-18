import React, { Suspense, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appContext from '../../reducer/appContext';

import routes from '../../routes';

const Content = () => {
  const {
    state: { isAuthorized },
  } = useContext(appContext);

  return (
    <div className="content">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(
            ({ path, component, exact, isSecure, hideWhenAuthorized }) =>
              (isSecure && isAuthorized) ||
              (!hideWhenAuthorized && !isSecure) ||
              (hideWhenAuthorized && !isAuthorized && !isSecure) ? (
                <Route
                  path={path}
                  component={component}
                  exact={exact}
                  key={path}
                />
              ) : null,
          )}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
