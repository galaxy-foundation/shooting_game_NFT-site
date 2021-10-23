import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useWallet } from "use-wallet";
import { AtariToken, WeaponNFT, MultiCall, MarketPlace } from "../contract";

import dark1 from "../assets/img/nftMarket/eggs/dark1.png";
import dark2 from "../assets/img/nftMarket/eggs/dark2.png";
import dark3 from "../assets/img/nftMarket/eggs/dark3.png";
import fire1 from "../assets/img/nftMarket/eggs/fire1.png";
import fire2 from "../assets/img/nftMarket/eggs/fire2.png";
import fire3 from "../assets/img/nftMarket/eggs/fire3.png";
import frozen1 from "../assets/img/nftMarket/eggs/frozen1.png";
import frozen2 from "../assets/img/nftMarket/eggs/frozen2.png";
import frozen3 from "../assets/img/nftMarket/eggs/frozen3.png";
import water1 from "../assets/img/nftMarket/eggs/water1.png";
import water2 from "../assets/img/nftMarket/eggs/water2.png";
import water3 from "../assets/img/nftMarket/eggs/water3.png";

import pet1 from "../assets/img/nftMarket/pets/pet1.png";
import pet2 from "../assets/img/nftMarket/pets/pet2.png";
import pet3 from "../assets/img/nftMarket/pets/pet3.png";
import pet4 from "../assets/img/nftMarket/pets/pet4.png";

const petsImg = [pet1, pet2, pet3, pet4];

const DragonNameList = [
  "Akikiola",
  "Asdrola",
  "Bhala",
  "Banduk",
  "Dert",
  "Dudha",
  "Kullian",
  "Ludianha",
  "Eqopala",
  "Eqopala",
  "Aiden",
  "Archion",
  "Arrow",
  "Brenton",
  "Bullet",
  "Daenerys",
  "Dart",
  "Deadheart",
  "Devlin",
  "Drache",
  "Draga",
  "Drago",
  "Dragonite",
  "Drake",
  "Druk ",
  "Egan ",
  "Flurry ",
  "Ghidorah ",
  "Godzilla ",
  "Helios ",
  "Knucker",
  "Maleficent",
  "Mushu",
  "Neptune",
  "Ness",
  "Nocturne",
  "Oboth",
  "Pendragon",
  "Shenron",
  "Tatsuya",
  "Typhon",
  "Anguis",
  "Arad",
  "Cadmus",
  "Doryu",
  "Draak",
  "Draco",
  "Draken",
  "Drayce",
  "Fafner",
  "Hydra",
  "Irad",
  "Kaida",
  "Kaliyah",
  "Ladon",
  "Libelle",
  "Long",
  "Melly",
  "Meraxes",
  "Ryoko",
  "Scylla",
  "Campe",
  "Chimera",
  "Druk",
];

const ApplicationContext = createContext();

export function useApplicationContext() {
  return useContext(ApplicationContext);
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_ARTTOKENS": {
      const { ArtTokens } = payload;
      return {
        ...state,
        ArtTokens: ArtTokens,
      };
    }
    case "UPDATE_EGGTOKENS": {
      const { EggTokens } = payload;
      return {
        ...state,
        EggTokens: EggTokens,
      };
    }
    case "UPDATE_PETTOKENS": {
      const { PetTokens } = payload;
      return {
        ...state,
        PetTokens: PetTokens,
      };
    }

    default: {
      throw Error(`Unexpected action type in DataContext reducer: '${type}'.`);
    }
  }
}

const INITIAL_STATE = {
  EGGINFO: [
    { id: 0, img: dark1, title: "Earth Dragon", price: 80, gene: "AAA*" },
    { id: 1, img: fire1, title: "Fire Dragon", price: 80, gene: "CCC*" },
    { id: 2, img: frozen1, title: "Ice Dragon", price: 80, gene: "GGG*" },
    { id: 3, img: water1, title: "Water Dragon", price: 80, gene: "TTT*" },
    { id: 4, img: dark2, title: "Earth Dragon", price: 40, gene: "AA**" },
    { id: 5, img: fire2, title: "Fire Dragon", price: 40, gene: "CC**" },
    { id: 6, img: frozen2, title: "Ice Dragon", price: 40, gene: "GG**" },
    { id: 7, img: water2, title: "Water Dragon", price: 40, gene: "TT**" },
    { id: 8, img: dark3, title: "Earth Dragon", price: 20, gene: "****" },
    { id: 9, img: fire3, title: "Fire Dragon", price: 20, gene: "****" },
    { id: 10, img: frozen3, title: "Ice Dragon", price: 20, gene: "****" },
    { id: 11, img: water3, title: "Water Dragon", price: 20, gene: "****" },
  ],
  ArtTokens: [],
  PetTokens: {
    creators: [],
    owners: [],
    _fGenome: [],
    _fID: [],
    _gene: [],
    _mGenome: [],
    _mID: [],
  },
  EggTokens: {
    creators: [],
    owners: [],
    _eggTypes: [],
    _fGenome: [],
    _fID: [],
    _gene: [],
    _mGenome: [],
    _mID: [],
  },
  MyArtTokens: [],
  MyPetTokens: {
    creators: [],
    owners: [],
    img: [],
    _fGenome: [],
    _fID: [],
    _gene: [],
    _mGenome: [],
    _mID: [],
    tokenIds: [],
    names: [],
    ageInfos: {
      _ageInfos: [],
      _latestBreedLevels: [],
    },
  },
  MyEggTokens: {
    creators: [],
    owners: [],
    _eggTypes: [],
    _fGenome: [],
    _fID: [],
    _gene: [],
    _mGenome: [],
    _mID: [],
    tokenIds: [],
  },
  MARKETPetTokens: {
    creators: [],
    owners: [],
    img: [],
    _fGenome: [],
    _fID: [],
    _gene: [],
    _mGenome: [],
    _mID: [],
    tokenIds: [],
    names: [],
  },
  CoinPrice: 0.5,
  BNBPrice: 350,
};

export default function Provider({ children }) {
  const wallet = useWallet();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // reducers
  const updateArtTokens = useCallback((ArtTokens) => {
    dispatch({
      type: "UPDATE_ARTTOKENS",
      payload: {
        ArtTokens,
      },
    });
  }, []);

  const updateEggTokens = useCallback((EggTokens) => {
    dispatch({
      type: "UPDATE_EGGTOKENS",
      payload: {
        EggTokens,
      },
    });
  }, []);

  const updatePetTokens = useCallback((PetTokens) => {
    dispatch({
      type: "UPDATE_PETTOKENS",
      payload: {
        PetTokens,
      },
    });
  }, []);
  // all token info update
  const artTokenUpdate = async () => {
    var _totalSupply = Number((await ArtContract.totalSupply()).toString());
    var ids = [];
    for (var i = 0; i < _totalSupply; i++) {
      ids.push(i);
    }

    if (ids !== []) {
      var _tokenInfos = await MultiContract.getArtInfos(ids);
      updateArtTokens(_tokenInfos);
    }
  };

  const eggTokenUpdate = async () => {
    var _totalSupply = Number((await EggContract.totalSupply()).toString());
    var ids = [];
    for (var i = 0; i < _totalSupply; i++) {
      ids.push(i);
    }

    if (ids !== []) {
      var _tokenInfos = await MultiContract.getEggInfos(ids);
      updateEggTokens(_tokenInfos);
    }
  };

  const petTokenUpdate = async () => {
    var _totalSupply = Number((await PetContract.totalSupply()).toString());
    var ids = [];
    for (var i = 0; i < _totalSupply; i++) {
      ids.push(i);
    }

    if (ids !== []) {
      var _tokenInfos = await MultiContract.getPetInfos(ids).catch((err) => {
        console.log(ids, err);
      });
      updatePetTokens(_tokenInfos);
    }
  };

  // myEggtoken update
  const myEggTokenUpdate = async (myAddress) => {
    //egg token structure;
    var creators = [];
    var owners = [];
    var _eggTypes = [];
    var _fGenome = [];
    var _fID = [];
    var _gene = [];
    var _mGenome = [];
    var _mID = [];
    var tokenIds = [];

    const EggTokens = state.EggTokens;
    EggTokens.owners.map((owner, index) => {
      if (owner.toUpperCase() === myAddress.toUpperCase()) {
        creators.push(EggTokens.creators[index]);
        owners.push(EggTokens.owners[index]);
        _eggTypes.push(EggTokens._eggTypes[index]);
        _fGenome.push(EggTokens._fGenome[index]);
        _fID.push(EggTokens._fID[index]);
        _gene.push(EggTokens._gene[index]);
        _mGenome.push(EggTokens._mGenome[index]);
        _mID.push(EggTokens._mID[index]);
        tokenIds.push(index);
      }
    });
    // updateMyEggTokens({creators,owners,_eggTypes,_fGenome,_fID,_gene,_mGenome,_mID,tokenIds});
  };

  // myEggtoken update
  const myPetTokenUpdate = async (myAddress) => {
    //egg token structure;
    var creators = [];
    var owners = [];
    var _fGenome = [];
    var _fID = [];
    var _gene = [];
    var _mGenome = [];
    var _mID = [];
    var tokenIds = [];

    var img = [];
    var names = [];

    const PetTokens = state.PetTokens;
    PetTokens.owners.map((owner, index) => {
      if (owner.toUpperCase() === myAddress.toUpperCase()) {
        creators.push(PetTokens.creators[index]);
        owners.push(PetTokens.owners[index]);
        _fGenome.push(PetTokens._fGenome[index]);
        _fID.push(PetTokens._fID[index]);
        _gene.push(PetTokens._gene[index]);
        _mGenome.push(PetTokens._mGenome[index]);
        _mID.push(PetTokens._mID[index]);
        tokenIds.push(index);

        //URI img,name
        img.push(petsImg[PetTokens._mGenome[index][0]]);
        var genepos =
          PetTokens._fGenome[index][4] +
          PetTokens._fGenome[index][5] * 4 +
          PetTokens._fGenome[index][6] * 16;
        names.push(DragonNameList[genepos]);
      }
    });

    // var ageInfos = await PetContract.getPetAgeInfos(tokenIds);
    // updateMyPetTokens({creators,owners,_fGenome,_fID,_gene,_mGenome,_mID,tokenIds,img,names,ageInfos});
  };

  // myEggtoken update
  const MARKETPetTokenUpdate = async () => {
    //egg token structure;
    var creators = [];
    var owners = [];
    var _fGenome = [];
    var _fID = [];
    var _gene = [];
    var _mGenome = [];
    var _mID = [];
    var tokenIds = [];

    var img = [];
    var names = [];

    const PetTokens = state.PetTokens;
    PetTokens.owners.map((owner, index) => {
      if (owner.toUpperCase() === MarketPlaceContract.address.toUpperCase()) {
        creators.push(PetTokens.creators[index]);
        owners.push(PetTokens.owners[index]);
        _fGenome.push(PetTokens._fGenome[index]);
        _fID.push(PetTokens._fID[index]);
        _gene.push(PetTokens._gene[index]);
        _mGenome.push(PetTokens._mGenome[index]);
        _mID.push(PetTokens._mID[index]);
        tokenIds.push(index);

        //URI img,name
        img.push(petsImg[PetTokens._mGenome[index][0]]);
        var genepos =
          PetTokens._fGenome[index][4] +
          PetTokens._fGenome[index][5] * 4 +
          PetTokens._fGenome[index][6] * 16;
        names.push(DragonNameList[genepos]);
      }
    });

    //marketOrder
    // var orders = await MarketPlaceContract.getOrderByAssetIds(PetContract.address,tokenIds);
    // updateMARKETPLACEPetTokens({creators,owners,_fGenome,_fID,_gene,_mGenome,_mID,tokenIds,img,names,orders});
  };

  //initial tokeninfo update
  const tokenUpdates = useCallback(() => {
    artTokenUpdate();
    eggTokenUpdate();
    petTokenUpdate();
  }, []);

  //my tokenUpdate
  useMemo(() => {
    if (
      wallet.status === "connected" &&
      wallet.account !== null &&
      wallet.account !== undefined
    ) {
      myEggTokenUpdate(wallet.account);
      myPetTokenUpdate(wallet.account);
    }

    MARKETPetTokenUpdate();
  }, [state.EggTokens, state.PetTokens, wallet.account, wallet.status]);

  useEffect(() => {
    var images = [];
    for (var i = 0; i < 12; i++) {
      images.push({
        id: 1,
        img: dark1,
        title: "Earth Dragon",
        price: 80,
        gene: "AAA*",
      });
      images.push({
        id: 2,
        img: fire1,
        title: "Fire Dragon",
        price: 80,
        gene: "CCC*",
      });
      images.push({
        id: 3,
        img: frozen1,
        title: "Ice Dragon",
        price: 80,
        gene: "GGG*",
      });
      images.push({
        id: 4,
        img: water1,
        title: "Water Dragon",
        price: 80,
        gene: "TTT*",
      });
      images.push({
        id: 5,
        img: dark2,
        title: "Earth Dragon",
        price: 40,
        gene: "AA**",
      });
      images.push({
        id: 6,
        img: fire2,
        title: "Fire Dragon",
        price: 40,
        gene: "CC**",
      });
      images.push({
        id: 7,
        img: frozen2,
        title: "Ice Dragon",
        price: 40,
        gene: "GG**",
      });
      images.push({
        id: 8,
        img: water2,
        title: "Water Dragon",
        price: 40,
        gene: "TT**",
      });
      images.push({
        id: 9,
        img: dark3,
        title: "Earth Dragon",
        price: 20,
        gene: "****",
      });
      images.push({
        id: 10,
        img: fire3,
        title: "Fire Dragon",
        price: 20,
        gene: "****",
      });
      images.push({
        id: 11,
        img: frozen3,
        title: "Ice Dragon",
        price: 20,
        gene: "****",
      });
      images.push({
        id: 12,
        img: water3,
        title: "Water Dragon",
        price: 20,
        gene: "****",
      });
    }
    tokenUpdates();
  }, []);

  return (
    <ApplicationContext.Provider
      value={useMemo(
        () => [
          state,
          {
            updateArtTokens,
            updateEggTokens,
            updatePetTokens,
            tokenUpdates,
            eggTokenUpdate,
            petTokenUpdate,
          },
        ],
        [state]
      )}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
