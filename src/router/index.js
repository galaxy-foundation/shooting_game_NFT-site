import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from "../pages/home";
//   import Items from "../pages/items";
import NftMarketplace from "../pages/nftMarket";
import WeaponCreatepage from "../pages/weaponCreatePage";
//   import PetBuyPage from "../pages/buyPetPage";
//   import ItemEggPage from "../pages/itemEggPage";
//   import ItemPetPage from "../pages/itemPetPage";

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nft-marketplace/:id" component={NftMarketplace} />
          <Route
            exact
            path="/nft-marketplace/create/:id"
            component={WeaponCreatepage}
          />
          {/* <Route
            exact
            path="/nft-marketplace/pets/:id"
            component={PetBuyPage}
          /> */}
          <Route exact path="/nft-marketplace" component={NftMarketplace} />
          {/* <Route exact path="/my-items" component={Items} />
          <Route exact path="/my-items/:id" component={Items} />
          <Route exact path="/my-items/eggs/:id" component={ItemEggPage} />
          <Route exact path="/my-items/pets/:id" component={ItemPetPage} /> */}
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;
