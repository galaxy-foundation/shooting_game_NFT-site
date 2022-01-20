import React from "react";
import Nav from "../components/layout/nav";
import ItemContent from "../components/myItemsPage/itemContent";
import BottomSection from "../components/home/bottom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useApplicationContext } from "../contexts";
function ItemsPage(props) {
    var router = props.match.params.id;
    const history = useHistory();

    //context data
    const [state] = useApplicationContext();
    var myWeaponTokens = state.MyWeaponTokens;

    if (router === undefined || myWeaponTokens.tokenIDs[router] === undefined) {
        console.log("myWeaponTokens.tokenIds", myWeaponTokens.tokenIDs[router]);
        history.push(`/my-items/items`);
    }

    return (
        <div>
            <Nav />
            {myWeaponTokens.tokenIDs[router] !== undefined ? (
                <ItemContent router={router} />
            ) : (
                ""
            )}
            <BottomSection />
        </div>
    );
}

export default ItemsPage;
