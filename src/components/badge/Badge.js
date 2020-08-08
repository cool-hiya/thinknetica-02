import React from 'react';

const Badge = ({type, children}) => {
    return (
        <span className={`badge badge-${type}`}>{children}</span>
    );
}

export default Badge;