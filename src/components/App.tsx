import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Users from './users';
import Search from './search';
import Alert, { AlertType } from './layout/Alert';
import { API } from '../api';
import { IUserItem } from './users/type';
import './App.css';
import About from './pages/About';
import User from './users/User';

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null,
    }


    private onPreloader = () => this.setState({ loading: true });
    private offPreloader = () => this.setState({ loading: false });

    searchUsers = async (name: Key) => {
        this.onPreloader();
        const { data: { items } } = await axios.get(API.SEARCH(name));
        this.setState({ users: items });
        this.offPreloader();
    }

    getUser = async (username: Key) => {
        this.onPreloader();
        const { data } = await axios.get(API.GET_USER(username));
        console.log(data,' data getUser');
        this.setState({ user: data });
        this.offPreloader();
    }

    getDefaultUsers = async () => {
        this.onPreloader();

        const { data } = await axios.get(API.ALL_USERS);

        const users = data.map(({ login, id, avatar_url, html_url }: IUserItem) =>
            ({ login, id, avatar_url, html_url }));

        this.setState({ users });
        this.offPreloader();
    }

    componentDidMount() {
        this.getDefaultUsers();
    }

    clear = async () => {
        this.setState({ users: [] });
    }

    setAlert = (msg: string, type: string) => {
        this.setState({ alert: { msg, type } });
        setTimeout(() => this.setState({ alert: null }), 3000);
    }

    render() {
        const { users, loading, alert } = this.state;

        return (
            <Router>
                <div className="app">
                    <Navbar title=" Github Finder" icon="fab fa-github"/>
                    <div className="container">
                        <Alert alert={alert}/>
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <>
                                    <Search
                                        searchUsers={this.searchUsers}
                                        clear={this.clear}
                                        showBtnClear={users.length > 0}
                                        setAlert={this.setAlert}
                                    />
                                    <Users loading={loading} users={users}/>
                                </>
                            )}/>
                            <Route path="/about" component={About}/>
                            <Route path="/user/:login" component={User}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
