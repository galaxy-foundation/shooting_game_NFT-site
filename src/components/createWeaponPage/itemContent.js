import React from "react";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useApplicationContext } from "../../contexts";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { AtariToken, WeaponNFT } from "../../contract";
import LoadingImg from "../../assets/img/box.gif";
import AlertModal from "../alertModal";
import assert from "assert";
import cover_image from "../../assets/img/shooting/cover_image.jpg"


function ItemContent(props){
	const [status] = useState(props.router);
	const [state,{tokenUpdates}] = useApplicationContext();
	const [ isReady, setIsReady] = useState(false);

	const CreateWeaponTokens = state.CreateWeaponTokens;

	const [tokenURI, setTokenURI] = useState({});

	useEffect(() => {
        var tokenURI = 
            CreateWeaponTokens.tokenURIs&&CreateWeaponTokens.tokenURIs[status]?
            JSON.parse(CreateWeaponTokens.tokenURIs[status])
            :{};
        setTokenURI(tokenURI);
	},[CreateWeaponTokens.tokenURIs])
	
	const {img,title,price} = {
			img : tokenURI["image"],
			title : tokenURI["name"],
			price : CreateWeaponTokens&&CreateWeaponTokens.initPrices[status]?ethers.utils.formatUnits(CreateWeaponTokens.initPrices[status],18):0,
	};

	useEffect(()=>{
			setIsReady(CreateWeaponTokens.tokenURIs !== undefined&&CreateWeaponTokens.tokenURIs[status])
	},[CreateWeaponTokens.tokenURIs])

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
				var signedWeaponNFT = WeaponNFT.connect(signer);

				var weaponPrice = ethers.utils.parseUnits(price.toString());
				//allowance check
				var allowance =await signedAtariToken.allowance(userAddress,signedWeaponNFT.address);

				if(Number(allowance  )<Number(weaponPrice.toString())) {
					var tx = await signedAtariToken.approve(signedWeaponNFT.address,weaponPrice.mul(1000))
					await tx.wait();
                    CreateWeapon();
				}
				else {
                    CreateWeapon();
				} 
			}catch(err) {
				setAlertInfos({title:"Approve rejected",info:"user denied approve"});
				setAlertOpen(true);
				setLoading(false);
				console.log(err);
			}
		}
	}

    const CreateWeapon = async () => {
        try {
            var signedWeaponNFT = WeaponNFT.connect(signer);
            var tx = await signedWeaponNFT.create(status);
            var res = await tx.wait();
            let sumEvent = res.events.pop();
            let id = sumEvent.args[2];
            setAlertInfos({title:"Success!",info:`you get new Weapon with Id ${id}`});
            setAlertOpen(true);
            setLoading(false);
            tokenUpdates();
        }catch (err) {
            console.log("Create Weapon failed");
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

    const [isImgLoading, setImgLoading] = useState(true);

	return (
		<div className="x-weaponCreatePage">
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
					</Grid>
					<Grid xs={12} sm={12} md={6} className="BuyCard-infos">
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
