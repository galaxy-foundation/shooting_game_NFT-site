import React from "react";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDialog(props) {
  const { open, setOpen, setLoginState, tabValue, setTabValue } = props;

  const handleConnect = () => {
    setLoginState(true);
  };

  const handleClose = () => {
    setLoginState(false);
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Atari Multi Play</DialogTitle>
        <DialogContent>
          <TabContext value={tabValue}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Login" value="1" />
                <Tab label="Registry" value="2" />
              </TabList>
            </Box>
            <TabPanel value="2">
              <TextField
                label="username"
                type="text"
                autoComplete="current-username"
                variant="outlined"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions>
          {tabValue === "1" ? (
            <Button
              onClick={handleConnect}
              style={{ backgroundColor: "#ddd", width: "100%" }}
            >
              Sign In
            </Button>
          ) : (
            <Button style={{ backgroundColor: "#ddd", width: "100%" }}>
              Sign Up
            </Button>
          )}
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Don't you have an account?&nbsp;&nbsp;&nbsp;
            <Link to="/" onClick={() => setTabValue("2")}>
              Registry Here
            </Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
