import React from 'react';
import {Grid} from '@material-ui/core';
import StakeCard1 from './stakeCard1';
import StakeCard2 from './stakeCard2';
import PriceCard from './priceCard';
import lpTileImg from '../../assets/img/defi/lpTile.png';

function Lp(){
    return(
        <div className = "x-defi-lp">
            <div className = 'x-defi-top-img mb-4'>
                <img src = {lpTileImg} alt = "lp tile" className = "x-topImg" />
            </div>
            <Grid container className = "x-grid2">
                <Grid item xs = {12} sm = {12} md = {6}>
                    <StakeCard1/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <StakeCard2/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "x-grid3">
                    <PriceCard title = "COIN PRICE" price = "$12" backColor = "#6326dd"/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "x-grid3">
                    <PriceCard title = "MARKET SUPPLY" price = "$12" backColor = "#9c5c2b"/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "x-grid3">
                    <PriceCard title = "MARKET CAP" price = "$50" backColor = "#7ed1f5"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Lp;