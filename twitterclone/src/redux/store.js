import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware'
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(promise));
export default store;