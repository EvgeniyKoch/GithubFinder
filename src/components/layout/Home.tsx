import React, { Fragment } from 'react';
import Search from '../search';
import Users from '../users';

const Home = () => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    );
};

export default Home;
