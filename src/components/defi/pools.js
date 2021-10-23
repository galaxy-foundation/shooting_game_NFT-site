import React from 'react';
import {Grid} from '@material-ui/core';
import StakeCard1 from './stakeCard1';
import StakeCard2 from './stakeCard2';
import poolsTileImg from '../../assets/img/defi/poolTile.png';

function Pools(){
    return(
        <div className = "mt-5 defi-pool">
            <div className = "text-center mb-5">
                <img src = {poolsTileImg} alt = "pools tile" className = "x-topImg"/>
            </div>
            <Grid container className = "x-grid2">
                <Grid item xs = {12} sm = {12} md = {6}>
                    <StakeCard1 />
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <StakeCard2 />
                </Grid>
            </Grid>

        </div>
    )
}

export default Pools;