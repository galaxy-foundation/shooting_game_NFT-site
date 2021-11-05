import React from 'react';
import { useWallet, UseWalletProvider } from 'use-wallet'
import {useState, useEffect} from "react"
import {Grid} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import SwapForm from './swapform';
import loadingScreen from "../../assets/img/box.gif";

import {PetSwapRouterContract, PetSwapFactoryContract, PetWorldCoin, WBNBAddress, PetSwapPair} from "../../contract"
import {ethers} from "ethers";

function BuyCard2(){
    const wallet = useWallet();
    const [connected, setConnected] = useState(false);
    const [token1, setToken1] = useState("ATRI");
    const [token2, setToken2] = useState("BNB");
    const [tokenAddress1, setTokenAddress1] = useState("");
    const [tokenAddress2, setTokenAddress2] = useState("");
    const [balance1, setBalance1] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);

    const [focus,setFocus] = useState(1);
    
    const [loading, setLoading] = useState(false);

    const [error,setError] = useState(false);

    //test
    useEffect(()=>{
        async function getData() {
            var reserves =await PetSwapPair.getReserves();
            var vreserves = await PetSwapPair.getVReserves();
            console.log(ethers.utils.formatUnits(reserves[0].toString()),ethers.utils.formatUnits( reserves[1].toString(),18));
            console.log(ethers.utils.formatUnits(vreserves[0].toString()),ethers.utils.formatUnits( vreserves[1].toString(),18));
        }
        // if(connected) 
        //     getData();
    },[connected])

    //conneted state
    useEffect(() => {
        if(wallet.status=="connected"){
            setConnected(true);
        }
        else {
            setConnected(false);
        }
    }, [wallet.status])
  
    // reverse
    const handleReverse = ()=>{
        var temp = token1;
        setToken1(token2);
        setToken2(temp);
        setFocus(focus==1?2:1);
    }

    useEffect(() => {
        if(focus==2){
            setAmount2(amount1)
        }
        else 
            setAmount1(amount2)
    },[focus])

    // setTokenaddress
    useEffect(()=>{
        var tokenAddress1 = token1=="ATRI"? PetWorldCoin.address:WBNBAddress;
        setTokenAddress1(tokenAddress1);

        var tokenAddress2 = token2=="ATRI"? PetWorldCoin.address:WBNBAddress;
        setTokenAddress2(tokenAddress2);

        async function getBalances(){
            if(connected){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                var signedPetWorldCoin= PetWorldCoin.connect(signer);
                var userAddress =await signer.getAddress();

                var balance1 =ethers.utils.formatUnits(await signedPetWorldCoin.balanceOf(userAddress),16);
                var balance2 =ethers.utils.formatUnits(await signer.getBalance());

                setBalance1(token1=="ATRI"? balance1:balance2) ;
                setBalance2(token2=="ATRI"? balance1:balance2) ;

                console.log(balance1.toString(),balance2);
            }
        }
        getBalances();
    },[token1,token2,connected])

    //handleAmount 
    const handleAmount1 = async (e)=>{
        setFocus(1);
        setAmount1(e.target.value);
        console.log(amount1);
    } 

    const handleAmount2 = async (e)=>{
        setFocus(2);
        setAmount2(e.target.value);
        console.log(amount2);
    }

    //handle amount1 change
    useEffect(()=>{
        if(focus==1){
            if(amount1==0)
                setAmount2(0);
            else
                getAmountOut();
        }
    },[amount1])

    //handle amount2 change
    useEffect(()=>{
        if(focus==2){
            if(amount2==0)
                setAmount2(0);
            else
                getAmountIn();
        }
    },[amount2])

    const getAmountIn = async ()=>{

        var path = [tokenAddress1,tokenAddress2];

        var pairData = await PetSwapRouterContract.getAmountsIn(ethers.utils.parseUnits(amount2.toString()),path)
        .catch((err)=>{
            console.log(err);
            setAmount1(0);
        });
        if(pairData!=null){
            setAmount1(ethers.utils.formatUnits(pairData[0]));
        }

    }

    const getAmountOut = async ()=>{
        
        var path = [tokenAddress1,tokenAddress2];
        //PetWorldCoin decimals
        var pairData = await PetSwapRouterContract.getAmountsOut(ethers.utils.parseUnits(amount1.toString()),path)
        .catch((err)=>{
            console.log(err);
            setAmount2(0);
        });
        if(pairData!=null){
            setAmount2(ethers.utils.formatUnits(pairData[1]));
        }

    }

    //handle swap
    const handleSwap = async ()=>{
        if(connected&&error===false){
            setLoading(true);
            if(token1=="ATRI"){
                await swapTokenToBNB().catch(()=>{
                    setLoading(false);
                });
            }
            else {
                await swapBNBToToken().catch(()=>{
                    setLoading(false);
                });
            }
            console.log("handleswap : finish")
        }
    }

    const swapBNBToToken =async ()=>{
        var path = [tokenAddress1,tokenAddress2];

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();
        const signedPetSwapRouterContract = PetSwapRouterContract.connect(signer);
        var userAddress =await signer.getAddress();

        var date=new Date();
        var seconds = Math.floor(date.getTime() / 1000)+1000000;

        var BNBAmount = ethers.utils.parseUnits(amount1.toString());
        var TokenAmount = ethers.utils.parseUnits(amount2.toString());
        
        var tx =await signedPetSwapRouterContract.swapExactETHForTokens(0,path,userAddress,seconds,{value:BNBAmount})
        .catch((err)=>{
            setLoading(false);
            console.log(err);
        })

        if(tx!=null){
            await tx.wait();
            setLoading(false);
        }

    }

    const swapToToken = async ()=>{

        var path = [tokenAddress1,tokenAddress2];

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();
        const signedPetSwapRouterContract = PetSwapRouterContract.connect(signer);
        var userAddress =await signer.getAddress();

        var date=new Date();
        var seconds = Math.floor(date.getTime() / 1000)+1000000;

        var TokenAmount = ethers.utils.parseUnits(amount1.toString());
        
        console.log("Swap to Eth",TokenAmount,0,path,userAddress,seconds)
        var tx =await signedPetSwapRouterContract.swapExactTokensForETH(TokenAmount,0,path,userAddress,seconds)
        .catch((err)=>{
            setLoading(false);
            console.log(err);
        })

        if(tx!=null){
            await tx.wait();
            setLoading(false);
        }
    }

    const swapTokenToBNB =async ()=>{

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();
        var signedPetWorldCoin= PetWorldCoin.connect(signer);
        var userAddress =await signer.getAddress();

        var liquidityCoinAmount = ethers.utils.parseUnits(amount1.toString());
        
        //approve 
        var allowance =await signedPetWorldCoin.allowance(userAddress,PetSwapRouterContract.address);
        if(allowance<liquidityCoinAmount) {
            var tx = await signedPetWorldCoin.approve(PetSwapRouterContract.address,liquidityCoinAmount.mul(100))
                .catch((err)=>{
                    console.log(err);
                    setLoading(false)
                });
            if(tx!=null){
                await tx.wait();
                swapToToken();
            }
        }
        else {
            swapToToken();
        }
    }

    useEffect(()=>{
        console.log(balance1,amount1.toString());
        if(Number(balance1)<Number(amount1))
            {
                setError(true);
            }
        else setError(false)
    },[amount1])


    return(
        <div className = "x-defi-buyCard2">
            <div className = "text-center x-font2 pt-5 swap-title-1">
                Pet World Swap 
            </div>
            <SwapForm token = {token1} from = "From" tokenAddress = {tokenAddress1} balance = {balance1} amount = {amount1} handleAmount = {handleAmount1}/>
            <div className = "text-center">
                <IconButton color="primary" aria-label="upload picture" component="span" onClick = {handleReverse}>
                    <ArrowDownwardIcon style = {{color: "white"}}/>
                </IconButton>
            </div>
            <SwapForm token = {token2} from = "To" tokenAddress = {tokenAddress2} balance = {balance2} amount = {amount2} handleAmount = {handleAmount2}/>
            
            <div className = "text-center padding-top">
                <button className = "swap-button" onClick = {handleSwap}>{loading?<img src ={loadingScreen}  width = "40px" alt= "loading"/>:error==true?"Insufficient balance":"Swap"}</button>
            </div>
        </div>
    )
}

export default BuyCard2;