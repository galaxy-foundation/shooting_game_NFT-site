import React from 'react';
import {Grid} from '@material-ui/core';
import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"
import { useWallet } from 'use-wallet'
import {ethers} from 'ethers';
// import {PetContract,PetWorldCoin,MarketPlaceContract} from "../../contract"
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
    const [state,{tokenUpdates}] = useApplicationContext();
    var marketplacePetInfos =state.MARKETPetTokens;
    
    var id = marketplacePetInfos.tokenIds.indexOf(Number(tokenID));
    console.log(marketplacePetInfos,id)
    //Pet Data
    const [eggData,setEggData] = useState({});
    const [age, setAge] = useState(0);
    const [level,setLevel] = useState(0);

    useEffect(() =>{
        var img = marketplacePetInfos.img[id];
        var gene = marketplacePetInfos._gene[id];
        var name = marketplacePetInfos.names[id];
        var mID = marketplacePetInfos._mID[id].toString();
        var fID = marketplacePetInfos._fID[id].toString();
        var owner = marketplacePetInfos.orders[id].seller;
        var price =ethers.utils.formatUnits(marketplacePetInfos.orders[id].price);
        var styledOwner = owner? owner.slice(0,4)+".."+owner.slice(-4):"";

        
        const GENOME = "ACTG";

        var mgenome = "";
        var fgenome = "";
        //genome
        for(var i = 0; i < 80; i++){
            if(i%20===0){
                mgenome +=" " ;
                fgenome +=" ";
            }
            mgenome += GENOME.charAt(marketplacePetInfos._mGenome[id][i]);
            fgenome += GENOME.charAt(marketplacePetInfos._fGenome[id][i]);
        }

        var genome = mgenome+fgenome;

        setEggData({img,name,genome,gene,mID,fID,styledOwner,owner,price})
    },[])

    
    //get Age and ageUpTime
    async function getAge(){
        var age = (await PetContract.ageInfos(tokenID)).toString();
        var ex = Math.pow(Number(age),3/2);
        console.log(ex,age)
        var level = Math.floor(ex/10);
        setLevel(level);
        setAge(age);
    }

    //pet info
    useEffect(() =>{
        getAge();
    },[])

    const handleClose = ()=>{
        setAlertOpen(false);
    }

    const handleBuy = async() => {
        if(wallet.status === "connected"){
            setLoading(true);
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer =await provider.getSigner();
            var userAddress =await signer.getAddress();

            //sigend contracts
            var signedPetWorldCoin = PetWorldCoin.connect(signer);

            var Price = ethers.utils.parseUnits(eggData.price.toString());
            //allowance check
            var allowance =await signedPetWorldCoin.allowance(userAddress,MarketPlaceContract.address);

            if(Number(allowance.toString())<Number(Price.toString())) {
                var tx = await signedPetWorldCoin.approve(MarketPlaceContract.address,Price.mul(10))
                    .catch((err)=>{
                        setAlertInfos({title:"Approve rejected",info:"user denied approve"});
                        setAlertOpen(true);
                        setLoading(false)
                    });
                if(tx!=null){
                    await tx.wait();
                    buyEgg();
                }
            }
            else {
                buyEgg();
            }
            
        }
    }

    const buyEgg = async() => {
        const provider = new ethers.providers.Web3Provider(wallet.ethereum);
        const signer =await provider.getSigner();

        var Price = ethers.utils.parseUnits(eggData.price.toString());
        //sigend contracts
        var signedMarketPlaceContract = MarketPlaceContract.connect(signer);
        var tx = await signedMarketPlaceContract.Buy(PetContract.address,tokenID,Price)
        .catch((err)=>{
            console.log(alertOpen,err)
            setAlertInfos({title:"Buy Error",info:"Please check petworldcoin balance!"});
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

    const handleOwnerShow = ()=>{
        setAlertInfos({title:"OWNER",info:eggData.owner});
        setAlertOpen(true);
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

    
    return(
        <div className = "x-weaponCreatePage">
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className = "BuyCard-infos">
                    <div className = "x-nft-item-image">
                        <img src = {eggData.img} alt = "nft-item" width = "100%" style = {{borderRadius: "10px"}}/>
                    </div>
                    <div className = "x-buyCard-button-field-pet-1">
                            <button className = "x-buyCard-button" onClick={handleBuy}>{loading===true?(<img src ={LoadingImg} alt = "loading" width = "60px"/>):"Buy"}</button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className = "BuyCard-infos">
                    <div className = "x-BuyCard-InfoList">
                        <InfoField title = "Name" info = {eggData.name}/>
                        <InfoField title = "Genome" info = {<ShowFullGenome data = {eggData.genome!==undefined?eggData.genome.slice(0,8)+"..":""} onClick = {handleGenomeShow}/>}/>
                        <InfoField title = "Gene" info = {eggData.gene}/>
                        <InfoField title = "FID" info = {eggData.fID}/>
                        <InfoField title = "MID" info = {eggData.mID}/>
                        <InfoField title = "AGE" info = {age}/>
                        <InfoField title = "Level" info = {level}/>
                        <InfoField title = "Owner" info = {<ShowFullGenome data ={eggData.styledOwner} onClick = {handleOwnerShow} />}/>
                        <InfoField title = "Price" info = {eggData.price+"PWC"}/>                   
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default ItemContent;