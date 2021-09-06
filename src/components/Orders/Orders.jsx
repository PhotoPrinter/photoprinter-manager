import { Grid, Container } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Table from "../utility/Table";

export default function Orders(props) {
  const history = useHistory();

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Table
            style={{ width: "100%" }}
            columns={[
              { title: "Order ID", field: "id" },
              { title: "Name", field: "name" },
              { title: "Status", field: "status" }
            ]}
            data={[
              { id: "237651", name: "Holiday 2021", status: "Shipped" },
              { id: "361295", name: "Summer vacation 2021", status: "Processing" }
            ]}
            title="Your active orders"
            onRowClick={(e, rowData) => history.push(`/order/${rowData.id}`)}
          />
        </Grid>
        <Grid item xs={12}>
          <Table
            style={{ width: "100%" }}
            columns={[
              { title: "Order ID", field: "id" },
              { title: "Name", field: "name" },
              { title: "Status", field: "status" }
            ]}
            data={[
              { id: "927481", name: "Spring 2021", status: "Delivered" },
              { id: "927480", name: "Spring 2021", status: "Cancelled" }
            ]}
            title="Your past orders"
            onRowClick={(_, rowData) => history.push(`/order/${rowData.id}`)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
