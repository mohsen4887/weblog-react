import { Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Categories from "../components/categories/Categories";
import Home from "../components/home/Home";
import About from "../components/other/About";
import Users from "../components/panel/users/Users";
import Search from "../components/search/Search";

function PublicRoutes() {
  return (
    <div>
      <Header title="Home" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default PublicRoutes;
