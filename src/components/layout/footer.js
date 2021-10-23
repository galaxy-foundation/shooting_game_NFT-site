import React from 'react';
import {Link} from 'react-router-dom';
import ChocoImgBtn from '../home/chocoImgBtn';
import {Grid} from '@material-ui/core';
import quickTile from '../../assets/img/tileQuickLink.png';
import connectTile from '../../assets/img/tileConnect.png';
import footerLogo from '../../assets/img/homeTopImg.png';
import mailIcon from '../../assets/img/mailIcon.png';
import facebookIcon from '../../assets/img/facebookIcon.png';
import instagramIcon from '../../assets/img/instagramIcon.png';
import twitterIcon from '../../assets/img/twitterIcon.png';
import {useHistory} from 'react-router-dom';

function Footer(){
    const history = useHistory();
    return(
        <div className = "x-footer text-center">
            <ChocoImgBtn text = "Get Token" onClick={() => history.push("/tokenomics")}/>
            <ChocoImgBtn text = "Play Now!"/>
            <Grid container className = "x-footer-content">
                <Grid item xs = {6} sm = {6} md = {4} className = "quick-link">
                    <div>
                        <img src = {quickTile} alt = "Quick links tile" width = "70%"/>
                    </div>
                    <div>
                        <Link to = "/" className = "x-footer-link">Home</Link>
                    </div>
                    <div>
                        <Link to = "/tokenomics" className = "x-footer-link">Tokenomics</Link>
                    </div>
                    <div>
                        <Link to = "/defi" className = "x-footer-link">Defi</Link>
                    </div>
                    <div>
                        <Link to = "/my-items" className = "x-footer-link">My Items</Link>
                    </div>
                    <div>
                        <Link to = "/nft-marketplace" className = "x-footer-link">NFT marketplace</Link>
                    </div>
                </Grid>
                <Grid item xs = {6} sm = {6} md = {4} className = "Pet-world">
                    <img src = {footerLogo} alt = "footer logo" width = "400px"/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "text-center pt-4">
                    <div className = "connect-us">
                        <img src = {connectTile} alt = "connect us tile" width = "70%"/>
                    </div>
                    <div className = "text-center">
                        <img src = {mailIcon} alt = "mail Icon" width = "55px" className = "mr-3"/>
                        <img src = {facebookIcon} alt = "facebook Icon" width = "55px" className = "mr-3"/>
                        <img src = {instagramIcon} alt = "instagram Icon" width = "55px" className = "mr-3"/>
                        <img src = {twitterIcon} alt = "twitter Icon" width = "55px" className = "mr-3"/>
                    </div>
                    <div className = "mt-5">
                        <div className = "x-font1">
                            Copyright © 2021 openpetworld.com
                        </div>
                        <div className = "x-font1">
                            All rights reserved
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;