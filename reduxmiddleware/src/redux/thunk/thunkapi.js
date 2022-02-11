import axios from 'axios';

import {fetchUsersRequest,fetchUsersSuccess, fetchUsersFailure} from '../ActionCreators'

// client calls this
export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then( response => {
            dispatch(fetchUsersSuccess(response.data));
        })
        .catch(err => {
            dispatch(fetchUsersFailure(err))
        })
    }
}