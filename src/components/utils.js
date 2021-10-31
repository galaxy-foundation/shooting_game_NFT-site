
import { ethers } from "ethers"
import { store } from 'react-notifications-component';
/**
 * set delay for delayTimes
 * @param {Number} delayTimes - timePeriod for delay
 */
function delay(delayTimes) {
  return new Promise(resolve => {
	setTimeout(() => {
	  resolve(2);
	}, delayTimes);
  });
}

/**
 * change data type from Number to BigNum 
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
function toBigNum(value,d) {
	return ethers.utils.parseUnits(Number(value).toFixed(12), d);
}

/**
 * change data type from BigNum to Number
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
function fromBigNum(value,d) {
	return parseFloat(ethers.utils.formatUnits(value, d));
}

/**
 * @dev show  alert
 * @param {data}  error data  
 */
function handleAlert(data){
    const {title,msg,type} = data;
    store.addNotification({  
        title: title,
        message: msg,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
        duration: 2000
        }
    });
}

export {delay,handleAlert, toBigNum, fromBigNum};