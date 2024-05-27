import {
    compose,
    configureStore,
    applyMiddleware
} from 'redux';

import logger from 'redux-logger';

const middleWares = [logger]; // Catches action beofre they reach the reducer
const composedEnhancer = compose(applyMiddleware(...middleWares));


export const store = configureStore(rootReducer, undefined, composedEnhancer);