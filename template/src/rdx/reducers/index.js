import example from './example';
import createNextState from 'immer';
import {handleActions} from 'redux-actions';
import InitialState from '../data';

const actions = {
    ...example,
    /* add other reducer packages using ...destructuring */
};

const immerse = reducer => (state, action) =>
    createNextState(state, draft => reducer(draft, action));

const immerActions = Object.keys(actions).reduce((acc, key) => {
    acc[key] = immerse(actions[key]);
    return acc;
}, {});

export default handleActions(immerActions, InitialState);
