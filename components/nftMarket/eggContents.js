import React from 'react';
import {Grid} from '@material-ui/core';
import ItemCard from './eggItemCard';
import ChocoButton from './smallChoco';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"

function EggContents(){
    const [state,{updateArtTokens}] = useApplicationContext();
    const images = state.EGGINFO;
    
    //eggInfo
    useEffect(() =>{
    },[])

    return(
        <div className = "mb-5">
            <Grid container spacing = {3} className = "x-grid5">
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[0]}/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[1]} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[2]}/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[3]} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[4]}/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[5]}  />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[6]}  />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[7]} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[8]} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[9]}  />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard data = {images[10]} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard  data = {images[11]} />
                </Grid>
            </Grid>
        </div>
    )
}

export default EggContents;