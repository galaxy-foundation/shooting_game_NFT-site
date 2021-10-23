import React from 'react';
import ChocoButton from './smallChoco';
import {useHistory} from 'react-router-dom';

import EggContents from "./eggContents";
import PetContents from "./petContents";

function ItemContent(props){
    const status = props.router;

    const history = useHistory();
    console.log("status",status);

    const eggButtonHandle = () => {
        history.push(`/nft-marketplace/eggs`);
    }

    const petButtonHandle = () =>{
        history.push(`/nft-marketplace/pets`);
    }
    return(
        <div className = "mb-5">
            <div className = "text-center mt-4 mb-5">
                <ChocoButton text = "Eggs" onClick={eggButtonHandle}/>
                <ChocoButton text = "Pets" onClick = {petButtonHandle}/>
            </div>
            {status==="pets"?<PetContents />:<EggContents />}
        </div>
    )
}

export default ItemContent;