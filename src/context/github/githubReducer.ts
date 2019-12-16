import * as types from '../constants';
import { IGithubState } from '../types';

export default (state: IGithubState, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case types.SEARCH_USERS:
        return { ...state, users: payload, loading: false };
    case types.GET_USER:
        return  { ...state, user: payload, loading: false };
    case types.GET_ALL_USERS:
        return { ...state, users: payload, loading: false };
    case types.CLEAR_USERS:
        return { ...state, users: [], loading: false };
    case types.GET_REPOS:
        return { ...state, repos: payload, loading: false };
    case types.SET_LOADING:
        return { ...state, loading: true };
    default:
        return state;
    }
};
