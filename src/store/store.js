
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import home from './home/reducers.js';

let Store = createStore(
    combineReducers({
      home: home,
    }),
    applyMiddleware(thunk)
);

export default Store
