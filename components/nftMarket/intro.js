import React from 'react';
import Nav from '../../components/layout/nav';
import nftMarketTile from '../../assets/img/nftMarket/nftTile.png';

function Intro(){
    return(
        <div>
            <div className = "x-home-top">
                <Nav />
                <div className = 'x-defi-top-img'>
                    <img src = {nftMarketTile} alt = "nft market tile" className = "x-topImg" />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Intro;
