import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';
import * as types from '../constants';
import { IAlertContext } from '../types';

const AlertState = (props: { children: React.ReactNode }) => {
    const initialState = {
        alert: null,
    };

    // @ts-ignore
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (msg: string, type: string) => {
        dispatch({
            type: types.SET_ALERT,
            payload: { msg, type },
        });
        setTimeout(() => dispatch({ type: types.SET_ALERT, payload: null }), 3000);
    };

    const context: IAlertContext = {
        alert: state.alert,
        setAlert,
    };

    return <AlertContext.Provider value={context}>{props.children}</AlertContext.Provider>;
};

export default AlertState;
