import React from 'react';

function PriceCard(props){
    const {title, price, backColor} = props;
    return(
        <div className = "x-defi-priceCard" style = {{backgroundColor: backColor}}>
            <div className = "text-center x-font3">
                {title}
            </div>
            <div className = "text-center x-font4">
                {price}
            </div>
        </div>
    )
}

export default PriceCard;