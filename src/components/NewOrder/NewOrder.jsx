import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import Dropdown from "../utility/Dropdown";
import { TextInput } from "../utility/Forms";
import ImageUploader from "../utility/ImageUploader/ImageUploader";
import Pricing from "../utility/Pricing";

export default function NewOrder(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [images, setImages] = React.useState({});

  const history = useHistory();

  return (
    <Dropdown
      title="Create a new order"
      confirm="Create order"
      showBottom={true}
      handleClose={() => history.goBack()}
      handleConfirm={() => history.goBack()}>
      <Grid container justify="center" spacing={3} style={{ width: "100%", marginTop: 20 }}>
        <Grid container item xs={12} sm={8} spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Tell me about your master pieces</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextInput label="Give it a name" value={name} onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextInput label="Describe it to me" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Show me your master pieces</Typography>
          </Grid>
          <Grid item xs={12}>
            <ImageUploader setImages={setImages} allowAdd />
          </Grid>
          {images.length > 0 && (
            <React.Fragment>
              <Grid item xs={12}>
                <Typography variant="h5">I've crunched the numbers</Typography>
              </Grid>
              <Pricing numImages={images.length} />
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </Dropdown>
  );
}
