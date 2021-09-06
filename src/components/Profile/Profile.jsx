import React from "react";
import { useHistory } from "react-router";
import { Grid, IconButton, Typography } from "@material-ui/core";
import Dropdown from "../utility/Dropdown";
import EditIcon from "@material-ui/icons/Edit";

export default function Profile(props) {
  const history = useHistory();

  return (
    <Dropdown
      title="Profile"
      showBottom={false}
      handleClose={() => history.goBack()}
      handleConfirm={() => history.goBack()}>
      <Grid container justify="center" spacing={3} style={{ width: "100%", marginTop: 20 }}>
        <Grid container item xs={12} sm={8} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Stuff about you</Typography>
            <DataField label="Name" data={["Bryan Kwong"]} />
            <DataField label="Phone" data={["(626) 000-0000"]} />
            <DataField label="Email" data={["person.name@gmail.com"]} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Money stuff</Typography>
            <DataField label="Payment card" data={[["•••• •••• •••• 9274"], ["VISA exp. 07/2024"]]} />
            <DataField label="Billing address" data={["1 Washington Sq", "San Jose, 95128 CA"]} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Shipping stuff</Typography>
            <DataField label="Address" data={["1 Washington Sq", "San Jose, 95128 CA"]} />
            <DataField label="Default shipping" data={["USPS 2-Day Priority Mail"]} />
          </Grid>
        </Grid>
      </Grid>
    </Dropdown>
  );
}

function DataField(props) {
  const [editing, setEditing] = React.useState(false);

  return (
    <Grid container style={{ marginTop: 10 }} alignItems="center">
      <Grid item xs>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">
              <b>{props.label}</b>
            </Typography>
          </Grid>
          <Grid item>
            {props?.data?.map && props.data.map((data) => <Typography variant="body1">{data}</Typography>)}
          </Grid>
        </Grid>
      </Grid>
      {!editing && (
        <Grid item>
          <IconButton onClick={() => setEditing((editing) => true)}>
            <EditIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
}
