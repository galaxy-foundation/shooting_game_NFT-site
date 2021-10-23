import React from 'react';
import {Grid} from '@material-ui/core';
import ItemCard from './breedItemCard';
import tempImg from '../../assets/img/nftMarket/pets/unknown.png'
import breedImg from '../../assets/img/items/breed.png'
import {useEffect,useState,useMemo} from 'react'
import {useApplicationContext} from "../../contexts"
import AlertModal from "../alertModal"
import { useWallet } from 'use-wallet'
import {PetContract,PetWorldCoin,MarketPlaceContract} from "../../contract"
import {ethers} from "ethers";

function TempCard(){
    return(
        <div className = "x-nft-itemCard">
            <img src = {tempImg} alt = "nft-item" width = "100%" style = {{borderRadius: "5px",}}/>
            <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">PET </span>
                    <span className = "x-font6 color-blue"> AGE</span>
                    <span className = "x-font6 color-blue">(breeded)</span>
                    <span className = "x-font6 float-right">GENE </span>
                </div>
                <div className = "mt-2">
                <span className = "x-font6 ">Genome </span>
                <span className = "x-font6 float-right">**** </span>
                </div>
            </div>
        </div>
    )
}
function BreedContents(){
    const [state,{tokenUpdates}] = useApplicationContext();
    var myPetInfos = state.MyPetTokens;

    const wallet = useWallet();
    const [loading, setLoading] = useState(false);
    
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
    const [alertOpen, setAlertOpen] = useState(false);

    const [breedIds, setBreedIds] = useState([-1,-1]);
    //eggInfo
    useEffect(() =>{
    },[])

    const handleClose = ()=>{
        setAlertOpen(false);
    }

    const selectPet = (index)=>{
        if(breedIds[0]===-1){
            setBreedIds([index,breedIds[1]]);
        }
        else if(breedIds[1]===-1){
            setBreedIds([breedIds[0],index]);
        }
    }

    const unselectPet = (index)=>{
        if(index===0){
            setBreedIds([-1,breedIds[1]]);
        }
        else {
            setBreedIds([breedIds[0],-1]);
        }
    }
 
    const handleBreed =async ()=>{
        if(wallet.status === "connected"){
            setLoading(true);
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer =await provider.getSigner();
            var userAddress =await signer.getAddress();

            //sigend contracts
            var signedPetWorldCoin = PetWorldCoin.connect(signer);

            var Price = ethers.utils.parseUnits("20");
            //allowance check
            var allowance =await signedPetWorldCoin.allowance(userAddress,PetContract.address);

            if(Number(allowance.toString())<Number(Price.toString())) {
                var tx = await signedPetWorldCoin.approve(PetContract.address,Price.mul(10))
                    .catch((err)=>{
                        setAlertInfos({title:"Approve rejected",info:"user denied approve"});
                        setAlertOpen(true);
                        setLoading(false)
                    });
                if(tx!=null){
                    await tx.wait();
                    bread();
                }
            }
            else {
                bread();
            }
            
        }
    }

    const bread =async ()=>{
        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();

        //sigend contracts
        var signedPetContract = PetContract.connect(signer);
        var tx = await signedPetContract.breed(breedIds[0],breedIds[1])
        .catch((err)=>{
            console.log(alertOpen,err)
            setAlertInfos({title:"bread Error",info:"Please check petworldcoin balance!"});
            setAlertOpen(true);
            setLoading(false);
        })
        if(tx!=null){
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[1];
            setAlertInfos({title:"Success!",info:`you get new Pet with Id ${id}`});
            setAlertOpen(true);
            setLoading(false);
            tokenUpdates();
        }
        setLoading(false);
    }

    const BreedCard = ()=>{
        return(
            <div className = "x-breed-card">
                <img src= {breedImg} alt="BREED" onClick={handleBreed}/>
            </div>
            )
    }

    return(
        <div className = "mb-5">
        <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <Grid container spacing = {3} className = "x-grid5">
                <Grid item xs = {12} sm = {12} md = {2}></Grid>
                <Grid item xs = {12} sm = {4} md = {3}>
                    {breedIds[0]===-1?<TempCard />:<ItemCard id = {breedIds[0]} onClick = {()=>{unselectPet(0)}}/>}
                </Grid>
                <Grid item xs = {12} sm = {4} md = {2}>
                    <BreedCard />
                </Grid>
                <Grid item xs = {12} sm = {4} md = {3}>
                    {breedIds[1]===-1?<TempCard />:<ItemCard id = {breedIds[1]} onClick = {()=>{unselectPet(1)}} />}
                </Grid>
                <Grid item xs = {12} sm = {12} md = {2}></Grid>
            </Grid>
            <div className = "spacer-2"></div>
            <Grid container spacing = {3} className = "x-grid5">
            {myPetInfos.owners.map((creator, index)=>{
                return (
                    <Grid key={index} item xs = {12} sm = {6} md = {3}>
                        <ItemCard id = {index} onClick={selectPet}/>
                    </Grid>   
                )
            })}
               
            </Grid>
        </div>
    )
}

export default BreedContents;