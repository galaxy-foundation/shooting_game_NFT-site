import React from "react";
import Intro from "../components/nftMarket/intro";
import Nav from "../components/layout/nav";
import ItemContent from "../components/buyEggPage/itemContent";
import Bottom from "../components/nftMarket/bottom";
import { useState, useEffect, useMemo } from "react";
import { useWallet } from "use-wallet";
import { useApplicationContext } from "../contexts";
import { useHistory } from "react-router-dom";

function WeaponCreatePage(props) {
  const history = useHistory();

  var router = props.match.params.id;
  console.log("router", router);
  if (router === undefined || router == null) {
    history.push("/nft-marketplace/eggs");
  }

  return (
    <div>
      <Nav />
      <ItemContent router={router} />
      <Bottom />
    </div>
  );
}

export default WeaponCreatePage;
