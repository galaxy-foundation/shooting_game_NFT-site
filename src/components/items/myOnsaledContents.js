import React from 'react';
import {Grid} from '@material-ui/core';
import ItemCard from './myOnsaledContentsCard';
import {useEffect,useState,useMemo} from 'react'
import {useApplicationContext} from "../../contexts"

function MarketContents(){
    const [state,] = useApplicationContext();
    var myWeaponTokens = state.MyMARKETWeaponTokens;
    
 
    return(
        <div className = "mb-5">
            <Grid container spacing = {3} className = "x-grid5">
            {myWeaponTokens.owners.map((creator, index)=>{
                return (
                    <Grid item xs = {12} sm = {6} md = {3} key = {index} >
                        <ItemCard id = {index} />
                    </Grid>
                )
            })}
               
            </Grid>
        </div>
    )
}

export default MarketContents;