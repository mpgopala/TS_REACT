import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from '../ActionCreators';

// action.type = @@INIT when redux is bound to reducer
// default return state is stored in redux store
const ContactReducer = (state = [], action) => {
    switch(action.type) {
        case CREATE_NEW_CONTACT:
            return [
                ...state,
                {...action.contact}
            ]
        case REMOVE_CONTACT:
            return state.filter(contact => contact.email !== action.email)
        default:
            return state;
    }
}

export default ContactReducer;