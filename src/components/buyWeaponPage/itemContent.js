import React from "react";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useApplicationContext } from "../../contexts";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { AtariToken, WeaponNFT, MarketPlace } from "../../contract";
import LoadingImg from "../../assets/img/box.gif";
import AlertModal from "../alertModal";
import assert from "assert";
import {useHistory} from 'react-router-dom';
import cover_image from "../../assets/img/shooting/cover_image.jpg"


import {delay} from "../utils";
import BidCard from "./bidCard";

function ItemContent(props){
    const history = useHistory();
	const [status] = useState(props.router);
	const [state,{tokenUpdates}] = useApplicationContext();
	const [ isReady, setIsReady] = useState(false);
    const [onsaleAlertOpen, setOnsaleAlertOpen] = useState(false);

	const marketWeaponTokens = state.MARKETWeaponTokens;

	const [tokenURI, setTokenURI] = useState({});

	useEffect(() => {
        var tokenURI = 
            marketWeaponTokens.tokenURIs&&marketWeaponTokens.tokenURIs[status]?
            JSON.parse(marketWeaponTokens.tokenURIs[status])
            :{};
        setTokenURI(tokenURI);
	},[marketWeaponTokens.tokenURIs])
	
	const {img,title,price} = {
			img : tokenURI["image"],
			title : tokenURI["name"],
			price : marketWeaponTokens&&marketWeaponTokens.orders[status]?ethers.utils.formatUnits(marketWeaponTokens.orders[status].price,18):0,
	};

	useEffect(()=>{
			setIsReady(marketWeaponTokens.tokenURIs !== undefined&&marketWeaponTokens.tokenURIs[status])
	},[marketWeaponTokens.tokenURIs])

	const [loading, setLoading] = useState(false);
	const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});
	const [alertOpen, setAlertOpen] = useState(false);
    const [signer , setSigner] = useState();
    const [userAddress , setUserAddress] = useState();

	//wallet provider
	const wallet = useWallet();
    useEffect(()=>{
        const getSigner =  async ()=>{
            if(wallet.status === "connected"){
                const provider = new ethers.providers.Web3Provider(wallet.ethereum);
                const signer =await provider.getSigner();
                setSigner(signer);
                var userAddress =await signer.getAddress();
                setUserAddress(userAddress);
            }
        }

        getSigner()
    },[wallet.status])

	const handleClose = ()=>{
			setAlertOpen(false);
	}
	
	const handleBuy = async() => {
		if(wallet.status === "connected"){
			setLoading(true);
			try{
				//sigend contracts
				var signedAtariToken = AtariToken.connect(signer);

				var weaponPrice = ethers.utils.parseUnits(price.toString());
				//allowance check
				var allowance =await signedAtariToken.allowance(userAddress,MarketPlace.address);

				if(Number(allowance  )<Number(weaponPrice.toString())) {
					var tx = await signedAtariToken.approve(MarketPlace.address,weaponPrice.mul(1000))
					await tx.wait();
                    BuyWeapon();
				}
				else {
                    BuyWeapon();
				} 
			}catch(err) {
				setAlertInfos({title:"Approve rejected",info:"user denied approve"});
				setAlertOpen(true);
				setLoading(false);
				console.log(err);
			}
		}
	}

    const BuyWeapon = async () => {
        try {
            var weaponPrice = ethers.utils.parseUnits(price.toString());
            var signedMarketPlace = MarketPlace.connect(signer);
            var tx = await signedMarketPlace.Buy(WeaponNFT.address,marketWeaponTokens.tokenIDs[status],weaponPrice);
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[1];
            setAlertInfos({title:"Success!",info:`you get new Weapon with Id ${String(id)}`});
            setAlertOpen(true);
            setLoading(false);
            tokenUpdates()

            await delay(2000);
            history.push(`/nft-marketplace/weapons`);
            
        }catch (err) {
            let errMSG = err.data&&err.data.message?err.data.message:"Buy weapon failed";
            setAlertInfos({title:"Failed!",info:errMSG});
            setAlertOpen(true);
            setLoading(false);
            setLoading(false);
            console.log("Create Weapon failed");
        }
    }

    // bids
    
	const handleBid = async(bidAmount,expiredTime) => {
		if(wallet.status === "connected"){
			setLoading(true);
			try{
				//sigend contracts
				var signedAtariToken = AtariToken.connect(signer);

				var weaponPrice = ethers.utils.parseUnits(bidAmount.toString());
				//allowance check
				var allowance =await signedAtariToken.allowance(userAddress,MarketPlace.address);

				if(Number(allowance  )<Number(weaponPrice.toString())) {
					var tx = await signedAtariToken.approve(MarketPlace.address,weaponPrice.mul(1000))
					await tx.wait();
                    await BidWeapon(weaponPrice,expiredTime);
				}
				else {
                    await BidWeapon(weaponPrice,expiredTime);
				} 
			}catch(err) {
                let errMSG =  err.data&&err.data.message?err.data.message:"user denied approve";
                setAlertInfos({title:"Approve Failed!",info:errMSG});
				setAlertOpen(true);
				setLoading(false);
				console.log(err);
			}
		}
	}

    const BidWeapon = async (weaponPrice,expiredTime) => {
        try {
            var signedMarketPlace = MarketPlace.connect(signer);
            var tx = await signedMarketPlace.PlaceBid(WeaponNFT.address,marketWeaponTokens.tokenIDs[status],weaponPrice,expiredTime);
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[2];
            setAlertInfos({title:"Success!",info:`you Bid Weapon with Id ${String(id)}`});
            setAlertOpen(true);
            setLoading(false);
            tokenUpdates()

            await delay(2000);
            history.push(`/nft-marketplace/weapons`);
            
        }catch (err) {
            let errMSG =  err.data&&err.data.message?err.data.message:"Bid weapon failed";
            setAlertInfos({title:"Failed!",info:errMSG});
            setAlertOpen(true);
            setLoading(false);
            console.log("Bid Weapon failed");
        }
    }

	const InfoField = (props) => {
		const { title, info } = props;
		return (
			<div className="x-buyCard-infoField">
				<Grid container>
					<Grid xs={6} sm={6} md={6}>
						<span className="y-font1-bold">{title}</span>
					</Grid>
					<Grid xs={6} sm={6} md={6}>
						<span className="y-font2-bold">{info}</span>
					</Grid>
				</Grid>
			</div>
		);
	};

    const handleBidAlert = ()=>{
        setOnsaleAlertOpen(true);
    }

    const handleBidAlertClose = ()=>{
        setOnsaleAlertOpen(false);
    }

    const [isImgLoading, setImgLoading] = useState(true);

	return (
		<div className="x-weaponCreatePage">
            <AlertModal title = {"ON SALE"} info = {<BidCard handleBid = {handleBid} />} open = {onsaleAlertOpen} handleClose = {handleBidAlertClose}/>
			<AlertModal
				title={alertInfos.title}
				info={alertInfos.info}
				open={alertOpen}
				handleClose={handleClose}
			/>
			{isReady ? (
				<Grid container>
					<Grid xs={12} sm={12} md={6}>
						<div className="x-nft-item-image">
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
					</Grid>
					<Grid xs={12} sm={12} md={6} className="BuyCard-infos">
						<div className="x-BuyCard-InfoList">
							<InfoField title="Category" info={title} />
							<InfoField title="Price" info={price + "ATRI"} />
							<InfoField title="power" info="0" />
						</div>
                        <div className="x-BuyCard-InfoList">
							<InfoField title="Category" info={title} />
							<InfoField title="Price" info={price + "ATRI"} />
							<InfoField title="power" info="0" />
						</div>
						<div className="x-buyCard-button-field">
                           
							<button className="x-buyCard-button buy" onClick={handleBuy}>
								{loading === true ? (
									<img src={LoadingImg} alt="loading" width="60px" />
								) : (
									"Buy"
								)}
							</button>
							<button className="x-buyCard-button bid" onClick={handleBidAlert}>
								{loading === true ? (
									<img src={LoadingImg} alt="loading" width="60px" />
								) : (
									"PLACE A BID"
								)}
							</button>
						</div>
					</Grid>
				</Grid>
			) : (
				""
			)}
		</div>
	);
}

export default ItemContent;
