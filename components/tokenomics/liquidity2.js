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

function Liquidity2(){
    const wallet = useWallet();
    const [connected, setConnected] = useState(false);
    const [token1, setToken1] = useState("PetWorldCoin");
    const [token2, setToken2] = useState("BNB");
    const [tokenAddress1, setTokenAddress1] = useState("");
    const [tokenAddress2, setTokenAddress2] = useState("");
    const [balance1, setBalance1] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [reserve0,setReserve0] = useState(0);
    const [reserve1,setReserve1] = useState(0);

    const [focus,setFocus] = useState(1);
    
    const [loading, setLoading] = useState(false);

    //test
    useEffect(()=>{
        async function getData() {
            console.log("getData")
            var reserves =await PetSwapPair.getReserves();
            var vreserves = await PetSwapPair.getVReserves();

            setReserve1(ethers.utils.formatUnits(reserves[0].toString()));
            setReserve0(ethers.utils.formatUnits(reserves[1].toString()));

            console.log("reserve",ethers.utils.formatUnits(reserves[0].toString()),ethers.utils.formatUnits( reserves[1].toString(),18));
            console.log(ethers.utils.formatUnits(vreserves[0].toString()),ethers.utils.formatUnits( vreserves[1].toString(),18));
        }
        if(connected)
            getData();  
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
  

    // setTokenaddress
    useEffect(()=>{
        var tokenAddress1 = token1=="PetWorldCoin"? PetWorldCoin.address:WBNBAddress;
        setTokenAddress1(tokenAddress1);

        var tokenAddress2 = token2=="PetWorldCoin"? PetWorldCoin.address:WBNBAddress;
        setTokenAddress2(tokenAddress2);

        async function getBalances(){
            if(connected){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                var signedPetWorldCoin= PetWorldCoin.connect(signer);
                var userAddress =await signer.getAddress();

                var balance1 =ethers.utils.formatUnits(await signedPetWorldCoin.balanceOf(userAddress),16);
                var balance2 =ethers.utils.formatUnits(await signer.getBalance());

                setBalance1(token1=="PetWorldCoin"? balance1:balance2) ;
                setBalance2(token2=="PetWorldCoin"? balance1:balance2) ;

                console.log(balance1.toString(),balance2);
            }
        }
        getBalances();
    },[token1,token2,connected])

    //handleAmount 
    const handleAmount1 = async (e)=>{
        setFocus(1);
        setAmount1(e.target.value);
        if(reserve0!=0&&reserve1!=0){
            setAmount2(e.target.value*reserve1/reserve0);
        }
        console.log(amount1);
    } 

    const handleAmount2 = async (e)=>{
        setFocus(2);
        setAmount2(e.target.value);
        if(reserve0!=0&&reserve1!=0){
            setAmount1(e.target.value*reserve0/reserve1);
        }
        console.log(amount2);
    }

    const handleAddLiquidity = async () =>{
        if(connected){
            
            setLoading(true)
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer =await provider.getSigner();
            var signedPetWorldCoin= PetWorldCoin.connect(signer);
            var userAddress =await signer.getAddress();

            var liquidityCoinAmount = ethers.utils.parseUnits(amount1.toString());
            var liquidityBNBAmount = ethers.utils.parseUnits(amount2.toString());
            
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
                    addLiquidity();
                }
            }
            else {
                addLiquidity();
            }
        }
    }

    const addLiquidity = async ()=>{
        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();
        var signedPetSwapRouterContract = PetSwapRouterContract.connect(signer);

        var liquidityCoinAmount = ethers.utils.parseUnits(amount1.toString());
        var liquidityBNBAmount = ethers.utils.parseUnits(amount2.toString());
        var userAddress =await signer.getAddress();
        
		 var date=new Date();
		 var seconds = Math.floor(date.getTime() / 1000)+1000000;

        var vreserve0 =  ethers.utils.parseUnits("5000");
        var vreserve1 =  ethers.utils.parseUnits("100");

        var tx =await signedPetSwapRouterContract.addLiquidityETH(PetWorldCoin.address,liquidityCoinAmount,0,0,vreserve0,vreserve1,userAddress,seconds,{value:liquidityBNBAmount})
        .catch((err)=>{
            setLoading(false);
        })
        
        if(tx!=null){
            await tx.wait();
            setLoading(false);
        }
    } 

    return(
        <div className = "x-defi-buyCard2">
            <div className = "text-center x-font2 pt-5 swap-title-1">
                Pet World Swap 
            </div>
            <SwapForm token = {token1} from = "Balnace" tokenAddress = {tokenAddress1} balance = {balance1} amount = {amount1} handleAmount = {handleAmount1}/>
            <div className = "spacer"></div>
            <SwapForm token = {token2} from = "Balance" tokenAddress = {tokenAddress2} balance = {balance2} amount = {amount2} handleAmount = {handleAmount2}/>
            
            <div className = "text-center padding-top">
                <button className = "liquidity-button" onClick={handleAddLiquidity} >{loading?<img src ={loadingScreen} width = "40px"/>:"Add Liquidity"}</button>
            </div>
        </div>
    )
}

export default Liquidity2;