import { Route, Switch } from "react-router-dom";
import PanelLayout from "../components/panel/layout/Layout";
import Users from "../components/panel/users/Users";

function PanelRoutes() {
  return (
    <PanelLayout>
      <Switch>
        <Route exact path="/panel/users">
          <Users />
        </Route>
      </Switch>
    </PanelLayout>
  );
}

export default PanelRoutes;
