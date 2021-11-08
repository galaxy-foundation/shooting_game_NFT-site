import React,{useEffect,useState,useMemo} from 'react';
import itemImg from '../../assets/img/nftMarket/item1.jpg';
import avatarImg from '../../assets/img/nftMarket/avatar.jpg';
import {useHistory} from 'react-router-dom';
import {useApplicationContext} from "../../contexts";
import cover_image from "../../assets/img/shooting/cover_image.jpg"

function ItemCard(props){
    const {id} = props;
    const history = useHistory();

    //context data
    const [state] = useApplicationContext();
    var MyMARKETWeaponTokens = state.MyMARKETWeaponTokens;

    const tokenURI = MyMARKETWeaponTokens.tokenURIs
        ? JSON.parse(MyMARKETWeaponTokens.tokenURIs[id])
        : {};

    const {img,title,tokenID} = {
        img : tokenURI["image"],
        title : tokenURI["name"],
        tokenID : MyMARKETWeaponTokens.tokenIDs?MyMARKETWeaponTokens.tokenIDs[id]:""
    };

    const handleClick = () => {
        history.push(`/my-items/onsales/${id}`);
    }

    
    const [isImgLoading, setImgLoading] = useState(true);

    return(
        <div className = "x-nft-itemCard" onClick = {handleClick}>
        <div className="x-nft-itemCard-video">
        <img
            src={cover_image}
            className="video-thumb tiny"
            alt="thumb"
            style={{ opacity: isImgLoading ? 1 : 0 }}
        />
        <video
            autoPlay
            loop
            muted
            alt="nft-item"
            width="100%"
            style={{ borderRadius: "5px" ,opacity: isImgLoading ? 0 : 1 }}
            onLoadedData={() => {
                setImgLoading(false)
            }}
            src={img}
            type="video/mp4"
            className="video"
        />
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