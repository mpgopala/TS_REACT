import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {userReducer} from './redux/Reducers';
import Users from './User';

// SAGA START
import rootSaga from './redux/saga';
import createSagaMiddleWare from 'redux-saga';
const sagaMiddleWare = createSagaMiddleWare();
let store = createStore(userReducer, 
   compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__()));

   sagaMiddleWare.run(rootSaga);
// SAGA END

// THUNK START

// import thunk from 'redux-thunk';
// let store = createStore(userReducer, 
  // compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));

// THUNK END
function App() {
  return <Provider store={store}>
    <h1>Thunk Saga example</h1>
    <Users />
  </Provider>
}

export default App;
