
import React from "react";
import { Switch, Route } from "react-router-dom";

import Shelves from './components/Shelves/Shelves';
import Bins from './components/Bins/Bins';
import Details from './components/Details/Details';
import Create from './components/Create/Create';
import Header from './components/Header/Header';

export default (
  <div>
  <Switch>

    <Route component={ Shelves } path="/" exact />
    <Route component={ Header } path="/header" /> 
    <Route component={ Bins } path="/bins/:id" />
    <Route component={ Details } path="/bin/:id" />
    <Route component={ Create } path="/create/:id" />
  </Switch>
  </div>
)