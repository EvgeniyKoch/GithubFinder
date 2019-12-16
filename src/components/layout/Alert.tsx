import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export type AlertType = null | {
    msg: string;
    type: string;
};

const Alert = () => {
    const githubContext = useContext(AlertContext);
    const { alert } = githubContext;

    if (alert === null) {
        return null;
    }

    return (
        <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle" />
            {alert.msg}
        </div>
    );
};

export default Alert;
