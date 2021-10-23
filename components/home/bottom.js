import React from "react";
import { Grid, Container, Paper } from "@material-ui/core";

// import Footer from '../layout/footer';
// import partnerTile from '../../assets/img/tilePartners.png';
// import partnerContent from '../../assets/img/partnerContent.png';

function Bottom() {
  return (
    <div className="x-home-bottom">
      <div className="x-home-newletter">
        <span className="newlettertitle">NEWSLETTER</span>
        <input type="text" placeholder="Enter Email Address" />
        <button>Submit</button>
      </div>
      <div className="x-home-info">
        <Container>
          <div style={{ height: "10vh" }}></div>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            className="x-home-info-skeleton"
          >
            <Grid item xl={3}>
              <h3>Atari</h3>
              <p></p>
            </Grid>
            <Grid item xl={3}>
              <h3>Quick Links</h3>
            </Grid>
            <Grid item xl={3}>
              <h3>Address</h3>
            </Grid>
            <Grid item xl={3}>
              <h3>Follow Us</h3>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <p
          style={{
            padding: "20px",
            margin: "0",
            color: "white",
            paddingLeft: "20%",
          }}
        >
          Copyright &copy; 2020 <b style={{ color: "darkred" }}>Atari</b> All
          Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Bottom;
