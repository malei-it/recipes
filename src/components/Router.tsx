import { Switch, Route } from "react-router-dom";
import Random from "../components/pages/Random";
import Favourites from "../components/pages/Favourites";

const Router = () => (
  <Switch>
    <Route path="/favourites">
      <Favourites />
    </Route>
    <Route path="/">
      <Random />
    </Route>
  </Switch>
);

export default Router;
