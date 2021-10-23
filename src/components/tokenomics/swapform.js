import React from 'react';
import { useWallet, UseWalletProvider } from 'use-wallet'
import {useState, useEffect} from "react"
import {Grid} from '@material-ui/core';

function SwapForm (props) {
    
    const {token, tokenAddress, balance, from , amount, handleAmount} = props;

    const wallet = useWallet();
    const [connected, setConnected] = useState(false);
    const [styledAmount, setStyledAmount] = useState(0)

    useEffect(()=>{
        if(amount !==0)
            setStyledAmount(parseFloat(Number(amount).toFixed(8)));
        else 
            setStyledAmount(amount)
    },[amount])

    return (
        <div className = "swapForm">
            <Grid container>
                <Grid item xs = {4} sm = {4} md = {4}>
                <span className = "x-font3 mr-3">{from} </span>
                </Grid>
                <Grid item xs = {8} sm = {8} md = {8} className = "text-right x-font3">
                 <span >
                    {parseFloat(Number(balance).toFixed(4))}
                 </span>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs = {12} sm = {12} md = {4}>
                    <span className = "x-font3 mr-3">{token}</span>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {8}>
                    <input type="number" step = {0.1} className = "x-stakeCard-input" value={styledAmount} onChange = {handleAmount} />
                </Grid>
            </Grid>
        </div>
    )
}

export default SwapForm;