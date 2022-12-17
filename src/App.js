import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Home}></Route>
          <Route path={"/home"} exact component={Home}></Route>
          <Route path={"/productlist"} exact component={ProductList}></Route>
          <Route path={"/product"} exact component={Product}></Route>
          <Route path={"/register"} exact component={Register}></Route>
          <Route path={"/login"} exact component={Login}></Route>
          <Route path={"/cart"} exact component={Cart}></Route>
          <Route path={"*"} exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
