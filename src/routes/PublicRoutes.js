import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../view/Auth/Login"
import SignUp from "../view/Auth/SignUp"

export default function AuthRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/auth/sign-up" component={SignUp}/>
    </Switch>
  )
}
