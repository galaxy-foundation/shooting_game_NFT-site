/** @format */

import axios from "axios";
import { NotificationManager } from "react-notifications";
import store from "../../store";

// Register User
export const RegisterUser = async (signData) => {
    try {
        var res = await axios.post("/api/registry", {
            msg: signData.msg,
            signature: signData.signature,
            name: signData.username,
            nick: signData.nickname,
            email: signData.email,
            password: signData.password,
        });

        if (res.data.success === true) {
            NotificationManager.success(res.data.msg, "", 3000);
        } else {
            NotificationManager.error(res.data.msg, "", 3000);
        }
    } catch (err) {
        console.log(err);
        NotificationManager.error("Internal Error", "", 3000);
        return false;
    }
};

// Login - Get User Token
export const LoginUser = async (logData) => {
    try {
        var res = await axios.post("/api/login", {
            signature: logData,
        });

        if (res.data.success === true) {
            NotificationManager.success(res.data.msg, "", 3000);

            store.dispatch({
                type: "SET_USERNAME",
                payload: res.data.username,
            });
        } else {
            NotificationManager.error(res.data.msg, "", 3000);
        }
    } catch (err) {
        console.log(err);
        NotificationManager.error("Internal Error", "", 3000);
        return false;
    }
};

// Log user out
export const LogoutUser = () => {
    // Decode token to get user data
    try {
    } catch (err) {
        console.log(err);
    }
};
