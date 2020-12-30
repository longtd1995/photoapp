import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PageNotFound from "../../components/NotFound";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/MainPage";

PhotoFeature.propTypes = {};

function PhotoFeature(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.path} component={MainPage} />

      <Route path={`${match.path}/add`} component={AddEditPage} />
      <Route path={`${match.path}/:photoId`} component={AddEditPage} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default PhotoFeature;
