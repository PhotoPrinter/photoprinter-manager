import React from "react";
import { useParams } from "react-router";
import { Grid, Container, Typography, Link } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HourglassFullRoundedIcon from "@material-ui/icons/HourglassFullRounded";
import Pricing from "../utility/Pricing";
import ImageUploader from "../utility/ImageUploader/ImageUploader";
import { Selector } from "../utility/Forms";

const mockData = {
  237651: {
    id: "237651",
    name: "Holiday 2021",
    status: "Shipped",
    description:
      "Our trip to Paris in 09/06/2021. We visited the Champs Elysee, Musee du Rodin, and had a lot of coffee at Le Maison Rose"
  },
  361295: {
    id: "361295",
    name: "Summer vacation 2021",
    status: "Processing",
    description: "This was a trip to Rome, we flew on TAP through Lisbon. "
  },
  927481: { id: "927481", name: "Spring 2021", status: "Delivered" },
  927480: { id: "927480", name: "Spring 2021", status: "Cancelled" }
};

const images = [
  { data_url: "https://i.imgur.com/us2mJck.jpeg", file: { name: "IMG_1231" }, paperType: "glossy", size: "5x7" },
  { data_url: "https://i.imgur.com/fruRVwF.jpeg", file: { name: "IMG_1223" }, paperType: "glossy", size: "5x7" },
  { data_url: "https://i.imgur.com/awlGgXB.jpeg", file: { name: "IMG_1232" }, paperType: "glossy", size: "5x7" }
];

const statusMapper = {
  Shipped: <Shipped />,
  Processing: <Processing />,
  Delivered: <Delivered />,
  Cancelled: <Cancelled />
};

export default function Order(props) {
  let { orderId } = useParams();
  const [orderInfo, setOrderInfo] = React.useState({});

  const [orderStatus, setOrderStatus] = React.useState("processing");

  React.useEffect(() => {
    setOrderInfo({ ...mockData[orderId], images });
  }, [orderId]);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">
                {orderInfo.name} (#{orderId})
              </Typography>
            </Grid>
            {orderInfo.description && (
              <Grid item xs={12}>
                <Typography variant="subtitle1">{orderInfo.description}</Typography>
              </Grid>
            )}
            <Grid item xs={12} sm={4} style={{marginTop: 20}}>
              <Selector label="Order status"
                value={orderStatus}
                options={[
                  { value: "processing", label: <Processing /> },
                  { value: "shipped", label: <Shipped /> },
                  { value: "delivered", label: <Delivered /> },
                ]}
                onChange={(e) => setOrderStatus(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Some information</Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1"><b>Manager</b></Typography>
              <Typography variant="subtitle2">Person Name</Typography>
              <Typography variant="subtitle2"><Link href="mailto:person.name@gmail.com">person.name@gmail.com</Link></Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1"><b>Customer</b></Typography>
              <Typography variant="subtitle2">Person Name</Typography>
              <Typography variant="subtitle2"><Link href="mailto:person.name@gmail.com">person.name@gmail.com</Link></Typography>
              <Typography variant="subtitle2">1500 Berries Ave<br/>San Jose, CA 95129</Typography>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Photos to print</Typography>
          <ImageUploader
            images={orderInfo.images}
            allowAdd
            setImages={() => {}}
            notEditable={orderInfo.status !== "Processing"}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">The numbers</Typography>
          <Pricing numImages={3} />
        </Grid>
      </Grid>
    </Container>
  );
}

function Cancelled() {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "#bd0000" }}>
      <CancelIcon style={{ marginRight: 5 }} />
      <Typography variant="subtitle1">Cancelled</Typography>
    </div>
  );
}

function Shipped() {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "#0081bd" }}>
      <LocalShippingIcon style={{ marginRight: 5 }} />
      <Typography variant="subtitle1">Shipped</Typography>
    </div>
  );
}

function Delivered() {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "#00bd06" }}>
      <CheckCircleIcon style={{ marginRight: 5 }} />
      <Typography variant="subtitle1">Delivered</Typography>
    </div>
  );
}

function Processing() {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "#e08a00" }}>
      <HourglassFullRoundedIcon style={{ marginRight: 5 }} />
      <Typography variant="subtitle1">Processing</Typography>
    </div>
  );
}
