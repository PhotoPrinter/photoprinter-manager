import React from "react";
import ImageUploading from "react-images-uploading";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  CardMedia,
  DialogActions,
  Button
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

import "./ImageUploader.css";
import { Selector } from "./Forms";

export default function ImageUploader(props) {
  const [images, setImages] = React.useState([]);
  const [editingImage, setEditingImage] = React.useState(-1);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(
      imageList.map((image) => {
        return { ...image, paperType: "glossy", size: "5x7" };
      })
    );
    props.setImages(
      imageList.map((image) => {
        return { ...image, paperType: "glossy", size: "5x7" };
      })
    );
  };

  return (
    <div>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={50} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemove }) => (
          <div>
            <ImageList rowHeight={180} style={{ width: "100%" }}>
              {imageList.map((image, index) => (
                <ImageListItem key={image.file.name} className="image" onClick={() => setEditingImage(index)}>
                  <img src={image["data_url"]} alt={image.file.name} />
                  <ImageListItemBar
                    title={image.file.name}
                    subtitle={`${image?.paperType}, ${image?.size}`}
                    actionIcon={
                      <IconButton onClick={() => onImageRemove(index)}>
                        <CancelIcon style={{ color: "#ffffff" }} />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
              <ImageListItem>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  onClick={onImageUpload}
                  className="add-image-cta">
                  <Typography variant="h6">Click to add more items</Typography>
                </Grid>
              </ImageListItem>
            </ImageList>
          </div>
        )}
      </ImageUploading>
      {images[editingImage] && (
        <Dialog open={editingImage >= 0} onClose={() => setEditingImage(undefined)} fullWidth>
          <DialogTitle>How do you want us to print {images[editingImage].file?.name}?</DialogTitle>
          <DialogContent>
            <CardMedia image={images[editingImage]["data_url"]} style={{ height: 250 }} />
            <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 15 }}>
              <Grid item xs={12}>
                <Selector
                  label="Paper type"
                  value={images[editingImage].paperType}
                  options={[
                    { value: "glossy", label: "Glossy" },
                    { value: "matte", label: "Matte" }
                  ]}
                  onChange={(e) =>
                    setImages(
                      images.map((image, index) =>
                        index === editingImage ? { ...image, paperType: e.target.value } : image
                      )
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Selector
                  label="Print size"
                  value={images[editingImage].size}
                  options={[
                    { value: "5x7", label: "5x7" },
                    { value: "8x10", label: "8x10" },
                    { value: "11x14", label: "11x14" },
                    { value: "16x20", label: "16x20" },
                    { value: "17x22", label: "17x22" }
                  ]}
                  onChange={(e) =>
                    setImages(
                      images.map((image, index) =>
                        index === editingImage ? { ...image, size: e.target.value } : image
                      )
                    )
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
