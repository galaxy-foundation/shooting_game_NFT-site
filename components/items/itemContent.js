import React from 'react';
import {Grid} from '@material-ui/core';
import ChocoButton from './smallChoco';
import {useHistory} from 'react-router-dom';

import EggContents from "./eggContents";
import PetContents from "./petContents";
import BreedContents from "./breedContents";

function ItemContent(props){
    const status = props.router;
    const history = useHistory();

    const eggButtonHandle = () => {
        history.push(`/my-items/eggs`);
    }

    const petButtonHandle = () =>{
        history.push(`/my-items/pets`);
    }

    const breedButtonHandle = () =>{
        history.push(`/my-items/breed`);
    }

    return(
        <div className = "mb-5">
            <div className = "text-center mt-4 mb-5">
                <ChocoButton text = "Eggs" onClick={eggButtonHandle}/>
                <ChocoButton text = "Pets" onClick = {petButtonHandle}/>
                <ChocoButton text = "Breed" onClick = {breedButtonHandle}/>
            </div>
            {status==="pets"?<PetContents />:status==="breed"?<BreedContents />:<EggContents />}
        </div>
    )
}

export default ItemContent;