import React from 'react';
import {Grid} from '@material-ui/core';
import BuyCard1 from './buyCard1';
import supplyTile from '../../assets/img/tokenomics/supplyTile.png';
import SupplyChart from '../../components/tokenomics/chart';

function Pools(){
    return(
        <div className = "mt-5">
            <div className = "text-center mb-5">
                <img src = {supplyTile} alt = "pools tile" className = "x-topImg"/>
            </div>
            <Grid container className = "x-grid2">
                <Grid item xs = {12} sm = {12} md = {6}>
                    <BuyCard1 text = "Contract 1"/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <SupplyChart />
                </Grid>
            </Grid>

        </div>
    )
}

export default Pools;