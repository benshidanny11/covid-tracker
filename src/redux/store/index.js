import thunk from 'redux-thunk';
import {applyMiddleware,createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

const {NODE_ENV} =process.env;
const midleWare=[thunk];
const initalStates={};

const enableDevTools=NODE_ENV ==='development'?composeWithDevTools(applyMiddleware(...midleWare)):applyMiddleware(...midleWare);
const store=createStore(rootReducer,initalStates,enableDevTools);

export default store;