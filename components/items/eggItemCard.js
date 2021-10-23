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
    const images = state.EGGINFO;
    var myEggInfos = state.MyEggTokens;

    //egg Data
    const eggType = myEggInfos._eggTypes[id].toString();
    const [eggData,setEggData] = useState({});
    
    useEffect(() =>{
        var img = images[eggType].img;
        var title = images[eggType].title;
        var gene = myEggInfos._gene[id];
        var tokenID = myEggInfos.tokenIds;
        
        const GENOME = "ACGT";

        var mgenome = "";
        var fgenome = "";
        //genome
        for(var i = 0; i < 4; i++){
            mgenome += GENOME.charAt(myEggInfos._mGenome[id][i]);
            fgenome += GENOME.charAt(myEggInfos._fGenome[id][i]);
        }

        var genome = mgenome;

        setEggData({img,title,genome,gene,tokenID})
    },[])

    const handleClick = () => {
        history.push(`/my-items/eggs/${eggData.tokenID[id]}`);
    }
    return(
        <div className = "x-nft-itemCard" onClick = {handleClick}>
            <img src = {eggData.img} alt = "nft-item" width = "100%" style = {{borderRadius: "5px",}}/>
            <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">{eggData.title}</span>
                    <span className = "x-font6 float-right">GENE {eggData.gene}</span>
                </div>
                <div className = "mt-2">
                <span className = "x-font6 ">Genome </span>
                <span className = "x-font6 float-right">{eggData.genome} </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;