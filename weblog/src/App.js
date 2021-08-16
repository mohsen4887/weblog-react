import Header from "./common/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import About from "./components/other/About";
import Search from "./components/search/Search";

function App() {
  return (
    <Router>
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
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
