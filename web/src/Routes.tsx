import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <div>hi</div>} />
      </Switch>
    </BrowserRouter>
  );
}
