import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./Lading/index";

function App() {
  return (
    <div >
      <header >
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}>
            </Route>            
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
