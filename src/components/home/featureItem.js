import React from 'react';

function FeatureItem(props){
    const {image, text, color} = props;
    return(
        <div>
            <div className = "x-feature-item" style = {{borderColor: color}}>
                <img src = {image} width = "100%" height = "100%" alt = "item1" />
            </div>
            <div className = "x-feature-item-bottom" style = {{backgroundColor: color}}>
                {text}
            </div>
        </div>
    )
}

export default FeatureItem;