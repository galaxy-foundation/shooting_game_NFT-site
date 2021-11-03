import React from 'react';
import {Grid} from '@material-ui/core';
import ChocoButton from './smallChoco';
import {useHistory} from 'react-router-dom';

// import EggContents from "./eggContents";
import MyContents from "./myContents";
import MyOnsaledContents from "./myOnsaledContents";

function ItemContent(props){
    const status = props.router;
    const history = useHistory();

    const itemButtonHandle = () => {
        history.push(`/my-items/items`);
    }

    const onsaleButtonHandle = () =>{
        history.push(`/my-items/onsales`);
    }

    return(
        <div className = "padding-top-4">
            <div className = "text-center mt-4 mb-5">
                <ChocoButton text = "items" onClick={itemButtonHandle}/>
                <ChocoButton text = "onsales" onClick = {onsaleButtonHandle}/>
            </div>
            {status === "onsales" ?<MyOnsaledContents />:<MyContents />}
        </div>
    )
}

export default ItemContent;