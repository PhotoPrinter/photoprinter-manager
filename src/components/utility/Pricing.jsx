import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function Pricing(props) {
  return (
    <Grid item sm={12} md={6}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs>
              <Typography variant="body1">{props.numImages} photos</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">${(props.numImages * 0.56).toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Typography variant="body1">Shipping</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">$4.99</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <hr />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Typography variant="body1">Subtotal</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">${(props.numImages * 0.56).toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Typography variant="body1">Total</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">${(props.numImages * 0.56 * 1.0938).toFixed(2)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
