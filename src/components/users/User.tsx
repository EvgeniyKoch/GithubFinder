import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Spinner from '../layout/Spinner';

interface ILogin {
    login: string;
}

interface IUserItem {
    name?: string;
    company?: string;
    avatar_url?: string;
    location?: string;
    bio?: string;
    blog?: string;
    login?: string;
    html_url?: string;
    followers?: string;
    following?: string;
    public_repos?: string;
    public_gists?: string;
    hireable?: string;
}

interface IUserProps extends RouteComponentProps<ILogin> {
    getUser(name: Key): Promise<void>;

    user: IUserItem;
    loading: boolean;
}

class User extends React.Component <IUserProps> {
    async componentDidMount() {
        const { match: { params }, getUser } = this.props;
        getUser(params.login);
    }

    renderBio = (bio: string) => (
        <>
            <h3>Bio</h3>
            <p>{bio}</p>
        </>
    )

    renderLogin = (login: string) => (
        <>
            <strong>User: </strong>{login}
        </>
    )

    renderCompany = (company: string) => (
        <>
            <strong>Company: </strong>{company}
        </>
    )

    renderBlog = (blog: string) => (
        <>
            <strong>Website: </strong><a target='_blank' href={blog}>{blog}</a>
        </>
    )

    render() {
        const { user, loading } = this.props;
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
            return <Spinner/>
        }

        return (
            <>
                <Link to="/" className="btn btn-light">
                    Back To Search
                </Link>
                Hireable: {' '}
                {
                    hireable
                        ? <i className="fas fa-check text-success"/>
                        : <i className="fas fa-times-circle text-danger"/>
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
                        {bio && this.renderBio(bio)}
                        <a href={html_url} className="btn btn-dark my-1">
                            Visit Github Profile
                        </a>
                        <ul>
                            <li>{login && this.renderLogin(login)}</li>
                            <li>{company && this.renderCompany(company)}</li>
                            <li>{blog && this.renderBlog(blog)}</li>
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
            </>
        );
    }
};

export default User;
