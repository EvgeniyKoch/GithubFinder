import { createContext } from 'react';
import { IAlertContext } from '../types';

const alertContext = createContext({} as IAlertContext);

export default alertContext;
