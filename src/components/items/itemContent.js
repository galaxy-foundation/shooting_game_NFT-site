import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ChocoButton from "./smallChoco";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import avatar_default from "../../assets/img/avatar_default.png";
// import EggContents from "./eggContents";
import MyContents from "./myContents";
import MyOnsaledContents from "./myOnsaledContents";

function ItemContent(props) {
    const status = props.router;
    const history = useHistory();
    const username = useSelector((state) => state.username);

    const itemButtonHandle = () => {
        history.push(`/my-items/items`);
    };

    const onsaleButtonHandle = () => {
        history.push(`/my-items/onsales`);
    };
    return (
        <div>
            <div className="items_top_div"></div>
            <div style={{ textAlign: "center" }}>
                <img src={avatar_default} className="items_avatar"></img>
                <p style={{ fontSize: 31, color: "white", marginTop: 20 }}>
                    {username}
                </p>
                <p
                    style={{
                        fontSize: 15,
                        color: "white",
                        marginBottom: 100,
                        fontWeight: 100,
                    }}
                >
                    <span style={{ marginRight: 80 }}>SCORE:100</span>
                    <span>FOLLOWER:100</span>
                </p>
                <div className="text-center mt-4 mb-5">
                    <ChocoButton text="items" onClick={itemButtonHandle} />
                    <ChocoButton text="onsales" onClick={onsaleButtonHandle} />
                </div>
                {status === "onsales" ? <MyOnsaledContents /> : <MyContents />}
            </div>
        </div>
    );
}

export default ItemContent;
