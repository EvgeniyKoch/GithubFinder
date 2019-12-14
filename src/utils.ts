import { IUserItem } from './components/users/type';

export const setFormatUsers = (users: IUserItem[]) => users.map(({ login, id, avatar_url, html_url }) => (
    { login, id, avatar_url, html_url }),
);
