import React from 'react';
import Nav from '../components/layout/nav';
import ItemContent from '../components/itemEggPage/itemContent';
import Bottom from '../components/nftMarket/bottom';
import {useHistory} from 'react-router-dom';

import {useApplicationContext} from "../contexts"
function EggItemPage(props){
    var router = props.match.params.id;
    const history = useHistory();
    //context data
    const [state] = useApplicationContext();
    var myEggInfos = state.MyEggTokens;

    if(router===undefined||myEggInfos.tokenIds.includes(Number(router))===false){
        console.log("myEggInfos.tokenIds",myEggInfos.tokenIds,router)
        history.push(`/my-items/eggs`);
    }

    return(
        <div>
           <Nav />
           {myEggInfos.tokenIds.includes(Number(router))===true?
                <ItemContent router = {router}/>:""
            }
           <Bottom />
        </div>
    )
}

export default EggItemPage;