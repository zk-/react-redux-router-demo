import { createStore, combineReducers } from 'redux';
import Test from '../pages/test/reducer';
const initState = {
    Test: Test.initState
};
const reducers = {
    Test: Test.reducer
};

const store = createStore(combineReducers(reducers), initState);

export default store;