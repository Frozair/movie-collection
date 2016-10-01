import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

const app = document.getElementById('movie-collection-app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
  app);
