import React from 'react';
import Nav from '../../components/layout/nav';
import tokenomicsTile from '../../assets/img/tokenomics/tokenomicTile.png';
import tokenomicsVideo from '../../assets/video/liquidity.mp4';

function Intro(){
    return(
        <div>
            <div className = "x-home-top">
                <Nav />
                <div className = 'x-defi-top-img mb-4'>
                    <img src = {tokenomicsTile} alt = "tokenomics tile" className = "x-topImg" />
                </div>
                <div className = "x-defi-top-video">
                    <video autoPlay loop muted width="100%" height="100%">
                        <source src={tokenomicsVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Intro;