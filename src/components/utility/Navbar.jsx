import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export default function Navbar(props) {
  const history = useHistory();

  return (
    <Grid container style={{ padding: "5px 15px 0px 15px" }} alignItems="center">
      <Grid item xs>
        <Grid container alignItems="center" spacing={3}>
          <Grid item>
            <Typography className="typography-btn" variant="h5" onClick={() => history.push("/")}>
              PhotoPrinter
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ color: "#777777" }}
              className="typography-btn"
              onClick={() => history.push("/orders")}>
              Orders
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle1"
          style={{ color: "#777777" }}
          className="typography-btn"
          onClick={() => history.push("/profile")}>
          Profile
        </Typography>
      </Grid>
    </Grid>
  );
}
