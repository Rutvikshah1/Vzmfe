import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer';

const store = createStore(
  combineReducers({
    auth: authReducer,
  })
);

export default store;
