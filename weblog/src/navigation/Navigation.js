import { Switch } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import PanelRoutes from "./PanelRoutes";
import PublicRoutes from "./PublicRoutes";
import Route from "./Route";

function Navigation() {
  return (
    <Switch>
      <Route admin path="/panel/">
        <PanelRoutes />
      </Route>
      <Route guest path="/auth/">
        <AuthRoutes />
      </Route>
      <Route path="/">
        <PublicRoutes />
      </Route>
    </Switch>
  );
}

export function isActiveRoute(route, pattern) {
  const regex = new RegExp(pattern);
  return regex.test(route);
}

export default Navigation;
