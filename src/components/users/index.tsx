import React from 'react';

import UsersItem from "./UsersItem";
import Spinner from "../layout/Spinner";
import { IUsersProps } from "./type";

const Users: React.StatelessComponent<IUsersProps> = ({ users, loading }) => {
    if (loading) {
        return <Spinner />;
    }

    return (
        <div style={userStyle}>
            {users.map((user) => <UsersItem key={user.id} {...user} />)}
        </div>
    );
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

export default Users;
