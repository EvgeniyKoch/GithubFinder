import * as types from '../constants';
import { AlertType } from '../../components/layout/Alert';

export default (state: AlertType, action: any) => {
    const { type, payload } = action;
    switch (type) {
    case types.SET_ALERT:
        return { ...state, alert: payload };
    default:
        return state;
    }
};
