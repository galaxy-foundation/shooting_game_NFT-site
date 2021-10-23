import React from 'react';
import {Grid} from '@material-ui/core';
import playtoearn from '../../assets/img/playtoearn.png';
import logoWithDragon from '../../assets/img/logoWithDragon.png';
import economy from '../../assets/img/features/how it work.png';

function PetToken(){
    return(
        <div className = "x-home-petToken mt-5 text-center" >
            <div className = "mb-4">
                <img src = {playtoearn} alt = "petworldtitle" className = "x-home-petToken-title" />
            </div>
            <Grid container spacing = {3} className = "x-home-petToken-content x-grid2">
                <div className = "spacer-1"></div>
                <Grid item xs = {12} sm = {12} md = {12} className = "text-center border">
                    <div className = "x-font1">
                    Pet World Coin is the main currency in the game. Used for NFT trading, evolve pets, and provides a link between the in-game economy and the real economy.
                    It also provides a way to earn while playing.
                    </div>
                </Grid>
                
                <div className = "spacer"></div>
                <Grid item xs = {12} sm = {12} md = {12} className = "text-center economy-card">
                    <img src = {economy} alt = "logoWithDragon" width = "100%" />
                </Grid>
                <div className = "spacer-3"></div>
            </Grid>
        </div>
    )
}

export default PetToken;