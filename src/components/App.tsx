import React, { Component } from 'react';
import axios from 'axios';

import Navbar from "./layout/Navbar";
import Users from "./users";
import Search from "./search";
import { API } from "../api";
import { IUserItem } from "./users/type";
import './App.css';

class App extends Component {
    state = {
        users: [],
        loading: false,
    }

    private onPreloader = () => this.setState({ loading: true });
    private offPreloader = () => this.setState({ loading: false});

    searchUsers = async (query: Key) => {
        this.onPreloader();
        const { data: { items } } = await axios.get(API.SEARCH(query));
        this.setState({ users: items });
        this.offPreloader();
    }

    getDefaultUsers = async () => {
        this.onPreloader();

        const { data } = await axios.get(API.ALL_USERS);

        const users = data.map(({ login, id, avatar_url, html_url}:IUserItem) =>
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

    render() {
        const { users, loading } = this.state;

        return (
            <div className="app">
                <Navbar title=" Github Finder" icon="fab fa-github"/>
                <div className="container">
                    <Search
                        searchUsers={this.searchUsers}
                        clear={this.clear}
                        showBtnClear={users.length > 0}
                    />
                    <Users loading={loading} users={users}/>
                </div>
            </div>
        );
  }
}

export default App;
