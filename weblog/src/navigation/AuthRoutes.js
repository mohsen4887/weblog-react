import { Redirect, Route, Switch } from "react-router-dom";
import AuthLayout from "../components/auth/layout/Layout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

function AuthRoutes() {
  return (
    <AuthLayout>
      <Switch>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/">
          <Redirect to="/auth/login" />
        </Route>
      </Switch>
    </AuthLayout>
  );
}

export default AuthRoutes;
