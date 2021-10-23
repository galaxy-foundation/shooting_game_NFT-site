import React from 'react';
import Intro from '../components/tokenomics/intro';
import Dex from '../components/tokenomics/dex';
import PancakeSwap from '../components/tokenomics/pancakeswap';
import Bottom from '../components/tokenomics/bottom';

function Tokenomics(){
    return(
        <div>
           <Intro />
           <Dex />
           <PancakeSwap />
           <Bottom />
        </div>
    )
}

export default Tokenomics;