import React from 'react';
import {Grid} from '@material-ui/core';
import BuyCard1 from './buyCard1';
import PriceCard from './priceCard';
import pancakeTileImg from '../../assets/img/tokenomics/pancakeTile.png';
import Chart from './chart';
import {useState,useEffect} from 'react'
import Axios from 'axios';
import { useWallet, UseWalletProvider } from 'use-wallet'
import {ethers} from "ethers";
import {PetSwapRouterContract, PetSwapFactoryContract, PetWorldCoin, WBNBAddress, PetSwapPair} from "../../contract"

function PancakeSwap(){
    const [tokenPrice, setTokenPrice] =useState(300);
    const [totalSupply, setTotalSupply] = useState(6000000);

    //get data
    useEffect(() => {
        async function getData() {
            var reserves =await PetSwapPair.getReserves();
            var vreserves = await PetSwapPair.getVReserves();
            console.log(ethers.utils.formatUnits(reserves[0].toString()),ethers.utils.formatUnits( reserves[1].toString(),18));
            console.log(ethers.utils.formatUnits(vreserves[0].toString()),ethers.utils.formatUnits( vreserves[1].toString(),18));
            
            var tokenrate = (Number(ethers.utils.formatUnits(reserves[0].toString()))+Number(ethers.utils.formatUnits(vreserves[0].toString())))
            /(Number(ethers.utils.formatUnits( reserves[1].toString()))+Number(ethers.utils.formatUnits( vreserves[1].toString())));

            var data = await Axios.get("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
            var bnbprice = data.data.binancecoin.usd;

            var tokenPrice = bnbprice*tokenrate;
            setTokenPrice(tokenPrice);

            var totalSupply =ethers.utils.formatUnits(await PetWorldCoin.totalSupply());
            setTotalSupply(totalSupply);
        }

        getData();
    },[])


    const PancakeSwapText = (
        <div className = "x-font1">
            Pancake swap is popular Dex in binance smart chain <br />
        </div>
        )
        
    return(
        <div className = "x-defi-lp">
            <div className = 'x-defi-top-img mb-4'>
                <img src = {pancakeTileImg} alt = "pancakeswap tile" className = "x-topImg" />
            </div>
            <Grid container className = "x-grid2">
                <Grid item xs = {12} sm = {12} md = {6}>
                    <BuyCard1 text = "pancakeswap"/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <Chart title = {"Pancake Swap"} percent={2} text={PancakeSwapText}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "x-grid3">
                    <PriceCard title = "COIN PRICE" price = {tokenPrice.toFixed(4)} backColor = "#6326dd" prefix = {" $ "}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "x-grid3">
                    <PriceCard title = "TOTAL SUPPLY" price = {parseFloat(Number(totalSupply).toFixed(4))} prefix = {""} backColor = "#9c5c2b"/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4} className = "x-grid3">
                    <PriceCard title = "MARKET CAP" price = {(totalSupply*tokenPrice).toFixed(0)} backColor = "#7ed1f5" prefix = {" $ "}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default PancakeSwap;