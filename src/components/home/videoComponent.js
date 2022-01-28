import React from "react";
import { Grid } from "@material-ui/core";
import Video1 from "../../assets/video/video1.mp4";
import Video2 from "../../assets/video/video2.mp4";


function OpenWar() {
  return (
    <div className="videoComponent">
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={6}>
            {/* <h1 className="head">OPEN WAR</h1> */}
            <video style={{width:'100%', padding:10, borderRadius:20}} loop autoPlay muted src={Video1} />
        </Grid>
        <Grid xs={12} sm={12} md={6}>
            {/* <h1 className="head">OPEN WAR</h1> */}
            <video style={{width:'100%', padding:10, borderRadius:20}} loop autoPlay muted src={Video2} />
        </Grid>

        
       </Grid>
    </div>
  );
}

export default OpenWar;
