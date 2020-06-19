import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import { ContextProvider } from "./context/Context";
import NotFound from "./Pages/NotFound";
import Favorites from "./Pages/Favorites";
import "./App.css";
import ErrorBoundary from "./Pages/Error";
function App() {
  return (
    <div className="App">
      <h1>Welcome to my cocktail app!</h1>
      <ErrorBoundary>
        <ContextProvider>
          <Router>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/cocktails/:name" component={ProductPage} />
              <Route
                path="/favorites"
                component={Favorites}
                // render={() => <Homepage test="test" />}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
