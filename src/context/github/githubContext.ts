import { createContext } from 'react';
import { IGithubContext } from '../types';

const githubContext = createContext({} as IGithubContext);

export default githubContext;
