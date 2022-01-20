import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Slide,
    Button,
    Box,
    Tab,
    TextField,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { NotificationManager } from "react-notifications";
import { useWallet } from "use-wallet";
import { ethers } from "ethers";
import { RegisterUser, LoginUser } from "../service/authService";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDialog(props) {
    const { open, setOpen, tabValue, setTabValue } = props;

    const wallet = useWallet();

    const [username, setUsername] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    var styledAddress = wallet.account
        ? wallet.account.slice(0, 4) + ".." + wallet.account.slice(-4)
        : "";

    useEffect(() => {
        if (
            wallet.status === "error" &&
            localStorage.getItem("metamaskconnect") === "true"
        ) {
            NotificationManager.error("Please change chain to Fantom testnet");
        }
    }, [wallet.status]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleConnect = async (flag) => {
        if (flag) {
            if (wallet.status !== "connected") {
                wallet.connect();

                setOpen(false);
                const msg = "WELCOME TO ARES";
                const provider = new ethers.providers.Web3Provider(
                    wallet.ethereum
                );
                const signer = await provider.getSigner();
                const signature = await signer.signMessage(msg);
                LoginUser(signature);
            } else {
                setOpen(false);
                const msg = "WELCOME TO ARES";
                const provider = new ethers.providers.Web3Provider(
                    wallet.ethereum
                );
                const signer = await provider.getSigner();
                const signature = await signer.signMessage(msg);
                LoginUser(signature);
            }
        } else {
            wallet.connect();
            return true;
        }
    };

    const SignUpHandle = async () => {
        const result = await handleConnect(false);
        if (!result) {
            return;
        }

        try {
            if (!username.trim()) {
                NotificationManager.error("Fill your username", "Warning");
                return;
            }
            if (!nickname.trim()) {
                NotificationManager.error("Fill your nickname", "Warning");
                return;
            }
            if (!password.trim()) {
                NotificationManager.error("Fill your password", "Warning");
                return;
            }
            if (!email.trim()) {
                NotificationManager.error("Fill your email", "Warning");
                return;
            }

            const msg = "WELCOME TO ARES";
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer = await provider.getSigner();
            const signature = await signer.signMessage(msg);

            RegisterUser({
                signature,
                msg,
                username,
                nickname,
                email,
                password,
            });

            setOpen(false);
        } catch (err) {
            console.log(err);
            NotificationManager.error("Metamask Error", "Warning");
        }
    };

    const SignInHandle = () => {
        handleConnect(true);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
        >
            <div className="LoginDialog">
                <DialogTitle className="font_white">
                    Atari Multi Play
                </DialogTitle>
                <DialogContent>
                    <TabContext value={tabValue}>
                        <Box>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                className="font_white"
                            >
                                <Tab label="Login" value="1" />
                                <Tab label="Registry" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="2">
                            <form>
                                <TextField
                                    label="username"
                                    type="text"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    autoComplete="current-username"
                                    variant="outlined"
                                    style={{ width: "100%", color: "white" }}
                                    autoComplete="off"
                                />
                                <br />
                                <br />
                                <TextField
                                    label="nickname"
                                    type="text"
                                    autoComplete="current-nickname"
                                    onChange={(e) =>
                                        setNickname(e.target.value)
                                    }
                                    variant="outlined"
                                    style={{ width: "100%" }}
                                    autoComplete="off"
                                />
                                <br />
                                <br />
                                <TextField
                                    label="email"
                                    type="text"
                                    autoComplete="current-email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant="outlined"
                                    style={{ width: "100%" }}
                                    autoComplete="off"
                                />
                                <br />
                                <br />
                                <TextField
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    variant="outlined"
                                    style={{ width: "100%" }}
                                    autoComplete="off"
                                />
                            </form>
                        </TabPanel>
                    </TabContext>
                </DialogContent>
                <DialogActions>
                    {tabValue === "1" ? (
                        <Button
                            onClick={SignInHandle}
                            style={{
                                backgroundColor: "transparent",
                                width: "100%",
                                color: "white",
                                border: "1px solid white",
                                borderRadius: "30px",
                            }}
                        >
                            Sign In
                        </Button>
                    ) : (
                        <Button
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                                width: "100%",
                                border: "1px solid white",
                                borderRadius: "30px",
                            }}
                            onClick={SignUpHandle}
                        >
                            Sign Up
                        </Button>
                    )}
                </DialogActions>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-slide-description"
                        className="font_white"
                    >
                        Don't you have an account?&nbsp;&nbsp;&nbsp;
                        <Link to="/" onClick={() => setTabValue("2")}>
                            Registry Here
                        </Link>
                    </DialogContentText>
                </DialogContent>
            </div>
        </Dialog>
    );
}
