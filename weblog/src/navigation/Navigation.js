import { Route, Switch } from "react-router-dom";
import PanelRoutes from "./PanelRoutes";
import PublicRoutes from "./PublicRoutes";

function Navigation() {
  return (
    <Switch>
      <Route path="/panel/">
        <PanelRoutes />
      </Route>
      <Route path="/">
        <PublicRoutes />
      </Route>
    </Switch>
  );
}

export default Navigation;
