import React from 'react';
import ItemContent from '../components/items/itemContent';
import { useWallet } from "use-wallet";
import {useHistory} from 'react-router-dom';
import Nav from "../components/layout/nav";
import BottomSection from "../components/home/bottom";

function Items(props){
    const history = useHistory();
     
    var router = props.match.params.id;
    console.log("router",router)
    if(router===undefined||router==null){
        history.push("/my-items/items")
    }

    return(
        <div>
            <Nav />
            <ItemContent router = {router}/>
            <BottomSection />
        </div>
    )
}

export default Items;