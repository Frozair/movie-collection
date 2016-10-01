import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import New from "./pages/New";
import App from "./components/App";

const app = document.getElementById('movie-collection-app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="new" component={New}></Route>
    </Route>
  </Router>
,app);
