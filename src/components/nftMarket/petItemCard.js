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
    var marketplacePetInfos = state.MARKETPetTokens;

    //egg Data
    const [petData,setPetData] = useState({});
    
    useEffect(() =>{
        var img = marketplacePetInfos.img[id];
        var gene = marketplacePetInfos._gene[id];
        var tokenID = marketplacePetInfos.tokenIds[id];
        var name = marketplacePetInfos.names[id];
        
        const GENOME = "ACTG";

        var mgenome = "";
        var fgenome = "";
        //genome
        for(var i = 0; i < 4; i++){
            mgenome += GENOME.charAt(marketplacePetInfos._mGenome[id][i]);
            fgenome += GENOME.charAt(marketplacePetInfos._fGenome[id][i]);
        }

        var genome = mgenome;

        setPetData({img,genome,gene,tokenID,name})
    },[])

    const handleClick = () => {
        history.push(`/nft-marketplace/pets/${petData.tokenID}`);
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