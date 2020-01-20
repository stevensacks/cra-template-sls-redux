import {createSelector} from 'reselect';

export const getExample = state => state.example;

export const getPrettyExample = createSelector([getExample], example => `Example: ${example}`);
