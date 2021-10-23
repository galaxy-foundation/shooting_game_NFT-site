import React from 'react';
import Nav from '../../components/layout/nav';
import itemsTile from '../../assets/img/items/itemsTile.png';

function Intro(){
    return(
        <div>
            <div className = "x-home-top">
                <Nav />
                <div className = 'x-defi-top-img'>
                    <img src = {itemsTile} alt = "nft market tile" className = "x-topImg" />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Intro;
