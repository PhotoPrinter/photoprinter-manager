import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Orders from "./components/Orders/Orders";

import "./App.css";
import Navbar from "./components/utility/Navbar";
import Profile from "./components/Profile/Profile";
import Order from "./components/Order/Order";
import { Button, Container, Typography } from "@material-ui/core";

function App() {
  const history = useHistory();

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/order/:orderId">
          <Order />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Container maxWidth="md" style={{ marginTop: 30 }}>
            <Typography variant="h5">Welcome to PhotoPrinter</Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/orders")}
                style={{ marginBottom: 15 }}>
                Check out existing orders
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/profile")}
                style={{ marginBottom: 15 }}>
                Check out your profile
              </Button>
            </div>
          </Container>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
