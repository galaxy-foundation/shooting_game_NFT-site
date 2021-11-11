import React from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import footer1 from "../../assets/img/footer/1.png";
import footer2 from "../../assets/img/footer/2.png";
import footer3 from "../../assets/img/footer/3.png";
import {useHistory} from 'react-router-dom';

// import Footer from '../layout/footer';
// import partnerTile from '../../assets/img/tilePartners.png';
// import partnerContent from '../../assets/img/partnerContent.png';

function Bottom() {
  const history = useHistory();

  const goto_signup = ()=>{
    history.push(`/signup`);

  }
  return (
    <div className="x-home-bottom">
     
      <div className="x-home-info">
      <p></p>
        
        {/* <p>START OF LONG <span style={{fontWeight:'bold'}}>JOURNEY</span></p> */}
        <img src={footer3}></img>
        <div style={{marginTop:30}}>
          <button onClick={goto_signup} className="x-signupBtn">SIGN UP</button>
          <button className="x-PlayNowBtn">PLAY NOW</button>
        </div>
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
          
        </p>
        <div className="footer_div">
              <a>provacy polici</a>
              <a>Term of service</a>
              <a>support</a>
              <a>follow us</a>
          <p>powered by ICICb-group.com</p>

          </div>
      </div>
    </div>
  );
}

export default Bottom;
