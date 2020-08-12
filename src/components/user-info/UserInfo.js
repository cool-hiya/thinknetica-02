import React from 'react';
import AuthContext from '../../context/AuthContext';

const UserInfo = () => {
    const {avatarUrl, firstName, lastName} = React.useContext(AuthContext);

    return (
        <div className='d-flex align-items-center'>
            <img src={avatarUrl} width='40' height='40' />
            <span>{firstName} {lastName}</span>
        </div>
    );
}

export default UserInfo;
