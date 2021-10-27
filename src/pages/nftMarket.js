import React from "react";
import ItemContent from "../components/nftMarket/itemContent";
import BottomSection from "../components/home/bottom";
import { useHistory } from "react-router-dom";
import Nav from "../components/layout/nav";

function NftMarket(props) {
  const history = useHistory();

  var router = props.match.params.id;
  console.log("router", router);
  if (router === undefined || router == null) {
    history.push("/nft-marketplace/create");
  }

  return (
    <div>
      <div className="x-home-top">
        <Nav />
      </div>
      {/*<Intro />*/}
      <ItemContent router={router} />
      <BottomSection />
    </div>
  );
}

export default NftMarket;
