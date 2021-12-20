import React from 'react';
import {Grid} from '@material-ui/core';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"
import LoadingImg from "../../assets/img/box.gif"
import AlertModal from "../alertModal"
import {useHistory} from 'react-router-dom';

import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { AtariToken, WeaponNFT, MarketPlace } from "../../contract";

import {delay} from "../utils";
import cover_image from "../../assets/img/shooting/cover_image.jpg"

function ItemContent(props){
    var id = props.router;
    
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
    const [alertOpen, setAlertOpen] = useState(false);
    const [onsaleAlertOpen, setOnsaleAlertOpen] = useState(false);
    const [signer , setSigner] = useState();
    const [userAddress , setUserAddress] = useState();
    const [bidPrice, setBidPrice] = useState(1);
	const [state,{tokenUpdates}] = useApplicationContext();

	//wallet provider
	const wallet = useWallet();
    useEffect(()=>{
        const getSigner =  async ()=>{
            if(wallet.status === "connected"){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                setSigner(signer);
                var userAddress =await signer.getAddress();
                setUserAddress(userAddress);
            }
        }

        getSigner()
    },[wallet.status])
    //context data
    
    var myMARKETWeaponTokens = state.MyMARKETWeaponTokens;
    
    if(myMARKETWeaponTokens.tokenURIs[id] === undefined) {
        console.log(myMARKETWeaponTokens.tokenURIs[id])
        history.push(`/my-items/items`);
    }
    const tokenURI = myMARKETWeaponTokens.tokenURIs
        ? JSON.parse(myMARKETWeaponTokens.tokenURIs[id])
        : {};

    const {
        img,title,tokenID,bid,bidHistory,damage,Accurancy,
        FireRate,Range,ReloadTime,Weight
    } = 
        {
        img : tokenURI["image"],
        title : tokenURI["name"],
        damage : tokenURI["Damage"],
        Accurancy : tokenURI["Accurancy"],
        FireRate : tokenURI["FireRate"],
        Range : tokenURI["Range"],
        ReloadTime : tokenURI["ReloadTime"],
        Weight : tokenURI["Weight"],
        tokenID : myMARKETWeaponTokens.tokenIDs?myMARKETWeaponTokens.tokenIDs[id]:"",
        bid : myMARKETWeaponTokens.bids?myMARKETWeaponTokens.bids[id]:"",
        bidHistory : myMARKETWeaponTokens.bidHistorys?myMARKETWeaponTokens.bidHistorys[id]:""
        };
    
    const handleClose = ()=>{
        setAlertOpen(false);
    }
    

    const acceptBid = async () => {
        if(wallet.status === "connected" && bid !== undefined) 
        try {
            var weaponPrice = bid[3];
            var signedMarketPlace = MarketPlace.connect(signer);
            var tx = await signedMarketPlace.acceptBid(WeaponNFT.address,tokenID,weaponPrice);
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[1];
            setAlertInfos({title:"Success!",info:`you accept bid for Weapon with Id ${String(id)}`});
            setAlertOpen(true);
            setLoading(false);
            tokenUpdates()

            await delay(2000);
            history.push(`/nft-marketplace/weapons`);
            
        }catch (err) {
            let errMSG = err.data&&err.data.message?err.data.message:"Accept weapon failed";
            setAlertInfos({title:"Failed!",info:errMSG});
            setAlertOpen(true);
            setLoading(false);
            setLoading(false);
            console.log("Create Weapon failed");
        }
    }

    
    const cancelOrder = async () => {
        if(wallet.status === "connected" && bid !== undefined) 
        try {
            var signedMarketPlace = MarketPlace.connect(signer);
            var tx = await signedMarketPlace.cancelOrder(WeaponNFT.address,tokenID);
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[0];
            setAlertInfos({title:"Success!",info:`you cancel Order Weapon with Id ${String(id)}`});
            setAlertOpen(true);
            setLoading(false);
            tokenUpdates()

            await delay(2000);
            history.push(`/nft-marketplace/weapons`);
            
        }catch (err) {
            let errMSG = err.data&&err.data.message?err.data.message:"Cancel weapon failed";
            setAlertInfos({title:"Failed!",info:errMSG});
            setAlertOpen(true);
            setLoading(false);
            setLoading(false);
            console.log("Create Weapon failed");
        }
    }


    //layout
    const InfoField = (props)=>{
        const {title,info} = props;
        return(
            <div className = "x-buyCard-infoField">
                <Grid container >
                    <Grid item xs={5} sm={5} md={6}>
                        <span className = "y-font1-bold">{title}</span>
                    </Grid>
                    <Grid item xs={7} sm={7} md={6}>
                        <span className = "y-font2-bold">{info}</span>
                    </Grid>
                </Grid>
            </div>
        )
    }


    const [isImgLoading, setImgLoading] = useState(true);

    return(
        <div className = "x-weaponCreatePage">
        
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <Grid container>
                
                <Grid item xs={12} sm={12} md={6}>
                    <div className = "x-nft-item-image">
                    <img
                        src={cover_image}
                        className="video-thumb tiny"
                        alt="thumb"
                        style={{ opacity: isImgLoading ? 1 : 0 }}
                    />
                    {/*<video
                        autoPlay
                        loop
                        muted
                        alt="nft-item"
                        width="100%"
                        style={{ borderRadius: "5px" ,opacity: isImgLoading ? 0 : 1 }}
                        onLoadedData={() => {
                            setImgLoading(false)
                        }}
                        src={img}
                        type="video/mp4"
                        className="video"
                    />*/}
                    </div>
                    <div className = "x-buyCard-button-field-pet">
                        <button className = "x-buyCard-button" onClick={acceptBid}>{loading===true?(<img src ={LoadingImg} alt = "loading" width = "60px"/>):"Accep"}</button>
                    </div>
                    <div className = "x-buyCard-button-field-pet">
                        <button className = "x-buyCard-button" onClick={cancelOrder}>{loading===true?(<img src ={LoadingImg} alt = "loading" width = "60px"/>):"Cancel"}</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className = "BuyCard-infos">
                    <div className = "x-BuyCard-InfoList height-3">
                        <InfoField title = "Name" info = {title}/>
                        <InfoField title = "damage" info = {damage}/>
                        <InfoField title = "Accurancy" info = {Accurancy}/>
                        <InfoField title = "FireRate" info = {FireRate}/>
                        <InfoField title = "Range" info = {Range}/>
                        <InfoField title = "ReloadTime" info = {ReloadTime}/>
                        <InfoField title = "Weight" info = {Weight}/>
                    </div>
                    <div className = "x-BuyCard-InfoList height-3  border-top">
                        {bidHistory?<InfoField title = "Name " info = {title}/>:""}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemContent;