import React from 'react';
import { Grid } from '@material-ui/core';
import ItemCard from './marketItemCard';
import { useApplicationContext } from "../../contexts"

function MarketContents() {
    const [state] = useApplicationContext();
    const marketWeaponTokens = state.MARKETWeaponTokens;
    console.log(marketWeaponTokens);
    return (
        <div className="mb-5">
            <Grid container spacing={3} className="x-grid5">
                {marketWeaponTokens.owners.map((creator, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index} >
                            <ItemCard id={index} />
                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}

export default MarketContents;