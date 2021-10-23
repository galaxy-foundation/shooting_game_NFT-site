import React from 'react';
import StakeButton from '../home/chocoImgBtn';
import WithdrawButton from '../home/greenImgBtn';
import {useState, useEffect} from "react"
import loadingScreen from "../../assets/img/box.gif";
import {PetWorldCoin, StakingContract2} from "../../contract"
import {ethers} from "ethers";
import { useWallet, UseWalletProvider } from 'use-wallet'
import {Grid} from '@material-ui/core';

function StakeCard(){
    const wallet = useWallet();
    const [connected, setConnected] = useState(false);
    const [balance1, setBalance1] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const [amount, setAmount] = useState(0);

    const [loading, setLoading] = useState(false);

    //conneted state
    useEffect(() => {
        if(wallet.status=="connected"){
            setConnected(true);
        }
        else {
            setConnected(false);
        }
    }, [wallet.status]);

    
    // setTokenaddress
    useEffect(()=>{
        async function getBalances(){
            if(connected){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                var signedPetWorldCoin= PetWorldCoin.connect(signer);
                var userAddress =await signer.getAddress();
                var signedStakingContract = StakingContract2.connect(signer);

                var balance1 =ethers.utils.formatUnits(await signedPetWorldCoin.balanceOf(userAddress));
                var balance2 =ethers.utils.formatUnits(await signedStakingContract.balanceOf(userAddress));
                setBalance1(balance1) ;
                setBalance2(balance2) ;
            }
        }
        getBalances();
    },[connected])

    //handleAmount 
    const handleAmount = async (e)=>{
        setAmount(e.target.value);
    } 

    const stake = async()=>{
        if(connected){
            if(amount>0){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                var signedPetWorldCoin= PetWorldCoin.connect(signer);
                var userAddress =await signer.getAddress();
                var signedStakingContract = StakingContract2.connect(signer);
                
                var BNAmount = ethers.utils.parseUnits(amount.toString());
                //approve 
                var allowance =await signedPetWorldCoin.allowance(userAddress,StakingContract2.address);
                if(allowance<BNAmount) {
                    var tx = await signedPetWorldCoin.approve(StakingContract2.address,BNAmount.mul(100))
                        .catch((err)=>{
                            console.log(err);
                            setLoading(false)
                        });
                    if(tx!=null){
                            await tx.wait();
                            //staking
                            tx =await signedStakingContract.mint(BNAmount).catch((err)=>{
                                console.log(err);
                                setLoading(false)
                            })
                            if(tx!=null){
                                await tx.wait();
                                setLoading(false)
                            }
                    }
                }
                else {
                    //staking
                    tx =await signedStakingContract.mint(BNAmount).catch((err)=>{
                        console.log(err);
                        setLoading(false)
                    })
                    if(tx!=null){
                        await tx.wait();
                        setLoading(false)
                    }
                }
            }
        }
        else {
            alert("please connect wallet")
        }
    }

    const withdraw = async()=>{
        if(connected){
            if(amount>0){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                var signedStakingContract = StakingContract2.connect(signer);
                
                var BNAmount = ethers.utils.parseUnits(amount.toString());
                
                var tx =await signedStakingContract.withdraw(BNAmount).catch((err)=>{
                    console.log(err);
                    setLoading(false)
                })
                if(tx!=null){
                    await tx.wait();
                    setLoading(false)
                }
            }
        }
        else {
            alert("please connect wallet")
        }
    }

    return(
        <div className = "x-defi-stakeCard2" >
            <div className = "text-center x-font2 pt-5">
                Option 2
            </div>
            <div className = "text-center mt-2 margin-bottom">
                <StakeButton text = "Stake" onClick={stake} />
                <WithdrawButton text = "Withdraw" onClick={withdraw} />
            </div>
            <div className = "x-grid4 d-flex  margin-bottom">
                <Grid container >
                    <Grid item xs = {4} sm = {4} md = {4} >
                        <span className = "x-font3 mr-3">Amount</span>
                    </Grid>
                    <Grid item xs = {8} sm = {8} md = {8} >
                        <input type="number" step = {0.1} className = "x-stakeCard-input" value={amount} onChange = {handleAmount} />
                    </Grid>
                </Grid>
            </div>
            <div className = "x-grid4 d-flex  margin-bottom">
                <Grid container >
                    <Grid item xs = {8} sm = {8} md = {8} >
                        <span className = "x-font3 mr-3">APY</span>
                    </Grid>
                    <Grid item xs = {4} sm = {4} md = {4} >
                    <span className = "x-font3 mr-3">30%</span>
                    </Grid>
                </Grid>
            </div>
            <div className = "x-grid4 d-flex margin-bottom">
                <Grid container >
                    <Grid item xs = {6} sm = {6} md = {6} >
                        <span className = "x-font3 mr-3">PetWorldCoin</span>
                    </Grid>
                    <Grid item xs = {6} sm = {6} md = {6} >
                    <span className = "x-font3 mr-3">{Number(balance1).toFixed(2)}</span>
                    </Grid>
                </Grid>
            </div>
            <div className = "x-grid4 d-flex margin-bottom">
                <Grid container >
                    <Grid item xs = {6} sm = {6} md = {6} >
                        <span className = "x-font3 mr-3">SP</span>
                    </Grid>
                    <Grid item xs = {6} sm = {6} md = {6} >
                    <span className = "x-font3 mr-3">{Number(balance2).toFixed(2)}</span>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default StakeCard;