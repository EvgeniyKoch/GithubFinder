const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const client = `client_id${clientId}&client_secret=${clientSecret}`;

const BASE = () => `https://api.github.com`;

export const API = {
    ALL_USERS: `${BASE()}/users?${client}`,
    SEARCH: (name: Key) => `${BASE()}/search/users?q=${name}&${client}`,
    GET_USER: (name: Key) => `${BASE()}/users/${name}?${client}`,

};
