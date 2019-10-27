import React from 'react';
import { IUserItem } from './type';
import { Link } from 'react-router-dom';

const UsersItem: React.StatelessComponent<IUserItem> = ({ avatar_url, login }) => (
    <div className="card text-center">
        <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                More
            </Link>
        </div>
    </div>
);


export default UsersItem;
