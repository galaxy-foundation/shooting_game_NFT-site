import React from 'react';
import {Grid} from '@material-ui/core';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"
import { useWallet } from 'use-wallet'
import {ethers} from 'ethers';
// import {PetWorldCoin,EggContract} from "../../contract"
import LoadingImg from "../../assets/img/box.gif"
import AlertModal from "../alertModal"

function ItemContent(props){
    const tokenID = props.router;
    const [loading, setLoading] = useState(false);
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
    const [alertOpen, setAlertOpen] = useState(false);
    //wallet provider
    const wallet = useWallet();

    
    //context data
    const [state,{eggTokenUpdate,petTokenUpdate}] = useApplicationContext();
    const images = state.EGGINFO;
    var myEggInfos = state.MyEggTokens;
    
    var id = myEggInfos.tokenIds.indexOf(Number(tokenID));

    //egg Data
    const eggType = myEggInfos._eggTypes[id].toString();
    const [eggData,setEggData] = useState({});

    useEffect(() =>{
        var img = images[eggType].img;
        var title = images[eggType].title;
        var gene = myEggInfos._gene[id];
        var mID = myEggInfos._mID[id].toString();
        var fID = myEggInfos._fID[id].toString();
        
        const GENOME = "ACGT";

        var mgenome = "";
        var fgenome = "";
        //genome
        for(var i = 0; i < 80; i++){
            if(i%20===0){
                mgenome +=" " ;
                fgenome +=" ";
            }
            mgenome += GENOME.charAt(myEggInfos._mGenome[id][i]);
            fgenome += GENOME.charAt(myEggInfos._fGenome[id][i]);
        }

        var genome = mgenome+fgenome;

        setEggData({img,title,genome,gene,mID,fID})
    },[])

    const handleClose = ()=>{
        setAlertOpen(false);
    }
    

    const handleBorn = async() => {
        if(wallet.status === "connected"){
            
        setLoading(true);

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();

        //sigend contracts
        var signedEggContract = EggContract.connect(signer);
        var tx = await signedEggContract.born(tokenID)
        .catch((err)=>{
            setAlertInfos({title:"Born Error",info:"OOPS, Something is wrong!"});
            setAlertOpen(true);
            setLoading(false);
        })
        if(tx!=null){
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[1];
            setAlertInfos({title:"Success!",info:`you get new Pet with Id ${id}`});
            setAlertOpen(true);
            await eggTokenUpdate();
            await petTokenUpdate();
            setLoading(false);
        }
        setLoading(false);
    }
    }

    const InfoField = (props)=>{
        const {title,info} = props;
        return(
            <div className = "x-buyCard-infoField">
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

    const handleGenomeShow = ()=>{
        setAlertInfos({title:"GENOME",info:eggData.genome});
        setAlertOpen(true);
    }

    const ShowFullGenome = (props) =>{
        const {data,onClick} = props;
        return (
            <div>
                <span className = "link-button" onClick = {onClick}>{data}
                </span>
            </div>
        )
    }
    
    
    return(
        <div className = "x-weaponCreatePage">
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className = "x-nft-item-image">
                        <img src = {eggData.img} alt = "nft-item" width = "100%" style = {{borderRadius: "10px"}}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className = "BuyCard-infos">
                    <div className = "x-BuyCard-InfoList">
                        <InfoField title = "Category" info = {eggData.title}/>
                        <InfoField title = "Genome" info = {<ShowFullGenome data = {eggData.genome!==undefined?eggData.genome.slice(0,8)+"..":""} onClick = {handleGenomeShow}/>}/>
                        <InfoField title = "Gene" info = {eggData.gene}/>
                        <InfoField title = "MID" info = {eggData.mID}/>
                        <InfoField title = "FID" info = {eggData.fID}/>
                    </div>
                    <div className = "x-buyCard-button-field">
                        <button className = "x-buyCard-button" onClick={handleBorn}>{loading===true?(<img src ={LoadingImg} alt = "loading" width = "60px"/>):"Born"}</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemContent;