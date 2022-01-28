import React from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import footer1 from "../../assets/img/footer/1.png";
import footer2 from "../../assets/img/footer/2.png";
import footer3 from "../../assets/img/footer/3.png";
import {useHistory} from 'react-router-dom';
import logo from "../../assets/img/logo1.png"
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
        {/* <div style={{marginTop:30}}>
          <button onClick={goto_signup} className="x-signupBtn">SIGN UP</button>
          <button className="x-PlayNowBtn">PLAY NOW</button>
        </div> */}
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
              {/* <a>provacy polici</a>
              <a>Term of service</a>
              <a>support</a>
              <a>follow us</a> */}
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={4}>
              <img src={logo} />
            </Grid>
          <Grid xs={12} sm={12} md={4}>
          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                <li class="mb-3">
                  <a href="https://icicb.com/privacy_policy/index.html" target="_blank" class="text-reset">
                    Privacy policy
                  </a>
                </li>
                <li class="mb-3">
                  <a href="https://icicb.com/terms/index.html" target="_blank"  class="text-reset">
                    Terms of use
                  </a>
                </li>
                <li class="mb-3">
                  <a href="https://icicb.com/risk-factors/index.html" target="_blank"  class="text-reset">
                    Risk factors
                  </a>
                </li>
                <li class="mb-3">
                  <a href="https://icicb.com/regulatory-oversight/index.html" target="_blank"  class="text-reset">
                    Regulatory oversight
                  </a>
                </li>
              
                <li class="mb-3">
                  <a href="https://icicb.com/cft-policy/index.html" target="_blank"  class="text-reset">
                    AML &amp; CFT Policy
                  </a>
                </li>
                <li class="mb-3">
                  <a href="https://icicb.com/cookie-policy/index.html" target="_blank"  class="text-reset">
                    Cookie policy
                  </a>
                </li>
              </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4}>
        <ul class="list-unstyled text-muted mb-0">
                <li class="mb-3">
                  <a href="mailto:tech@atarichain.com" class="text-reset">
                    Technical: <br />
                    tech@icicb.com
                  </a>
                </li>
                <li class="mb-3">
                  <a href="mailto:marketing@atarichain.com" class="text-reset">
                    Marketing: <br />
                    marketing@icicb.com
                  </a>
                </li>
                <li class="mb-3">
                  <a href="http://www.atarichain.com" class="text-reset">
                    Official website: <br />
                    www.icicb.com
                  </a>
                </li>
                
                <li class="mb-3">
                  <a href="https://t.me/icicbcoin" target="_blank" rel="noopener noreferrer" class="text-reset">Official Channel: <br />
                    t.me/icicbcoin
                  </a>
                </li>
              </ul>
        </Grid>
       </Grid>
       <p>powered by ICICb-group.com</p>

          </div>
      </div>
    </div>
  );
}

export default Bottom;
