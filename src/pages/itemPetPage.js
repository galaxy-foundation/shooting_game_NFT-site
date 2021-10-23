import React from 'react';
import Nav from '../components/layout/nav';
import ItemContent from '../components/itemPetPage/itemContent';
import Bottom from '../components/nftMarket/bottom';
import {useHistory} from 'react-router-dom';

import {useApplicationContext} from "../contexts"
function PetItemPage(props){
    var router = props.match.params.id;
    const history = useHistory();
    //context data
    const [state] = useApplicationContext();
    var myPetInfos = state.MyPetTokens;

    if(router===undefined||myPetInfos.tokenIds.includes(Number(router))===false){
        console.log("myPetInfos.tokenIds",myPetInfos.tokenIds,router)
        history.push(`/my-items/pets`);
    }

    return(
        <div>
           <Nav />
           {myPetInfos.tokenIds.includes(Number(router))===true?
                <ItemContent router = {router}/>:""
            }
           <Bottom />
        </div>
    )
}

export default PetItemPage;