import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from "../pages/home";

import Items from "../pages/items";
import NftMarketplace from "../pages/nftMarket";
import WeaponCreatepage from "../pages/weaponCreatePage";
import WeaponBuyepage from "../pages/WeaponBuyPage";
import SignupPage from "../pages/signupPage";


import MyItemsPage from "../pages/myItemsPage";
import MyOnsaledItemsPage from "../pages/myOnsaledItemsPage";
import PageNotFound from "../pages/pageNotFound";
//   import PetBuyPage from "../pages/buyPetPage";
//   import ItemEggPage from "../pages/itemEggPage";

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
            <Route
                exact
                path="/nft-marketplace/onsales/:id"
                component={WeaponBuyepage}
            />
            <Route
                exact
                path="/signup"
                component={SignupPage}
            />
            
            {/* <Route
                exact
                path="/nft-marketplace/pets/:id"
                component={PetBuyPage}
            /> */}
            <Route exact path="/nft-marketplace" component={NftMarketplace} />
            <Route exact path="/my-items" component={Items} />
            <Route exact path="/signup" component={Items} />

            <Route exact path="/my-items/:id" component={Items} />
            <Route exact path="/my-items/items/:id" component={MyItemsPage} />
            <Route exact path="/my-items/onsales/:id" component={MyOnsaledItemsPage} />
            {/*<Route exact path="/my-items/pets/:id" component={ItemPetPage} /> */}
            <Route component = {PageNotFound}></Route>
            </Switch>
      </BrowserRouter>
    );
}

export default Routes;
