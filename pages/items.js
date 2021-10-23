import React from 'react';
import Intro from '../components/items/intro';
import ItemContent from '../components/items/itemContent';
import Bottom from '../components/items/bottom';
import {useState, useEffect, useMemo} from 'react'
import { useWallet } from "use-wallet";
import {useApplicationContext} from "../contexts";
import {useHistory} from 'react-router-dom';

function Items(props){
    const wallet = useWallet();
    const history = useHistory();
    
    var router = props.match.params.id;
    console.log("router",router)
    if(router===undefined||router==null){
        history.push("/my-items/eggs")
    }

    return(
        <div>
           <Intro />
           <ItemContent router = {router}/>
           <Bottom />
        </div>
    )
}

export default Items;