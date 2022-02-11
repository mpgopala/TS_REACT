import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {FETCH_USERS_REQUEST} from './redux/Actions';

export default function Users() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    let {loading, error, users} = state;
    // componentDidMount
    React.useEffect(() => {
        dispatch({type:FETCH_USERS_REQUEST}); 
    }, []);

    return <>
        <button type="button"
         onClick={()=>dispatch({type:FETCH_USERS_REQUEST})}>Reload</button>
       {
           loading? <h1>Loading..</h1> :
           users.map(user => <h1 key={user.id}>{user.name}, {user.email}</h1>)
       }
    </>
}