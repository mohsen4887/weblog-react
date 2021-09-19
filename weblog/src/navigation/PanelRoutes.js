import { Switch } from "react-router-dom";
import Articles from "../components/panel/articles/Articles";
import Categories from "../components/panel/categories/Categories";
import PanelLayout from "../components/panel/layout/Layout";
import CreateUser from "../components/panel/users/CreateUser";
import EditUser from "../components/panel/users/EditUser";
import Users from "../components/panel/users/Users";
import Route from "./Route";

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
        <Route exact path="/panel/categories">
          <Categories />
        </Route>
        <Route exact path="/panel/articles">
          <Articles />
        </Route>
      </Switch>
    </PanelLayout>
  );
}

export default PanelRoutes;
