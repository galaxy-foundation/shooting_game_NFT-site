import React from 'react';
import {Grid} from '@material-ui/core';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"
import { useWallet } from 'use-wallet'
import {ethers} from 'ethers';
import {PetContract} from "../../contract"
import LoadingImg from "../../assets/img/box.gif"
import AlertModal from "../alertModal"
import {useHistory} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import OnsaleCard from "./onsaleCard";
  
function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);


function ItemContent(props){
    
    const history = useHistory();
    const tokenID = props.router;
    const [loading, setLoading] = useState(false);
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
    const [alertOpen, setAlertOpen] = useState(false);
    const [onsaleAlertOpen, setOnsaleAlertOpen] = useState(false);
    const [ageUpTimer ,setAgeUpTimer] = useState(0);
    //wallet provider
    const wallet = useWallet();

    
    //context data
    const [state,{eggTokenUpdate,petTokenUpdate}] = useApplicationContext();
    var myPetInfos = state.MyPetTokens;
    
    var id = myPetInfos.tokenIds.indexOf(Number(tokenID));

    //Pet Data
    const [eggData,setEggData] = useState({});
    const [age, setAge] = useState(0);
    const [ageUpTime,setAgeUpTime] =useState(0);
    const [ex, setEx] = useState(0);
    const [level,setLevel] = useState(0);
    const [prize,setPrize] = useState(0);

    useEffect(() =>{
        var img = myPetInfos.img[id];
        var gene = myPetInfos._gene[id];
        var name = myPetInfos.names[id];
        var mID = myPetInfos._mID[id].toString();
        var fID = myPetInfos._fID[id].toString();
        
        const GENOME = "ACTG";

        var mgenome = "";
        var fgenome = "";
        //genome
        for(var i = 0; i < 80; i++){
            if(i%20===0){
                mgenome +=" " ;
                fgenome +=" ";
            }
            mgenome += GENOME.charAt(myPetInfos._mGenome[id][i]);
            fgenome += GENOME.charAt(myPetInfos._fGenome[id][i]);
        }

        var genome = mgenome+fgenome;

        setEggData({img,name,genome,gene,mID,fID})
    },[])

    
    //get Age and ageUpTime
    async function getAge(){
        var age = (await PetContract.ageInfos(tokenID)).toString();
        var ex = Math.pow(Number(age),3/2);
        console.log(ex,age)
        var level = Math.floor(ex/10);
        setLevel(level);
        setEx(ex-level*10);
        setAge(age);
    }

    async function getageUpTime(){
        var latestUpgradeTime = (await PetContract.latestUpgradeTime(tokenID)).toString();
        
        if(ageUpTimer!=null){
            clearInterval(ageUpTimer)
            }

        var timer = setInterval(() => {
            let timeStamp =Number(latestUpgradeTime)-Date.now()/1000;
            if(timeStamp<0)
                timeStamp=0;
            setAgeUpTime(((24*3600-timeStamp)/24/36).toFixed(2));
            }, 2000);

        setAgeUpTimer(timer);
        
    }

    //pet info
    useEffect(() =>{
        getAge();
        getageUpTime();
    },[])

    const handleClose = ()=>{
        setAlertOpen(false);
    }
    
    const handleOnsaleClose = ()=>{
        setOnsaleAlertOpen(false);
    }

    const handleUpgrade = async() => {
        if(wallet.status === "connected"){
            
        setLoading(true);

        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();

        //sigend contracts
        var signedPetContract = PetContract.connect(signer);
        var tx = await signedPetContract.upgrade(tokenID)
        .catch((err)=>{
            setAlertInfos({title:"Upgrade Error",info:"OOPS, Not evolve time!"});
            setAlertOpen(true);
            setLoading(false);
        })
        if(tx!=null){
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let age = sumEvent.args[2];
            setAlertInfos({title:"Success!",info:`Pet upgraded ${age}`});
            setAge(age.toString())
            setAlertOpen(true);
            await petTokenUpdate();
            
            getAge();
            getageUpTime();
            setLoading(false);
        }
        setLoading(false);
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
                        <span className = "y-font1-bold">{info}</span>
                    </Grid>
                </Grid>
            </div>
        )
    }

    //show
    const handleGenomeShow = ()=>{
        setAlertInfos({title:"GENOME",info:eggData.genome});
        setAlertOpen(true);
    }

    const handleBread = ()=>{
        
        history.push(`/my-items/breed`);
    }

 

    const handleOnsale = ()=>{
        setOnsaleAlertOpen(true);
    }

    //info field component
    const ShowFullGenome = (props) =>{
        const {data,onClick} = props;
        return (
            <div>
                <span className = "link-button" onClick = {onClick}>{data}
                </span>
            </div>
        )
    }
    
    const AgeUpButton = (props) =>{
        return (
            <div>
                <button className = "x-itemPetpage-growButton" onClick = {handleUpgrade}>{ageUpTime<100?<CircularProgressWithLabel value = {ageUpTime}/>:"Grow"}</button>
            </div>
        )
    }
    
    const LevelBar = ()=>{
        return (
            <div className = "progressBar">
                <BorderLinearProgress variant="determinate" value={ex*10}/>
            </div>
        );
    }

    return(
        <div className = "x-eggBuyPage">
        
            <AlertModal title = {"ON SALE"} info = {<OnsaleCard tokenID = {tokenID}/>} open = {onsaleAlertOpen} handleClose = {handleOnsaleClose}/>
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className = "BuyCard-infos">
                    <div className = "x-BuyCard-InfoList">
                        <InfoField title = "Name" info = {eggData.name}/>
                        <InfoField title = "Genome" info = {<ShowFullGenome data = {eggData.genome!==undefined?eggData.genome.slice(0,8)+"..":""} onClick = {handleGenomeShow}/>}/>
                        <InfoField title = "Gene" info = {eggData.gene}/>
                        <InfoField title = "FID" info = {eggData.fID}/>
                        <InfoField title = "MID" info = {eggData.mID}/>
                        <InfoField title = "AGE" info = {age}/>
                        <InfoField title = "EVOLVE" info = {<AgeUpButton />}/>
                        <InfoField title = "EX" info = {<LevelBar />}/>
                        <InfoField title = "Level" info = {level}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className = "x-nft-item-image">
                        <img src = {eggData.img} alt = "nft-item" width = "100%" style = {{borderRadius: "10px"}}/>
                    </div>
                    <div className = "x-buyCard-button-field-pet">
                        <button className = "x-buyCard-button" onClick={handleBread}>{loading===true?(<img src ={LoadingImg} alt = "loading" width = "60px"/>):"Bread"}</button>
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