import { IRepoItem, IUserItem, IUserItemDesc } from '../components/users/type';
import { AlertType } from '../components/layout/Alert';

export interface IGithubState {
    users: IUserItem[];
    user: IUserItemDesc;
    repos: IRepoItem[];
    loading: boolean;
}

export interface IGithubContext extends IGithubState {
    searchUsers(query: Key): Promise<void>;
    getUser(name: Key): Promise<void>;
    getUserRepos(name: Key): Promise<void>;
    getDefaultUsers(): Promise<void>;
    clear(): void;
}

export interface IAlertContext {
    alert: AlertType;
    setAlert(msg: string, type: string): void;
}
