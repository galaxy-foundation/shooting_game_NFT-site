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

function ItemContent(props) {
  const [status] = useState(props.router);
  const [state, { tokenUpdates }] = useApplicationContext();
  const [isReady, setIsReady] = useState(false);

  const CreateWeaponTokens = state.CreateWeaponTokens;

  const [tokenURI, setTokenURI] = useState({});

  useEffect(() => {
    var tokenURI =
      CreateWeaponTokens.tokenURIs && CreateWeaponTokens.tokenURIs[status]
        ? JSON.parse(CreateWeaponTokens.tokenURIs[status])
        : {};
    setTokenURI(tokenURI);
  }, [CreateWeaponTokens.tokenURIs]);

  const { img, title, price } = {
    img: tokenURI["image"],
    title: tokenURI["weapon_name"],
    price:
      CreateWeaponTokens && CreateWeaponTokens.initPrices[status]
        ? ethers.utils.formatUnits(CreateWeaponTokens.initPrices[status], 18)
        : 0,
  };

  useEffect(() => {
    setIsReady(
      CreateWeaponTokens.tokenURIs !== undefined &&
        CreateWeaponTokens.tokenURIs[status]
    );
  }, [CreateWeaponTokens.tokenURIs]);

  const [loading, setLoading] = useState(false);
  const [alertInfos, setAlertInfos] = useState({
    title: "text",
    info: "error",
  });
  const [alertOpen, setAlertOpen] = useState(false);
  //wallet provider
  const wallet = useWallet();

  const handleClose = () => {
    setAlertOpen(false);
  };

  const handleBuy = async () => {
    if (wallet.status === "connected") {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(wallet.ethereum);
      const signer = await provider.getSigner();
      var userAddress = await signer.getAddress();

      //sigend contracts
      var signedAtariToken = AtariToken.connect(signer);
      var signedWeaponNFT = WeaponNFT.connect(signer);

      var eggPrice = ethers.utils.parseUnits(price.toString());
      //allowance check
      var allowance = await signedAtariToken.allowance(
        userAddress,
        signedWeaponNFT.address
      );

      if (Number(allowance.toString()) < Number(eggPrice.toString())) {
        var tx = await signedAtariToken
          .approve(signedWeaponNFT.address, eggPrice.mul(1000))
          .catch((err) => {
            setAlertInfos({
              title: "Approve rejected",
              info: "user denied approve",
            });
            setAlertOpen(true);
            setLoading(false);
          });
        if (tx != null) {
          await tx.wait();
          buyEgg();
        }
      } else {
        buyEgg();
      }
    }
  };

  const buyEgg = async () => {
    const provider = new ethers.providers.Web3Provider(wallet.ethereum);
    const signer = await provider.getSigner();

    //sigend contracts
    var signedWeaponNFT = WeaponNFT.connect(signer);
    var tx = await signedWeaponNFT.create(status).catch((err) => {
      console.log(alertOpen, err);
      setAlertInfos({
        title: "Buy Error",
        info: "Please check AtariToken balance!",
      });
      setAlertOpen(true);
      setLoading(false);
    });
    if (tx != null) {
      var res = await tx.wait();
      let sumEvent = res.events.pop();
      let id = sumEvent.args[1];
      setAlertInfos({
        title: "Success!",
        info: `you get new Egg with Id ${id}`,
      });
      setAlertOpen(true);
      setLoading(false);
      tokenUpdates();
    }
    setLoading(false);
  };

  const InfoField = (props) => {
    const { title, info } = props;
    return (
      <div className="x-buyCard-infoField">
        <Grid container>
          <Grid xs={6} sm={6} md={6}>
            <span className="y-font1-bold">{title}</span>
          </Grid>
          <Grid xs={6} sm={6} md={6}>
            <span className="y-font1-bold">{info}</span>
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <div className="x-eggBuyPage">
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
              <video
                autoPlay
                loop
                muted
                alt="nft-item"
                width="100%"
                style={{ borderRadius: "5px" }}
              >
                <source src={img} type="video/mp4" />
              </video>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={6} className="BuyCard-infos">
            <div className="x-BuyCard-InfoList">
              <InfoField title="Category" info={title} />
              <InfoField title="Price" info={price + "ATRI"} />
              <InfoField title="Gene" info="0" />
            </div>
            <div className="x-buyCard-button-field">
              <button className="x-buyCard-button" onClick={handleBuy}>
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
