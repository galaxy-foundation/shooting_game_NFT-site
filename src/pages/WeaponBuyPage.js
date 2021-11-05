import React from 'react';
import Intro from '../components/nftMarket/intro';
import Nav from '../components/layout/nav';
import ItemContent from '../components/buyWeaponPage/itemContent';
import BottomSection from "../components/home/bottom";
import {useApplicationContext} from "../contexts";
import {useHistory} from 'react-router-dom';

function BuyWeaponPage(props){
    const history = useHistory();
    
    var router = props.match.params.id;
    
    const [state] = useApplicationContext();
    var marketWeaponTokens = state.MARKETWeaponTokens;
    if(router===undefined||router==null||marketWeaponTokens.tokenIDs[router] === undefined){
        history.push("/nft-marketplace/weapons")
    }

    return(
        <div>
           <Nav />
           {
               marketWeaponTokens.tokenIDs[router] !== undefined?
                <ItemContent router = {router}/>:""
            }
           <BottomSection />
        </div>
    )
}

export default BuyWeaponPage;