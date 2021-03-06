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
import { useSelector } from "react-redux";

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
    const [tabValue, setTabValue] = React.useState("0");

    const username = useSelector((state) => state.username);
    const wallet = useWallet();

    const handleLogin = (value) => {
        if (wallet.status !== "connected") {
            setOpen(true);
            setTabValue(value);
        } else {
            wallet.reset();
        }
    };

    //check Connections
    useEffect(() => {
        async function checkConnection() {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
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
            className="top_menu"
            style={{
                zIndex: 1,
            }}
        >
            <Link to="/" className="x-logo">
                <img src={logoImg} alt="logo" width="130px" draggable="false" />
            </Link>
            {/* <div style={{ textAlign: "right", width: "100%", padding: 15 }}>
                <Link to="/" className="x-navLink">
                    HOME
                </Link>
                <Link to="/nft-marketplace" className="x-navLink">
                    NFT MARKETPLACE
                </Link>
                <Link to="/my-items" className="x-navLink">
                    MY ITEMS
                </Link>
            </div> */}
            {/* <button
                className="x-connect-button"
                onClick={() => handleLogin("1")}
            >
                {wallet.status === "connected" ? "DISCONNECT" : "CONNECT"}
            </button> */}
        </div>
    );
    const mobileContent = (
        <div className="x-navContainer">
            <Link to="/" className="float-left">
                <img src={logoImg} className="nav_logo" alt="logo" />
            </Link>
            {/* <IconButton className="x-humburger-icon" onClick={showMenu}>
                <MenuIcon />
            </IconButton> */}
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
                    {/* <StyledMenuItem onClick={() => history.push("/")}>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </StyledMenuItem> */}

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

                    {/* <StyledMenuItem onClick={() => history.push("/defi")}>
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
            </StyledMenuItem> */}
                    {/* <StyledMenuItem
                        onClick={() => history.push("/nft-marketplace")}
                    >
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="NFT marketplace" />
                    </StyledMenuItem>

                    <StyledMenuItem onClick={() => history.push("/my-items")}>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="My Items" />
                    </StyledMenuItem>

                    <StyledMenuItem>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Connect" />
                    </StyledMenuItem> */}
                    {/* <StyledMenuItem>
                <ListItemIcon>
                <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Play Now" />
            </StyledMenuItem> */}
                </StyledMenu>
            </div>
            <LoginDialog
                open={open}
                setOpen={setOpen}
                tabValue={tabValue}
                setTabValue={setTabValue}
                style={{ background: "transparent" }}
            />
        </div>
    );
}

export default Nav;
