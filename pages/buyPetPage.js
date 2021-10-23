import React from 'react';
import Intro from '../components/nftMarket/intro';
import Nav from '../components/layout/nav';
import ItemContent from '../components/buyPetPage/itemContent';
import Bottom from '../components/nftMarket/bottom';
import {useState, useEffect, useMemo} from 'react'
import { useWallet } from "use-wallet";
import {useApplicationContext} from "../contexts";
import {useHistory} from 'react-router-dom';

function EggBuyPage(props){
    const history = useHistory();
    
    var router = props.match.params.id;
    
    const [state] = useApplicationContext();
    var myMarketplacePetInfos = state.MARKETPetTokens;
    if(router===undefined||router==null||myMarketplacePetInfos.tokenIds.includes(Number(router))===false){
        history.push("/nft-marketplace/pets")
    }

    return(
        <div>
           <Nav />
           {
               myMarketplacePetInfos.tokenIds.includes(Number(router))===true?
                <ItemContent router = {router}/>:""
            }
           <Bottom />
        </div>
    )
}

export default EggBuyPage;