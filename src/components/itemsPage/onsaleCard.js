
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
    
    const wallet = useWallet();
    const history = useHistory();
    const [state,{weaponTokenUpdate}] = useApplicationContext();

    const {tokenID} = props;
    const [price, setPrice] = useState(200);
    const [allowance, setAllowance] = useState(false);
    const [date, setDate] = useState(new Date('2021-08-20T21:11:54'));
    const [loading, setLoading] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertInfos, setAlertInfos] = useState({title:"text",info:"error"});

    const [signer, setSigner] = useState();

    const checkProvider = async () => {
        if(wallet.status == "connected") {
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer =await provider.getSigner();
            setSigner(signer);
        }
    }

    useEffect(() => {
        checkProvider();
    },[wallet.status]);

    async function getAllowance() {
        try {
            //sigend contracts
            
            const provider = new ethers.providers.Web3Provider(wallet.ethereum);
            const signer =await provider.getSigner();
            setSigner(signer);
            var signedWeaponNFT = WeaponNFT.connect(signer);
            var allowance =await signedWeaponNFT.getApproved(tokenID);

            if(allowance.toUpperCase() === MarketPlace.address.toUpperCase()) {
                setAllowance(true);
            }
            else {
                setAllowance(false);
            }
        }catch(err){
            console.error("onsale Card: getAllowance " ,err);
        }
    }

    useEffect(() => {
        getAllowance();
        var date=new Date();
        var endDate = new Date();
        endDate.setDate(date.getDate()+7);
        setDate(endDate);
    },[])

    const handleApprove = async ()=>{
        if(wallet.status === "connected"){
            
            setLoading(true);
    
            //sigend contracts
            var signedWeaponNFT = WeaponNFT.connect(signer);
            var tx = await signedWeaponNFT.approve(MarketPlace.address,tokenID)
            .catch((err)=>{
                setAlertInfos({title:"Approve Error",info:"OOPS, Approve failed!"});
                setAlertOpen(true);
                setLoading(false);
            })
            if(tx!=null){
                await tx.wait();
                setLoading(false);
                getAllowance();
            }
        }
    }

    const handleOnsale = async ()=>{
        if(allowance===true){
            if(wallet.status === "connected"){
            
                setLoading(true);
        
                var seconds = Math.floor(date.getTime() / 1000);
                
                try {
                    //sigend contracts
                    var marketPlace = MarketPlace.connect(signer);
                    var tx = await marketPlace.createOrder(WeaponNFT.address,tokenID,ethers.utils.parseUnits(price.toString()),seconds);
                    await tx.wait();
                    setLoading(false);
                    handleClose();
                                
                    history.push(`/my-items/items`);
                    await weaponTokenUpdate();
                    
                }catch(err){
                    setAlertInfos({title:"Onsale Error",info:"OOPS, Onsale error"});
                    setAlertOpen(true);
                    setLoading(false);
                    console.log("handleOnsale err : ",err);
                }
            }
        }
    }

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

    return (
        <div>
            <AlertModal title = {alertInfos.title} info = {alertInfos.info} open = {alertOpen} handleClose = {handleClose}/>
            <div>
            <TextField 
                label="Price"
                InputProps={{
                    endAdornment: <InputAdornment position="end">PWC</InputAdornment>,
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
                <Grid item xs={6} sm={6} md={6}>
                    <Button className = "onsale-button" disabled = {allowance} onClick = {handleApprove}>
                    {loading?
                        <CircularProgress size={24} />
                        :"APPROVE"}
                    </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Button className = "onsale-button" disabled = {!allowance} onClick = {handleOnsale}>
                    {loading?
                        <CircularProgress size={24} />
                        :"ON SALE"}
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default OnsaleCard;