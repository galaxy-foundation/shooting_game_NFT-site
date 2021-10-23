import React from 'react';
import Nav from '../../components/layout/nav';
import defiTile from '../../assets/img/defi/defiTile.png';
import defiVideo from '../../assets/video/Village video.mp4';

function Intro(){
    return(
        <div>
            <div className = "x-home-top">
                <div className = 'x-defi-top-img mb-4'>
                    <img src = {defiTile} alt = "defi tile" className = "x-topImg" />
                </div>
                <div className = "x-defi-top-video">
                    <video autoPlay loop muted width="100%" height="100%">
                        <source src={defiVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Intro;