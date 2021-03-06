import { Provider } from "react-redux";
import store from "./store";
import Routes from "./router";
import { UseWalletProvider } from "use-wallet";
import "./assets/style/bootstrap.min.css";
import "./App.css";
import "./custom.css";
import React, { useState, useEffect } from "react";
import ApplicationProvider from "./contexts";
import LoadingScreen from "react-loading-screen";
import logoImg from "./assets/img/logo.png";
import "react-loading-skeleton/dist/skeleton.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 10);
    }, []);

    return (
        <LoadingScreen
            loading={loading}
            bgColor="#00ccff"
            spinnerColor="#9ee5f8"
            textColor="#ffffff"
            logoSrc={logoImg}
            text="Loading Screen"
        >
            <NotificationContainer />
            <UseWalletProvider
                chainId={4002}
                connectors={{
                    // This is how connectors get configured
                    portis: { dAppId: "my-dapp-id-123-xyz" },
                }}
            >
                <Provider store={store}>
                    <ApplicationProvider>
                        <Routes />
                    </ApplicationProvider>
                </Provider>
            </UseWalletProvider>
        </LoadingScreen>
    );
}
export default App;
