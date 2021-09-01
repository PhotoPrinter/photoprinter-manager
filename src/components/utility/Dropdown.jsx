import React from "react";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { IconButton, Badge, CircularProgress, Typography } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

export default function Dropdown(props) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Slide
      in={open}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1300,
        backgroundColor: "#fff"
      }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {loading && (
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)"
            }}>
            <CircularProgress />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#42465c",
            paddingLeft: 18,
            height: 65
          }}>
          <Typography variant="h5" style={{ flex: 1, color: "#fff" }}>
            {props.title}
          </Typography>
          <IconButton>
            <Badge>
              <CloseIcon
                style={{ color: "#fff" }}
                fontSize="large"
                onClick={() => {
                  setOpen(false);
                  setTimeout(props.handleClose, 125);
                }}
              />
            </Badge>
          </IconButton>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>{props.children}</div>
        {props.showBottom && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "#42465c",
              paddingTop: 12,
              paddingLeft: 17,
              paddingBottom: 12,
              paddingRight: 17
            }}>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(false);
                setTimeout(props.handleClose, 125);
              }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: 15, backgroundColor: "#9ac9f5" }}
              onClick={async () => {
                setLoading(true);
                await props.handleConfirm();
                setLoading(false);
                setOpen(false);
              }}>
              {props.confirm}
            </Button>
          </div>
        )}
      </div>
    </Slide>
  );
}
