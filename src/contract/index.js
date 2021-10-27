// import {petSwapRouterContract, petSwapFactoryContract, ERC20, petWorldCoin, petSwapPair} from './contracts'
// import {staking1,staking2} from './stakingcontracts';
// import {artContract,eggContract,petContract,multiContract,marketPlaceContract} from './gameContracts'
import { ethers } from "ethers";
import gameContracts from "./gameContracts.json";

// const testnetRPC =  `https://kovan.infura.io/v3/0c5409f01bb944168d3bb4b03a674f15`;
const testnetRPC = "https://rpc.testnet.fantom.network";
const localRPC = "http://localhost:7545";

const provider = new ethers.providers.JsonRpcProvider(localRPC);

// const PetSwapRouterContract = new ethers.Contract(petSwapRouterContract.kovan, petSwapRouterContract.abi, provider);
// const PetSwapFactoryContract = new ethers.Contract(petSwapFactoryContract.kovan, petSwapFactoryContract.abi, provider);

// const PetSwapPair = new ethers.Contract (petSwapPair.kovan, petSwapPair.abi, provider);
// const WBNBAddress = "0x1DEb4abb7f8CA4176a95E3233Ca6A6633aFC4Fc2";

// const StakingContract1 = new ethers.Contract (staking1.kovan, staking1.abi, provider);
// const StakingContract2 = new ethers.Contract (staking2.kovan, staking2.abi, provider);

// const PetWorldCoin = new ethers.Contract (petWorldCoin.kovan, petWorldCoin.abi, provider);
// const ArtContract = new ethers.Contract (artContract.kovan, artContract.abi, provider);
// const EggContract = new ethers.Contract (eggContract.kovan, eggContract.abi, provider);
// const PetContract = new ethers.Contract (petContract.kovan, petContract.abi, provider);
// const MultiContract = new ethers.Contract (multiContract.kovan, multiContract.abi, provider);
// const MarketPlaceContract = new ethers.Contract(marketPlaceContract.kovan, marketPlaceContract.abi, provider);

const AtariToken = new ethers.Contract(
  gameContracts.atariToken.address,
  gameContracts.atariToken.abi,
  provider
);

const WeaponNFT = new ethers.Contract(
  gameContracts.weaponNFT.address,
  gameContracts.weaponNFT.abi,
  provider
);

const MultiCall = new ethers.Contract(
  gameContracts.multiCall.address,
  gameContracts.multiCall.abi,
  provider
);

const MarketPlace = new ethers.Contract(
  gameContracts.marketPlace.address,
  gameContracts.marketPlace.abi,
  provider
);

// const MultiContract = new ethers.Contract (gameContracts.multiCall.address, gameContracts.multiCall.abi, provider);
// const MarketPlaceContract = new ethers.Contract(gameContracts.marketPlace.address, gameContracts.marketPlace.abi, provider);

export { AtariToken, WeaponNFT, MultiCall, MarketPlace };
