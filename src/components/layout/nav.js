import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import logoImg from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import LoginDialog from "../home/logindialog";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ChocoImgBtn from "../home/chocoImgBtn";
import GreenImgBtn from "../home/greenImgBtn";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { useWallet, UseWalletProvider } from "use-wallet";
import { ethers } from "ethers";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
    })((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
        }}
        transformOrigin={{
        vertical: "top",
        horizontal: "center",
        }}
        {...props}
    />
    ));

    const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: theme.palette.common.white,
        },
        },
    },
}))(MenuItem);

function Nav() {
    const [open, setOpen] = React.useState(false);
    const [loginState, setLoginState] = React.useState(false);
    const [tabValue, setTabValue] = React.useState("0");

    const wallet = useWallet();
    var styledAddress = wallet.account
        ? wallet.account.slice(0, 4) + ".." + wallet.account.slice(-4)
        : "";

    const handleConnect = async () => {
        console.log(wallet.status);
        if (wallet.status !== "connected") {
        localStorage.setItem("metamaskconnect", true);
        wallet.connect();
        }
    };

    const handleLogin = (value) => {
        setOpen(true);
        setTabValue(value);
    };

    useEffect(() => {
        if (loginState) handleConnect();
    }, [loginState]);

    useEffect(() => {
        console.log(localStorage.getItem("metamaskconnect"));
        if (wallet.status === "error" && localStorage.getItem("metamaskconnect") === "true") 
        {
            console.log(wallet.status, localStorage.getItem("metamaskconnect"));
            alert("please change chain to BSC mainnet");
            localStorage.setItem("metamaskconnect", false);
        }

        if (wallet.status === "connected") {
            localStorage.setItem("metamaskconnect", true);
        }
    }, [wallet.status]);

    //check Connections
    useEffect(() => {
        async function checkConnection() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();
            if (accounts.length !== 0) {
            wallet.connect();
            }
        }
        }
        checkConnection();
    }, []);

    const history = useHistory();
    const [mobileView, setMobileView] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const showMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const setResponsiveness = () => {
        return window.innerWidth < 1100
            ? setMobileView(true)
            : setMobileView(false);
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const desktopContent = (
        <div
        className="x-navContainer"
        style={{
            position: "fixed",
            width: "100%",
            background: "rgba(0, 0, 0, 0.5)",
        }}
        >
        <Link to="/" className="x-logo">
            <img src={logoImg} alt="logo" width="100px" draggable="false" />
        </Link>
        <Link to="/" className="x-navLink">
            Home
        </Link>
        {/* <ScrollLink to="about" spy={true} smooth={true} className="x-navLink">
            About Game
        </ScrollLink>
        <ScrollLink to="features" spy={true} smooth={true} className="x-navLink">
            Features
        </ScrollLink> */}
        {/* <Link to="/tokenomics" className="x-navLink">
                Tokenomics
            </Link>
            <Link to="/defi" className="x-navLink">
                Defi
            </Link> */}
        <Link to="/nft-marketplace" className="x-navLink">
            NFT marketplace
        </Link>
        <Link to="/my-items" className="x-navLink">
            My Items
        </Link>
        <button className="x-smallChoco-1" onClick={() => handleLogin("1")}>
            {wallet.status === "connected" ? styledAddress : "Login"}
        </button>
        <button className="x-smallChoco-1" onClick={() => handleLogin("2")}>
            Sign Up
        </button>
        </div>
    );
    const mobileContent = (
        <div className="x-navContainer">
        <Link to="/" className="float-left">
            <img src={logoImg} alt="logo" width="100px" />
        </Link>
        <IconButton className="x-humburger-icon" onClick={showMenu}>
            <MenuIcon />
        </IconButton>
        </div>
    );
    return (
        <div>
        {mobileView ? mobileContent : desktopContent}
        <div>
            <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <StyledMenuItem onClick={() => history.push("/")}>
                <ListItemIcon>
                <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </StyledMenuItem>

            {/*
                <StyledMenuItem onClick = {()=>history.push("/#about")}>
                <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="About Game" />
                </StyledMenuItem>
                <StyledMenuItem onClick = {()=>history.push("/#features")}>
                <ListItemIcon>
                        <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Features" />
                </StyledMenuItem > */}

            <StyledMenuItem onClick={() => history.push("/defi")}>
                <ListItemIcon>
                <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Defi" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => history.push("/tokenomics")}>
                <ListItemIcon>
                <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Tokenomics" />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => history.push("/nft-marketplace")}>
                <ListItemIcon>
                <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="NFT marketplace" />
            </StyledMenuItem>

            {/*
                <StyledMenuItem  onClick = {()=>history.push("/my-items")}>
                <ListItemIcon>
                        <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My Items" />
                </StyledMenuItem>
                */}
            <StyledMenuItem
                onClick={() => console.log("connect button is clicked")}
            >
                <ListItemIcon>
                <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Connect" />
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemIcon>
                <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Play Now" />
            </StyledMenuItem>
            </StyledMenu>
        </div>
        <LoginDialog
            open={open}
            setOpen={setOpen}
            setLoginState={setLoginState}
            tabValue={tabValue}
            setTabValue={setTabValue}
        />
        </div>
    );
}

export default Nav;
