import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import * as types from '../constants';
import { GITHUB_API } from '../../api';
import { setFormatUsers } from '../../utils';
import { IGithubContext } from '../types';

const GitHubState = (props: { children: React.ReactNode }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        alert: null,
        loading: false,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (name: Key) => {
        setLoading();
        const { data: { items } } = await axios.get(GITHUB_API.SEARCH(name));
        dispatch({
            type: types.SEARCH_USERS,
            payload: items,
        });
    };

    const getUser = async (username: Key) => {
        setLoading();
        const { data } = await axios.get(GITHUB_API.GET_USER(username));
        dispatch({
            type: types.GET_USER,
            payload: data,
        });
    };

    const getDefaultUsers = async () => {
        setLoading();
        const { data } = await axios.get(GITHUB_API.GET_ALL_USERS());
        const usersGit = setFormatUsers(data);
        dispatch({
            type: types.GET_ALL_USERS,
            payload: usersGit,
        });
    };

    const clear = () => {
        dispatch({
            type: types.CLEAR_USERS,
        });
    };

    const getUserRepos = async (username: Key) => {
        setLoading();
        const { data } = await axios.get(GITHUB_API.GET_USER_REPOS(username));
        const repositories = data.reduce((acc: any, repo: any) => (
            [...acc, { id: repo.id, name: repo.name, url: repo.html_url }]
        ), []);
        dispatch({
            type: types.GET_REPOS,
            payload: repositories,
        });
    };

    const setLoading = () => dispatch({ type: types.SET_LOADING });

    const context: IGithubContext = {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        getDefaultUsers,
        clear,
    };

    return <GithubContext.Provider value={context}>{props.children}</GithubContext.Provider>;
};

export default GitHubState;
