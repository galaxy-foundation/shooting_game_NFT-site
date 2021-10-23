import React from 'react';
import Intro from '../components/nftMarket/intro';
import ItemContent from '../components/nftMarket/itemContent';
import Bottom from '../components/nftMarket/bottom';
import {useState, useEffect, useMemo} from 'react'
import { useWallet } from "use-wallet";
import {useApplicationContext} from "../contexts";
import {useHistory} from 'react-router-dom';

function NftMarket(props){
    const wallet = useWallet();
    const history = useHistory();
    
    var router = props.match.params.id;
    console.log("router",router)
    if(router==undefined||router==null){
        history.push("/nft-marketplace/eggs")
    }

    return(
        <div>
           <Intro />
           <ItemContent router = {router}/>
           <Bottom />
        </div>
    )
}

export default NftMarket;