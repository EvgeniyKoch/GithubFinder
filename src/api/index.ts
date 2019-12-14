const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const client = `client_id=${clientId}&client_secret=${clientSecret}`;

export const GITHUB_API = {
    BASE: () => 'https://api.github.com',
    GET_ALL_USERS: () => `${GITHUB_API.BASE()}/users?${client}`,
    SEARCH: (name: Key) => `${GITHUB_API.BASE()}/search/users?q=${name}&${client}`,
    GET_USER: (name: Key) => `${GITHUB_API.BASE()}/users/${name}?${client}`,
    GET_USER_REPOS: (name: Key) => `${GITHUB_API.BASE()}/users/${name}/repos?per_page=5&sort=created:asc&${client}`,
};
