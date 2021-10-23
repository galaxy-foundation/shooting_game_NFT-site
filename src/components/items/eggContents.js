import React from 'react';
import {Grid} from '@material-ui/core';
import ItemCard from './eggItemCard';
import ChocoButton from './smallChoco';
import {useEffect,useState,useMemo} from 'react'
import {useApplicationContext} from "../../contexts"

function EggContents(){
    const [state,] = useApplicationContext();
    var myEggInfos = state.MyEggTokens;
    //eggInfo
    useEffect(() =>{
    },[])
 
    return(
        <div className = "mb-5">
            <Grid container spacing = {3} className = "x-grid5">
            {myEggInfos.owners.map((creator, index)=>{
                return (
                    <Grid item xs = {12} sm = {6} md = {3}>
                        <ItemCard id = {index} />
                    </Grid>
                )
            })}
               
            </Grid>
        </div>
    )
}

export default EggContents;