import { Route, Switch } from "react-router-dom";
import PanelLayout from "../components/panel/layout/Layout";
import CreateUser from "../components/panel/users/CreateUser";
import EditUser from "../components/panel/users/EditUser";
import Users from "../components/panel/users/Users";

function PanelRoutes() {
  return (
    <PanelLayout>
      <Switch>
        <Route exact path="/panel/users">
          <Users />
        </Route>
        <Route exact path="/panel/users/create">
          <CreateUser />
        </Route>
        <Route exact path="/panel/users/:id/edit">
          <EditUser />
        </Route>
      </Switch>
    </PanelLayout>
  );
}

export default PanelRoutes;
