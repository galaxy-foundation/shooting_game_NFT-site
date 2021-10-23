import React from 'react';
import {Grid} from '@material-ui/core';
import BuyCard2 from './buyCard2';
import LiquidityCard2 from './liquidity2'
import dexTileImg from '../../assets/img/tokenomics/petDexTile.png';
import Chart from './chart';
import { useWallet, UseWalletProvider } from 'use-wallet'
import {useState, useEffect} from "react"

function Dex(){
    const wallet = useWallet();
    const [connected, setConnected] = useState(false);
    const [toggleValue, setToggleValue] = useState(0);

    useEffect(() => {
        if(wallet.status=="connected"){
            setConnected(true);
        }
        else {
            setConnected(false);
        }
    }, [wallet.status])

    const handleToggleSwap = ()=>{
        setToggleValue(0);
    }

    const handleToggleLiquidity = ()=>{
        setToggleValue(1);
    }

    const PetswapText = (
        <div className = "x-font1">
            Pet world swap is own exchanger for PetWorldCoin <br />
            It provides low coin price velocity by Liquidity concentrating
        </div>
        )
        
    return(
        <div className = "x-defi-lp">
            <div className = 'x-defi-top-img mb-4'>
                <img src = {dexTileImg} alt = "lp tile" className = "x-topImg" />
            </div>
            <Grid container className = "x-grid2">
                <Grid item xs = {12} sm = {12} md = {6}>

                    {/* toggle*/}
                    <div className = "toggle-buttons">
                        <button className = "swap" onClick = {handleToggleSwap}> Swap</button>
                        <button className = "liquidity" onClick = {handleToggleLiquidity}>Liquidity</button>
                    </div>
                    {/* swap ,liquidity */}
                    {toggleValue==0?
                        <BuyCard2/>:
                        <LiquidityCard2 />
                    }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <Chart title={"Pet Swap"} percent= {50} text = {PetswapText}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dex;