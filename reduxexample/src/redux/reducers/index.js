import {combineReducers} from 'redux';
import ContactReducer from './ContactReducer';
// root reducer
export default combineReducers({
    contacts: ContactReducer 
})