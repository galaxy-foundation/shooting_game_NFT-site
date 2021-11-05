
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';

import {useEffect,useState} from 'react'
import {useApplicationContext} from "../../contexts"
import {useHistory} from 'react-router-dom';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import CircularProgress from '@material-ui/core/CircularProgress';

import AlertModal from "../alertModal"

import { useWallet } from 'use-wallet'
import {ethers} from 'ethers';
// import {WeaponNFT,MarketPlace} from "../../contract"
import { WeaponNFT ,MarketPlace} from "../../contract";

const OnsaleCard = (props)=>{
    
    const {handleBid} = props;
    const [price, setPrice] = useState(200);
    const [date, setDate] = useState(new Date('2021-08-20T21:11:54'));
    const [loading, setLoading] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});

    useEffect(() => {
        var date=new Date();
        var endDate = new Date();
        endDate.setDate(date.getDate()+7);
        setDate(endDate);
    },[])


    const handlePrice = (e)=>{
        if(isNaN(e.target.value)!==true){
            setPrice(e.target.value);
        }
    }

    const handleDate = (date)=>{
        console.log(typeof(date))
        setDate(date);
    }

    const handleClose = ()=>{
        setAlertOpen(false);
    }

    const handleBidClick = async () => {
        setLoading(true);
        var seconds = Math.floor(date.getTime() / 1000);
        await handleBid(price,seconds);
        setLoading(false);
    }

    return (
        <div>
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <div>
            <TextField 
                label="Price"
                InputProps={{
                    endAdornment: <InputAdornment position="end">ATRI</InputAdornment>,
                }}
                onChange = {handlePrice} 
                value = {price}
            />
            </div>
            <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="End"
                format="MM/dd/yyyy"
                value={date}
                onChange={handleDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
            </div>
            <div className = "spacer"></div>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Button className = "onsale-button" onClick = {handleBidClick}>
                    {loading?
                        <CircularProgress size={24} />
                        :"BID"}
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default OnsaleCard;