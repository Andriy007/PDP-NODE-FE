import React from "react";
import { Route, Switch } from "react-router-dom";

import Board from "../view/Board/MainBoard"
import SingleProduct from "../view/Board/SingleProductPage";

export default function PrivateRoutes() {
  return (
    <Switch>
      <Route exact path="/board" component={Board} />
      <Route exat path="/pizza/:id" component={SingleProduct}/>
    </Switch>
  )
}
