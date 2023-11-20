import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Example middleware
import rootReducer from './rootReducer';

const middleware = [thunk]; // Add other middleware as needed

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
