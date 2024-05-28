import {
    compose,
    legacy_createStore as configureStore,
    applyMiddleware
} from 'redux';
import { rootReducer } from './root-reducer';

import logger from 'redux-logger';

const middleWares = [logger]; // Catches action beofre they reach the reducer
const composedEnhancer = compose(applyMiddleware(...middleWares));


export const store = configureStore(rootReducer, undefined, composedEnhancer);