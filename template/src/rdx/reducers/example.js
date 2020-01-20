import {actionExample} from '../actions/example';

export const exampleReducer = (state, {payload}) => {
    state.example = payload;
    return state;
};

export default {
    [actionExample]: exampleReducer,
};
