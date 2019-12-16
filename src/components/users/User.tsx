import React, { Fragment, useContext, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { ILogin } from './type';
import RepoItem from '../repos/RepoItem';
import GitHubContext from '../../context/github/githubContext';

const User = (props: RouteComponentProps<ILogin>) => {
    const githubContext = useContext(GitHubContext);

    useEffect(() => {
        const { match: { params } } = props;
        const { getUser, getUserRepos } = githubContext;

        getUser(params.login);
        getUserRepos(params.login);
    }, []);

    const renderBio = (bios: string) => (
        <Fragment>
            <h3>Bio</h3>
            <p>{bios}</p>
        </Fragment>
    );

    const renderLogin = (loginUser: string) => (
        <Fragment>
            <strong>User: </strong>{loginUser}
        </Fragment>
    );

    const renderCompany = (companyUser: string) => (
        <Fragment>
            <strong>Company: </strong>{companyUser}
        </Fragment>
    );

    const renderBlog = (blogUser: string) => (
        <Fragment>
            <strong>Website: </strong><a target="_blank" href={blog}>{blogUser}</a>
        </Fragment>
    );

    const { repos, user, loading } = githubContext;
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable: {' '}
            {
                hireable
                    ? <i className="fas fa-check text-success" />
                    : <i className="fas fa-times-circle text-danger" />
            }
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        alt="name"
                        className="round-img"
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && renderBio(bio)}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>{login && renderLogin(login)}</li>
                        <li>{company && renderCompany(company)}</li>
                        <li>{blog && renderBlog(blog)}</li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers: {followers}
                </div>
                <div className="badge badge-success">
                    Following: {following}
                </div>
                <div className="badge badge-danger">
                    Public Repos: {public_repos}
                </div>
                <div className="badge badge-dark">
                    Public Gists: {public_gists}
                </div>
            </div>
            <Fragment>
                {repos.length > 0 && repos.map(({ id, ...repo }) => <RepoItem key={id} {...repo} />)}
            </Fragment>
        </>
    );
};

export default User;
