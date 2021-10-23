import React from 'react';
import itemImg from '../../assets/img/nftMarket/item1.jpg';
import avatarImg from '../../assets/img/nftMarket/avatar.jpg';
import {useHistory} from 'react-router-dom';

function ItemCard(props){
    const {data} = props;
    const {id,img,title,price,gene} = data;

    const history = useHistory();

    const handleClick = () => {
        history.push(`/nft-marketplace/eggs/${id}`);
    }
    return(
        <div className = "x-nft-itemCard" onClick = {handleClick}>
            <img src = {img} alt = "nft-item" width = "100%" style = {{borderRadius: "5px",}}/>
            <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">{title}</span>
                    <span className = "x-font6 float-right">{price} PWC</span>
                </div>
                <div className = "mt-2">
                <span className = "x-font6 ">Genome </span>
                <span className = "x-font6 float-right">{gene} </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;