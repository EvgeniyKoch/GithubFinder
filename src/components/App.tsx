import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GitHubState from '../context/github/GitHubState';

import Navbar from './layout/Navbar';
import Alert from './layout/Alert';
import About from './pages/About';
import User from './users/User';
import './App.css';
import AlertState from '../context/alert/AlertState';
import Home from './layout/Home';
import NotFound from './layout/NotFound';

const App = () => {
    return (
        <GitHubState>
            <AlertState>
                <Router>
                    <div className="app">
                        <Navbar title=" Github Finder" icon="fab fa-github" />
                        <div className="container">
                            <Alert />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/user/:login" component={User} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GitHubState>
    );
};

export default App;
