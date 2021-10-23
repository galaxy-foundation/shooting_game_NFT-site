import React from 'react';
import Pools from '../components/defi/pools';
import Bottom from '../components/defi/bottom';
import Nav from '../components/layout/nav';

function Defi(){
    return(
        <div className = "x-defi" >
           <Nav />
           <Pools />
           <Bottom />
        </div>
    )
}

export default Defi;