import React from 'react';

export type AlertType = {
    msg: string;
    type: string;
} | null;

interface IAlert {
    alert: AlertType;
}

const Alert: React.FC<IAlert> = ({ alert }) => {
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
