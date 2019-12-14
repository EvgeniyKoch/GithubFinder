import React from 'react';
import { IRepoItem } from '../users/type';

const RepoItem: React.FC<IRepoItem> = ({ url, name }) => (
    <div className="card">
        <h3>
            <a href={url}>{name}</a>
        </h3>
    </div>
);

export default RepoItem;
