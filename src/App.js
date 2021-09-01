import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewOrder from "./components/NewOrder/NewOrder";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/neworder">
          <NewOrder />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
