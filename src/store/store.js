
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import riskResultReduce from './my_risk_assessment/reducers.js';

let Store = createStore(
    combineReducers({
      riskResult: riskResultReduce,
    }),
    applyMiddleware(thunk)
);

export default Store
