import React from 'react';
import StakeButton from '../home/chocoImgBtn';
import WithdrawButton from '../home/greenImgBtn';
import {useState, useEffect} from "react"
import loadingScreen from "../../assets/img/box.gif";
import {PetWorldCoin, StakingContract1} from "../../contract"
import {ethers} from "ethers";
import { useWallet, UseWalletProvider } from 'use-wallet'
import {Grid} from '@material-ui/core';

function StakeCard(){
    const wallet = useWallet();
    const [connected, setConnected] = useState(false);
    const [balance1, setBalance1] = useState(0);
    const [balance2, setBalance2] = useState(0);
    const [lockedTime, setLockedTime] = useState(0);
    const [styledLockedTime, setStyledLockedTime] = useState("");
    const [amount, setAmount] = useState(0);

    const [loading, setLoading] = useState(false);


    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return dDisplay + hDisplay ;
        }

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
                var signedStakingContract = StakingContract1.connect(signer);

                var balance1 =ethers.utils.formatUnits(await signedPetWorldCoin.balanceOf(userAddress));
                var balance2 =ethers.utils.formatUnits(await signedStakingContract.getamount(userAddress));
                setBalance1(balance1) ;
                setBalance2(balance2) ;

                var lockedTime = (await signedStakingContract.getlocktime(userAddress)).toString();
                setLockedTime(lockedTime);
                setStyledLockedTime(secondsToDhms(lockedTime)) ;
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
                var signedStakingContract = StakingContract1.connect(signer);
                
                var BNAmount = ethers.utils.parseUnits(amount.toString());
                //approve 
                var allowance =await signedPetWorldCoin.allowance(userAddress,StakingContract1.address);
                if(allowance<BNAmount) {
                    var tx = await signedPetWorldCoin.approve(StakingContract1.address,BNAmount.mul(100))
                        .catch((err)=>{
                            console.log(err);
                            setLoading(false)
                        });
                    if(tx!=null){
                            await tx.wait();
                            //staking
                            tx =await signedStakingContract.stake(BNAmount).catch((err)=>{
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
                    tx =await signedStakingContract.stake(BNAmount).catch((err)=>{
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
                var signedStakingContract = StakingContract1.connect(signer);
                
                var BNAmount = ethers.utils.parseUnits(amount.toString());
                
                var tx =await signedStakingContract.withdraw().catch((err)=>{
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
        <div className = "x-defi-stakeCard1">
            <div className = "text-center x-font2 pt-5">
                Option 1
            </div>
            <div className = "text-center mt-2 margin-bottom">
                {Number(balance2)==0?
                    <StakeButton text = "Stake" onClick={stake} />
                    :Number(lockedTime)==0?<WithdrawButton text = "Withdraw" onClick={withdraw} />
                    :<span className = "x-font3">Plese wait for a locked period </span>
                }
            </div>
           {Number(balance2)==0?
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
            :""
            }    
            <div className = "x-grid4 d-flex  margin-bottom">
                <Grid container >
                    <Grid item xs = {8} sm = {8} md = {8} >
                        <span className = "x-font3 mr-3">APY</span>
                    </Grid>
                    <Grid item xs = {4} sm = {4} md = {4} >
                    <span className = "x-font3 mr-3">120%</span>
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
                        <span className = "x-font3 mr-3">Staked</span>
                    </Grid>
                    <Grid item xs = {6} sm = {6} md = {6} >
                    <span className = "x-font3 mr-3">{Number(balance2).toFixed(2)}</span>
                    </Grid>
                </Grid>
            </div>
            
           {Number(balance2)>0?
            <div className = "x-grid4 d-flex margin-bottom">
                <Grid container >
                    <Grid item xs = {6} sm = {6} md = {6} >
                        <span className = "x-font3 mr-3">Locked Time</span>
                    </Grid>
                    <Grid item xs = {6} sm = {6} md = {6} >
                    <span className = "x-font3 mr-3">{styledLockedTime}</span>
                    </Grid>
                </Grid>
            </div>
            :""}
        </div>
    )
}

export default StakeCard;