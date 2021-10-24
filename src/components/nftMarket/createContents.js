import React from "react";
import { Grid } from "@material-ui/core";
import ItemCard from "./createItemCard";
import ChocoButton from "./smallChoco";
import { useEffect, useState } from "react";
import { useApplicationContext } from "../../contexts";

function CreateContents() {
  const [state] = useApplicationContext();
  const CreateWeaponTokens = state.CreateWeaponTokens;
  console.log("CreateContents CreateWeaponTokens",CreateWeaponTokens)

  //eggInfo
  useEffect(() => {}, []);

  return (
    <div className="mb-5">
      <Grid container spacing={3} className="x-grid5">
        {CreateWeaponTokens?CreateWeaponTokens.tokenURIs.map((contents, id) => {
          return (
            <Grid item xs={12} sm={6} md={3} key = {id}>
              <ItemCard id={id} />
            </Grid>
          );
        }):""}
      </Grid>
    </div>
  );
}

export default CreateContents;
