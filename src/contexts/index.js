import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useWallet } from "use-wallet";
import { WeaponNFT, MultiCall, MarketPlace } from "../contract";

const ApplicationContext = createContext();

export function useApplicationContext() {
  return useContext(ApplicationContext);
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_CREATEWEAPONTOKENS": {
      const { CreateWeaponTokens } = payload;
      return {
        ...state,
        CreateWeaponTokens: CreateWeaponTokens,
      };
    }
    case "UPDATE_WEAPONTOKENS": {
      const { WeaponTokens } = payload;
      return {
        ...state,
        WeaponTokens: WeaponTokens,
      };
    }
    case "UPDATE_MYWEAPONTOKENS": {
      const { MyWeaponTokens } = payload;
      return {
        ...state,
        MyWeaponTokens: MyWeaponTokens,
      };
    }
    case "UPDATE_MARKETPLACE_WEAPONTOKENS": {
      const { MARKETWeaponTokens } = payload;
      return {
        ...state,
        MARKETWeaponTokens: MARKETWeaponTokens,
      };
    }

    default: {
      throw Error(`Unexpected action type in DataContext reducer: '${type}'.`);
    }
  }
}

const INITIAL_STATE = {
  CreateWeaponTokens: {
    tokenURIs: [],
    assetIDs: [],
    initPrices: [],
  },
  WeaponTokens: {
    creators: [],
    owners: [],
    tokenURIs: [],
    assetIDs: [],
    initPrices: [],
  },
  MyWeaponTokens: {
    creators: [],
    owners: [],
    tokenURIs: [],
    assetIDs: [],
    initPrices: [],
  },
  MARKETWeaponTokens: {
    creators: [],
    owners: [],
    tokenURIs: [],
    assetIDs: [],
    initPrices: [],
    orders: [],
  },
};

export default function Provider({ children }) {
  const wallet = useWallet();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /* ---------- reducers -----------  */
  //////////////////////////////////////

  const updateCreateWeaponTokens = useCallback((CreateWeaponTokens) => {
    dispatch({
      type: "UPDATE_CREATEWEAPONTOKENS",
      payload: {
        CreateWeaponTokens,
      },
    });
  }, []);

  const updateWeaponTokens = useCallback((WeaponTokens) => {
    dispatch({
      type: "UPDATE_WEAPONTOKENS",
      payload: {
        WeaponTokens,
      },
    });
  }, []);

  const updateMyWeaponTokens = useCallback((MyWeaponTokens) => {
    dispatch({
      type: "UPDATE_MYWEAPONTOKENS",
      payload: {
        MyWeaponTokens,
      },
    });
  }, []);

  const updateMARKETPLACEWeaponTokens = useCallback((MARKETWeaponTokens) => {
    dispatch({
      type: "UPDATE_MARKETPLACE_WEAPONTOKENS",
      payload: {
        MARKETWeaponTokens,
      },
    });
  }, []);

  /* ---------- updaters -----------  */
  //////////////////////////////////////

  const createWeaponTokenUpdate = async () => {
    try {
      var _totalAssets = Number((await WeaponNFT.totalAssets()).toString());
      var ids = [];
      for (var i = 0; i < _totalAssets; i++) {
        ids.push(i);
      }

      if (ids !== []) {
        var _tokenInfos = await MultiCall.getWeaponAssetInfos(ids).catch(
          (err) => {
            console.log(ids, err);
          }
        );
        console.log('updateCreateWeaponTokens' ,_tokenInfos)
        updateCreateWeaponTokens(_tokenInfos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const weaponTokenUpdate = async () => {
    try {
      var _totalSupply = Number((await WeaponNFT.totalSupply()).toString());
      var ids = [];
      for (var i = 0; i < _totalSupply; i++) {
        ids.push(i);
      }

      if (ids !== []) {
        var _tokenInfos = await MultiCall.getWeaponInfos(ids).catch((err) => {
          console.log(ids, err);
        });
        updateWeaponTokens(_tokenInfos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const myWeaponTokenUpdate = async (myAddress) => {
    //egg token structure;
    try {
      var creators = [];
      var owners = [];
      var tokenURIs = [];
      var assetIDs = [];
      var initPrices = [];

      const WeaponTokens = state.WeaponTokens;

      WeaponTokens.owners.map((owner, index) => {
        if (owner.toUpperCase() === myAddress.toUpperCase()) {
          creators.push(WeaponTokens.creators[index]);
          owners.push(WeaponTokens.owners[index]);
          tokenURIs.push(WeaponNFT.tokenURIs[index]);
          assetIDs.push(WeaponNFT.assetIDs[index]);
          initPrices.push(WeaponNFT.initPrices[index]);
        }
      });

      var assetsInfos = await WeaponNFT.getAssets(assetIDs);
      updateMyWeaponTokens({
        creators,
        owners,
        tokenURIs,
        assetIDs,
        initPrices,
        assetsInfos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // myEggtoken update
  const MARKETWeaponTokenUpdate = async () => {
    //egg token structure;
    try {
      var creators = [];
      var owners = [];
      var tokenURIs = [];
      var assetIDs = [];
      var initPrices = [];

      const WeaponTokens = state.WeaponTokens;
      WeaponTokens.owners.map((owner, index) => {
        if (owner.toUpperCase() === MarketPlace.address.toUpperCase()) {
          creators.push(WeaponTokens.creators[index]);
          owners.push(WeaponTokens.owners[index]);
          tokenURIs.push(WeaponNFT.tokenURIs[index]);
          assetIDs.push(WeaponNFT.assetIDs[index]);
          initPrices.push(WeaponNFT.initPrices[index]);
        }
      });

      //marketOrder
      var orders = await MarketPlace.getOrderByAssetIds(
        WeaponNFT.address,
        assetIDs
      );
      updateMARKETPLACEWeaponTokens({
        creators,
        owners,
        tokenURIs,
        assetIDs,
        initPrices,
        orders,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //initial tokeninfo update
  const tokenUpdates = useCallback(() => {
    weaponTokenUpdate();
    createWeaponTokenUpdate();
  }, []);

  //my tokenUpdate
  useMemo(() => {
    if (
      wallet.status === "connected" &&
      wallet.account !== null &&
      wallet.account !== undefined
    ) {
      myWeaponTokenUpdate(wallet.account);
    }
    MARKETWeaponTokenUpdate();
  }, [state.WeaponTokens, wallet.account, wallet.status]);

  useEffect(() => {
    tokenUpdates();
  }, []);

  return (
    <ApplicationContext.Provider
      value={useMemo(
        () => [
          state,
          {
            updateWeaponTokens,
            updateMyWeaponTokens,
            tokenUpdates,
            weaponTokenUpdate,
            updateCreateWeaponTokens,
          },
        ],
        [state]
      )}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
