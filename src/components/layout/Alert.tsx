import React from 'react';

export type AlertType  = {
    alert: null | {
        msg: string,
        type: string,
    },
}

const Alert: React.StatelessComponent<AlertType> = ({ alert }) => {
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
