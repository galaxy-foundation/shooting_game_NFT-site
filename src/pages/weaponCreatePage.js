import React from "react";
import Nav from "../components/layout/nav";
import ItemContent from "../components/createWeaponPage/itemContent";
import { useHistory } from "react-router-dom";
import BottomSection from '../components/home/bottom';

function WeaponCreatePage(props) {
  const history = useHistory();

  var router = props.match.params.id;
  console.log("router", router);
  if (router === undefined || router == null) {
    history.push("/nft-marketplace/create");
  }

  return (
    <div>
      <Nav />
      {router?<ItemContent router={router} />:""}
      <BottomSection />
    </div>
  );
}

export default WeaponCreatePage;
