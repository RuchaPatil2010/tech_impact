import {combineReducers} from 'redux';
import {userReducer} from './reducer.js';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;