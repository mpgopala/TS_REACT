import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {userReducer} from './redux/Reducers';

import thunk from 'redux-thunk';

let store = createStore(userReducer, 
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return <Provider store={store}>
    <h1>Thunk Saga example</h1>
    <Users />
  </Provider>
}

export default App;
