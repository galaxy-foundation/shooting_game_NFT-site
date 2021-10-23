import {combineReducers} from 'redux';
import metamaskReducer from './metamask';

export default combineReducers({
    metamask: metamaskReducer
})