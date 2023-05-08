import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import OrderForm from "./pages/OrderForm";
import Contact from "./pages/Contact";
import About from "./pages/About";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/orderform">
          <OrderForm/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        
      </Switch>
    </Router>
  );
};

export default App;
