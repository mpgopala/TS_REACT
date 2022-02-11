import React from 'react';
import {fetchUsers} from './redux/thunk/thunkapi';
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

    let {loading, error, users} = state;
    // componentDidMount
    React.useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <>
       {
           loading? <h1>Loading..</h1> :
           users.map(user => <h1 key={user.id}>{user.name}, {user.email}</h1>)
       }
    </>
}