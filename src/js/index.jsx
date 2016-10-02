import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Save from "./pages/Save";
import App from "./components/App";

const app = document.getElementById('movie-collection-app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="save" component={Save}></Route>
    </Route>
  </Router>
,app);
