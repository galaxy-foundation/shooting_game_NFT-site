import React from 'react';
import {Grid} from '@material-ui/core';
import ItemCard from './itemCard';
import ChocoButton from './smallChoco';
import pet1 from '../../assets/img/nftMarket/dragon (1).jpg';
import pet2 from '../../assets/img/nftMarket/dragon (2).jpg';
import pet3 from '../../assets/img/nftMarket/dragon (3).jpg';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"

function ItemContent(props){
    const [status, setStatus] = useState(props.router);
    const [state,{updateArtTokens}] = useApplicationContext();

    console.log("status",status);

    const eggButtonHandle = () => {
        console.log("NFTmarketplace:state",state);
    }
    return(
        <div className = "mb-5">
            <div className = "text-center mt-4 mb-5">
                <ChocoButton text = "Eggs" onClick={eggButtonHandle}/>
                <ChocoButton text = "Pets"/>
                <ChocoButton text = "Items"/>
                <ChocoButton text = "Arts"/>
            </div>
            <Grid container spacing = {3} className = "x-grid5">
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard image={pet1} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard image={pet2}  />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard image={pet3}  />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {3}>
                    <ItemCard image={pet3}  />
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemContent;