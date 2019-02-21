import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound } from "pages";
import BaseContainer from "containers/BaseContainer";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDove } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);
library.add(faDove);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route component={NotFound} />
        </Switch>
        <BaseContainer />
      </div>
    );
  }
}

export default App;
