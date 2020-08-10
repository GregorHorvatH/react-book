import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../routes';

const Content = () => (
  <div className="content">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route path={path} component={component} exact={exact} key={path} />
        ))}
      </Switch>
    </Suspense>
  </div>
);

export default Content;
