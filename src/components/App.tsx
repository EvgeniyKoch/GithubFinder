import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Users from './users';
import Search from './search';
import Alert, { AlertType } from './layout/Alert';
import { GITHUB_API } from '../api';
import About from './pages/About';
import User from './users/User';
import { setFormatUsers } from '../utils';
import './App.css';
import { IRepoItem, IUserItem, IUserItemDesc } from './users/type';

const App = () => {
    const [users, setUsers] = useState<IUserItem[]>([]);
    const [user, setUser] = useState<IUserItemDesc>({});
    const [repos, setRepos] = useState<IRepoItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [alert, setNotification] = useState<AlertType>(null);

    const onPreloader = () => setLoading(true);
    const offPreloader = () => setLoading(false);

    const searchUsers = async (name: Key) => {
        onPreloader();
        const { data: { items } } = await axios.get(GITHUB_API.SEARCH(name));
        setUsers(items);
        offPreloader();
    };

    const getUser = async (username: Key) => {
        onPreloader();
        const { data } = await axios.get(GITHUB_API.GET_USER(username));
        setUser(data);
        offPreloader();
    };

    const getUserRepos = async (username: Key) => {
        onPreloader();
        const { data } = await axios.get(GITHUB_API.GET_USER_REPOS(username));
        const repository = data.reduce((acc: any, repo: any) => (
            [...acc, { id: repo.id, name: repo.name, url: repo.html_url }]
        ), []);
        setRepos(repository);
        offPreloader();
    };

    const getDefaultUsers = async () => {
        onPreloader();
        const { data } = await axios.get(GITHUB_API.GET_ALL_USERS());
        const usersGit = setFormatUsers(data);
        setUsers(usersGit);
        offPreloader();
    };

    useEffect(() => {
        getDefaultUsers();
    }, []);

    const clear = async () => {
        setUsers([]);
    };

    const setAlert = (msg: string, type: string) => {
        setNotification({ msg, type });
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <Router>
            <div className="app">
                <Navbar title=" Github Finder" icon="fab fa-github" />
                <div className="container">
                    <Alert alert={alert} />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                            <>
                                <Search
                                    searchUsers={searchUsers}
                                    clear={clear}
                                    showBtnClear={users.length > 0}
                                    setAlert={setAlert}
                                />
                                <Users loading={loading} users={users} />
                            </>
                        )} />
                        <Route path="/about" component={About} />
                        <Route
                            path="/user/:login"
                            render={(props) => (
                                <User
                                    {...props}
                                    getUser={getUser}
                                    getUserRepos={getUserRepos}
                                    user={user}
                                    repos={repos}
                                    loading={loading}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
