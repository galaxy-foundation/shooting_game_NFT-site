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
        case "UPDATE_MyMARKETPLACE_WEAPONTOKENS": {
            const { MyMARKETWeaponTokens } = payload;
            return {
                ...state,
                MyMARKETWeaponTokens: MyMARKETWeaponTokens,
            };
        }
        default: {
            throw Error(
                `Unexpected action type in DataContext reducer: '${type}'.`
            );
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
        tokenIDs: []
    },
    MARKETWeaponTokens: {
        creators: [],
        owners: [],
        tokenURIs: [],
        tokenIDs: [],
        orders: [],
    },
    MyMARKETWeaponTokens: {
        creators: [],
        owners: [],
        tokenURIs: [],
        tokenIDs: [],
        orders: [],
        bids: [],
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

    const updateMarketPlaceWeaponTokens = useCallback((MARKETWeaponTokens) => {
        dispatch({
            type: "UPDATE_MARKETPLACE_WEAPONTOKENS",
            payload: {
                MARKETWeaponTokens,
            },
        });
    }, []);

    
    const updateMyMarketPlaceWeaponTokens = useCallback((MyMARKETWeaponTokens) => {
        dispatch({
            type: "UPDATE_MyMARKETPLACE_WEAPONTOKENS",
            payload: {
                MyMARKETWeaponTokens,
            },
        });
    }, []);

    /* ---------- updaters -----------  */
    //////////////////////////////////////

    const createWeaponTokenUpdate = async () => {
        try {
            console.log(WeaponNFT.address);
            var _totalAssets = Number(
                (await WeaponNFT.totalAssets()).toString()
            );
            var ids = [];
            for (var i = 0; i < _totalAssets; i++) {
                ids.push(i);
            }

            if (ids !== []) {
                var _tokenInfos = await MultiCall.getWeaponAssetInfos(
                    ids
                ).catch((err) => {
                    console.log(ids, err);
                });
                console.log("updateCreateWeaponTokens", _tokenInfos);
                updateCreateWeaponTokens(_tokenInfos);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const weaponTokenUpdate = async () => {
        try {
            var _totalSupply = Number(
                (await WeaponNFT.totalSupply()).toString()
            );
            var ids = [];
            for (var i = 0; i < _totalSupply; i++) {
                ids.push(i);
            }

            if (ids !== []) {
                var _tokenInfos = await MultiCall.getWeaponInfos(ids).catch(
                    (err) => {
                        console.log(ids, err);
                    }
                );
                updateWeaponTokens(_tokenInfos);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const myWeaponTokenUpdate = async (userAddress) => {
        //weapon token structure;
        try {
            var creators = [];
            var owners = [];
            var tokenURIs = [];
            var tokenIDs = [];

            const WeaponTokens = state.WeaponTokens;

            WeaponTokens.owners.map((owner, index) => {
                if (owner.toUpperCase() === userAddress.toUpperCase()) {
                    creators.push(WeaponTokens.creators[index]);
                    owners.push(WeaponTokens.owners[index]);
                    tokenURIs.push(WeaponTokens.tokenURIs[index]);
                    tokenIDs.push(index);
                }
            });

            updateMyWeaponTokens({
                creators,
                owners,
                tokenURIs,
                tokenIDs
            });
        } catch (err) {
            console.log(err);
        }
    };

    // myweapontoken update
    const MARKETWeaponTokenUpdate = async () => {
        //weapon token structure;
        try {
            var creators = [];
            var owners = [];
            var tokenURIs = [];
            var tokenIDs = [];

            const WeaponTokens = state.WeaponTokens;
            WeaponTokens.owners.map((owner, index) => {
                if (owner.toUpperCase() === MarketPlace.address.toUpperCase()) {
                    creators.push(WeaponTokens.creators[index]);
                    owners.push(WeaponTokens.owners[index]);
                    tokenURIs.push(WeaponTokens.tokenURIs[index]);
                    tokenIDs.push(index);
                }
            });

            //marketOrder
            var ordersPromise = MarketPlace.getOrderByAssetIds(
                WeaponNFT.address,
                tokenIDs
            );

            var bidsPromise = MarketPlace.getBidByAssetIds(
                WeaponNFT.address,
                tokenIDs
            );

            var bidHistorysPromise = MarketPlace.getBidHistoryByAssetIds(
                WeaponNFT.address,
                tokenIDs
            );

            Promise.all([ordersPromise,bidsPromise,bidHistorysPromise]).then((values)=>{
                updateMarketPlaceWeaponTokens({
                    creators,
                    owners,
                    tokenURIs,
                    tokenIDs,
                    orders:values[0],
                    bids:values[1],
                    bidHistorys:values[2]
                });
            })

        } catch (err) {
            console.log(err);
        }
    };

    const MyMARKETWeaponTokenUpdate = async (userAddress) => {
        //weapon token structure;
        try {
            var creators = [];
            var owners = [];
            var tokenURIs = [];
            var tokenIDs = [];
            var orders = [];
            var bids = [];
            var bidHistorys = [];

            const MARKETWeaponTokens = state.MARKETWeaponTokens;
            MARKETWeaponTokens.orders.map((order, index) => {
                if (order.seller.toUpperCase() === userAddress.toUpperCase()) {
                    creators.push(MARKETWeaponTokens.creators[index]);
                    owners.push(MARKETWeaponTokens.owners[index]);
                    tokenURIs.push(MARKETWeaponTokens.tokenURIs[index]);
                    tokenIDs.push(index);
                    orders.push(MARKETWeaponTokens.orders[index]);
                    bids.push(MARKETWeaponTokens.bids[index]);
                    bidHistorys.push(MARKETWeaponTokens.bidHistorys[index]);
                }
            });

            updateMyMarketPlaceWeaponTokens({
                creators,
                owners,
                tokenURIs,
                tokenIDs,
                orders,
                bids,
                bidHistorys
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

    /* ---------- Hooks ---------- */
    /////////////////////////////////
    
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

    useMemo(()=>{
        if (
            wallet.status === "connected" &&
            wallet.account !== null &&
            wallet.account !== undefined
        ) {
            MyMARKETWeaponTokenUpdate(wallet.account);
        }
    },[state.MARKETWeaponTokens]);

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
