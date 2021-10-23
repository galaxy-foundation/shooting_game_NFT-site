import React,{useEffect,useState,useMemo} from 'react';
import itemImg from '../../assets/img/nftMarket/item1.jpg';
import avatarImg from '../../assets/img/nftMarket/avatar.jpg';
import {useHistory} from 'react-router-dom';
import {useApplicationContext} from "../../contexts"

function ItemCard(props){
    const {id} = props;
    const history = useHistory();

    //context data
    const [state] = useApplicationContext();
    var myPetInfos = state.MyPetTokens;

    //egg Data
    const [petData,setPetData] = useState({});
    
    useEffect(() =>{
        var img = myPetInfos.img[id];
        var gene = myPetInfos._gene[id];
        var tokenID = myPetInfos.tokenIds[id];
        var name = myPetInfos.names[id];
        
        const GENOME = "ACGT";

        var mgenome = "";
        //genome
        for(var i = 0; i < 4; i++){
            mgenome += GENOME.charAt(myPetInfos._mGenome[id][i]);
        }

        var genome = mgenome;

        setPetData({img,genome,gene,tokenID,name})
    },[])

    const handleClick = () => {
        history.push(`/my-items/pets/${petData.tokenID}`);
    }
    return(
        <div className = "x-nft-itemCard" onClick = {handleClick}>
            <img src = {petData.img} alt = "nft-item" width = "100%" style = {{borderRadius: "5px",}}/>
            <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">{petData.name}</span>
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