import React,{useEffect,useState,useMemo} from 'react';
import itemImg from '../../assets/img/nftMarket/item1.jpg';
import avatarImg from '../../assets/img/nftMarket/avatar.jpg';
import {useHistory} from 'react-router-dom';
import {useApplicationContext} from "../../contexts"
import {PetContract} from "../../contract"
import AlertModal from "../alertModal"

function ItemCard(props){
    const {id,onClick} = props;

    //context data
    const [state] = useApplicationContext();
    var myPetInfos = state.MyPetTokens;

    //egg Data
    const [petData,setPetData] = useState({});
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
    const [alertOpen, setAlertOpen] = useState(false);
    
    useEffect(() =>{
        var img = myPetInfos.img[id];
        var gene = myPetInfos._gene[id];
        var tokenID = myPetInfos.tokenIds[id];
        var name = myPetInfos.names[id];
        var age = myPetInfos.ageInfos._ageInfos[id].toString();
        var latestBreedAge = myPetInfos.ageInfos._latestBreedLevels[id].toString();
        
        const GENOME = "ACGT";

        var mgenome = "";
        var fgenome = "";
        //genome
        for(var i = 0; i < 4; i++){
            mgenome += GENOME.charAt(myPetInfos._mGenome[id][i]);
            fgenome += GENOME.charAt(myPetInfos._fGenome[id][i]);
        }

        var genome = mgenome;

        setPetData({img,genome,gene,tokenID,name,age,latestBreedAge})
    },[])

    const handleClose = ()=>{
    }

    const handleClick = () => {
        //validate
        if(petData.age-petData.latestBreedAge>=10){
            onClick(id);
        }
        else {
            setAlertInfos({title:"Breed Impossible",info:"Pet can only breed once over 10 age"});
            setAlertOpen(!alertOpen);
        }
    }
    return(
        <div className = "x-nft-itemCard" onClick = {handleClick}>
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <img src = {petData.img} alt = "nft-item" width = "100%" style = {{borderRadius: "5px",}}/>
            <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">{petData.name} </span>
                    <span className = "x-font6 color-blue"> {petData.age}</span>
                    <span className = "x-font6 color-blue">({petData.latestBreedAge})</span>
                    <span className = "x-font6 float-right">GENE {petData.gene}</span>
                </div>
                <div className = "mt-2">
                <span className = "x-font6 ">Genome </span>
                <span className = "x-font6 float-right">{petData.genome} </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;