import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my cocktail app!</h1>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          {/* <Route
            path="/cocktails/margarita"
            render={() => <ProductPage name="margarita" />}
          /> */}
          <Route path="/cocktails/:name" component={ProductPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
