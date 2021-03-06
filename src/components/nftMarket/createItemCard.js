import React ,{useState} from "react";
import itemImg from "../../assets/img/nftMarket/item1.jpg";
import avatarImg from "../../assets/img/nftMarket/avatar.jpg";
import { useHistory } from "react-router-dom";
import { useApplicationContext } from "../../contexts";
import { ethers } from "ethers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import cover_image from "../../assets/img/shooting/cover_image.jpg"

function ItemCard(props) {
    const [state] = useApplicationContext();
    var CreateWeaponTokens = state.CreateWeaponTokens;
    const { id } = props;

    const tokenURI = CreateWeaponTokens.tokenURIs
        ? JSON.parse(CreateWeaponTokens.tokenURIs[id])
        : {};

    const { img, title, price } = {
        img: tokenURI["image"],
        title: tokenURI["name"],
        price: ethers.utils.formatUnits(CreateWeaponTokens.initPrices[id], 18),
    };

    const history = useHistory();

    const handleClick = () => {
        history.push(`/nft-marketplace/create/${id}`);
    };
    const [isImgLoading, setImgLoading] = useState(true);

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="x-nft-itemCard" onClick={handleClick}>
                <div className="x-nft-itemCard-video">
                <img
                    src={cover_image}
                    className="video-thumb tiny"
                    alt="thumb"
                    style={{ opacity: isImgLoading ? 1 : 0 }}
                />
                {/*<video
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
                />*/}
                </div>
                <div className="x-nft-itemCard-info">
                    <div>
                        <span className="x-font6">{title}</span>
                        <span className="x-font6 float-right">
                            {price} ATRI
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="x-font6 ">ID </span>
                        <span className="x-font6 float-right">{id} </span>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default ItemCard;
