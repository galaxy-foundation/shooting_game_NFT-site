import React from 'react';
import Nav from '../components/layout/nav';
import ItemContent from '../components/myOnsalesPage/itemContent';
import BottomSection from "../components/home/bottom";
import {useHistory} from 'react-router-dom';

import {useApplicationContext} from "../contexts"
function OnsaledItemPage(props){
    var router = props.match.params.id;
    const history = useHistory();
    //context data
    const [state] = useApplicationContext();
    var myMARKETWeaponTokens = state.MyMARKETWeaponTokens;

    if(router===undefined||myMARKETWeaponTokens.tokenIDs[router] === undefined){
        console.log("myMARKETWeaponTokens.tokenIds",myMARKETWeaponTokens.tokenIds,router)
        history.push(`/my-items/onsales`);
    }

    return(
        <div>
           <Nav />
           {myMARKETWeaponTokens.tokenIDs[router] !== undefined?
                <ItemContent router = {router}/>:""
            }
           <BottomSection />
        </div>
    )
}

export default OnsaledItemPage;