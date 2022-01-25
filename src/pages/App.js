import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div >
      <header >
        <Router>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>            
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
