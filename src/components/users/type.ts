import { RouteComponentProps } from 'react-router';

export interface IUsersProps {
    users: IUserItem[];
    loading: boolean;
}

export interface IUserItem {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface ILogin {
    login: string;
}

export interface IUserItemDesc {
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

export interface IRepoItem {
    id?: Key;
    name: string;
    url: string;
}

export interface IUserProps extends RouteComponentProps<ILogin> {
    user: IUserItemDesc;
    repos: IRepoItem[];
    loading: boolean;
    getUser(name: Key): Promise<void>;
    getUserRepos(name: Key): Promise<void>;
}
