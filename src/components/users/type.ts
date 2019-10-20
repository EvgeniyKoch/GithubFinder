export interface IUsersProps {
    users: Array<IUserItem>;
    loading: boolean;
}

export interface IUserItem {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}