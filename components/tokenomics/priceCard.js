import React from 'react';
import NumberFormat from "react-number-format"

function PriceCard(props){
    const {title, price, backColor, prefix} = props;
    return(
        <div className = "x-defi-priceCard" style = {{backgroundColor: backColor}}>
            <div className = "text-center x-font3">
                {title}
            </div>
            <div className = "text-center x-font4">
                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={prefix} />
            </div>
        </div>
    )
}

export default PriceCard;