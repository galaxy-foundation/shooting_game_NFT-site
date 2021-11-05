import React from 'react';
import {Grid} from '@material-ui/core';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"
import LoadingImg from "../../assets/img/box.gif"
import AlertModal from "../alertModal"
import {useHistory} from 'react-router-dom';

import OnsaleCard from "./onsaleCard";
  
function ItemContent(props){
    var id = props.router;
    
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
    const [alertOpen, setAlertOpen] = useState(false);
    const [onsaleAlertOpen, setOnsaleAlertOpen] = useState(false);
    
    //context data
    
    const [state] = useApplicationContext();
    var MyWeaponTokens = state.MyWeaponTokens;
    
    if(MyWeaponTokens.tokenURIs[id] === undefined) {
        console.log(MyWeaponTokens.tokenURIs[id])
        history.push(`/my-items/items`);
    }
    const tokenURI = MyWeaponTokens.tokenURIs
        ? JSON.parse(MyWeaponTokens.tokenURIs[id])
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
        tokenID : MyWeaponTokens.tokenIDs?MyWeaponTokens.tokenIDs[id]:""
    };
    
    const handleClose = ()=>{
        setAlertOpen(false);
    }
    
    const handleOnsaleClose = ()=>{
        setOnsaleAlertOpen(false);
    }

    //layout
    const InfoField = (props)=>{
        const {title,info} = props;
        return(
            <div className = "x-buyCard-infoField-1">
                <Grid container >
                    <Grid item xs={5} sm={5} md={6}>
                        <span className = "y-font1-bold">{title}</span>
                    </Grid>
                    <Grid item xs={7} sm={7} md={6}>
                        <span className = "y-font1-bold">{info}</span>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const handleOnsale = ()=>{
        setOnsaleAlertOpen(true);
    }

    return(
        <div className = "x-weaponCreatePage">
        
            <AlertModal title = {"ON SALE"} info = {<OnsaleCard tokenID = {tokenID}/>} open = {onsaleAlertOpen} handleClose = {handleOnsaleClose}/>
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className = "BuyCard-infos">
                    <div className = "x-BuyCard-InfoList">
                        <InfoField title = "Name" info = {title}/>
                        <InfoField title = "damage" info = {damage}/>
                        <InfoField title = "Accurancy" info = {Accurancy}/>
                        <InfoField title = "FireRate" info = {FireRate}/>
                        <InfoField title = "Range" info = {Range}/>
                        <InfoField title = "ReloadTime" info = {ReloadTime}/>
                        <InfoField title = "Weight" info = {Weight}/>
                        <InfoField title = "Name" info = {title}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className = "x-nft-item-image">
                        <video
                        autoPlay
                        loop
                        muted
                        alt="nft-item"
                        width="100%"
                        style={{ borderRadius: "5px" }}
                        >
                            {/*<source src={img} type="video/mp4" />*/} 
                        </video>
                    </div>
                    <div className = "x-buyCard-button-field-pet">
                        <button className = "x-buyCard-button" onClick={handleOnsale}>{loading===true?(<img src ={LoadingImg} alt = "loading" width = "60px"/>):"onSale"}</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemContent;