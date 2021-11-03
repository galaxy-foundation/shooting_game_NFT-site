import React from 'react';
import ChocoButton from './smallChoco';
import {useHistory} from 'react-router-dom';

import CreateContents from "./createContents";
import MarketContents from "./marketContents";

function ItemContent(props) {
  const status = props.router;

  const history = useHistory();
  console.log("status", status);

  const createButtonHandle = () => {
    history.push(`/nft-marketplace/create`);
  };

  const weaponButtonHandle = () => {
    history.push(`/nft-marketplace/weapons`);
  };
  return (
    <div className="padding-top-4">
        <div className="text-center mt-4 mb-5">
            <ChocoButton text="Create" onClick={createButtonHandle} />
            <ChocoButton text="Market" onClick={weaponButtonHandle} />
        </div>
        {status === "weapons" ? <MarketContents /> : <CreateContents />}
        <div className = "spacer-2"></div>
    </div>
  );
}

export default ItemContent;