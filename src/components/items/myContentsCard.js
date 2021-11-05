import React,{useEffect,useState,useMemo} from 'react';
import itemImg from '../../assets/img/nftMarket/item1.jpg';
import avatarImg from '../../assets/img/nftMarket/avatar.jpg';
import {useHistory} from 'react-router-dom';
import {useApplicationContext} from "../../contexts"

function ItemCard(props){
    const {id} = props;
    const history = useHistory();

    //context data
    const [state] = useApplicationContext();
    var MyWeaponTokens = state.MyWeaponTokens;
    
    const tokenURI = MyWeaponTokens.tokenURIs
        ? JSON.parse(MyWeaponTokens.tokenURIs[id])
        : {};

    const {img,title,tokenID} = {
        img : tokenURI["image"],
        title : tokenURI["name"],
        tokenID : MyWeaponTokens.tokenIDs?MyWeaponTokens.tokenIDs[id]:""
    };

    const handleClick = () => {
        history.push(`/my-items/items/${id}`);
    }

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        if(!isLoading)
            alert("video loaded")
    },[isLoading])

    return(
        <div className = "x-nft-itemCard" onClick = {handleClick}>
        <div className="x-nft-itemCard-video">
            <video
                autoPlay
                loop
                muted
                alt="nft-item"
                width="100%"
                style={{ borderRadius: "5px" }}
                onLoadedData={() => {
                    setLoading(false)
                }}
            >
                <source src={img} type="video/mp4" />
            </video>
        </div>
        <div className = "x-nft-itemCard-info">
                <div>
                    <span className = "x-font6">{title}</span>
                </div>
                <div className = "mt-2">
                <span className = "x-font6 ">Token Id </span>
                <span className = "x-font6 float-right">{tokenID}</span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;