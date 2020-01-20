import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import InitialState from '../data';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const IS_NOT_PRODUCTION = process.env.NODE_ENV !== 'production';
/**
 * Returns a configurated Redux Store
 * @param forceLogging - force logging on or off
 * @param isNotProduction - only for unit testing
 * @returns {Store<any>}
 */
export default (forceLogging = null, isNotProduction = IS_NOT_PRODUCTION) => {
    let middleware;
    if (isNotProduction) {
        let applied;
        if (forceLogging === false) {
            // you can force disable redux logging for local development
            applied = applyMiddleware(promiseMiddleware, thunk);
        } else {
            // logging is enabled by default in non-production environments
            applied = applyMiddleware(createLogger(), promiseMiddleware, thunk);
        }
        middleware = compose(
            applied,
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f
        );
    } else if (forceLogging === true) {
        // allows logging in production build when necessary
        middleware = applyMiddleware(createLogger(), promiseMiddleware, thunk);
    } else {
        // logging is disabled by default in production
        middleware = applyMiddleware(promiseMiddleware, thunk);
    }

    return createStore(reducer, InitialState(), middleware);
};
