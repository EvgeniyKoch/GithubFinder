import React, { useContext, useEffect } from 'react';

import UsersItem from './UsersItem';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GitHubContext);
    const { loading, getDefaultUsers, users } = githubContext;

    useEffect(() => {
        getDefaultUsers();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div style={userStyle}>
            {users.map(user => <UsersItem key={user.id} {...user} />)}
        </div>
    );
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

export default Users;
