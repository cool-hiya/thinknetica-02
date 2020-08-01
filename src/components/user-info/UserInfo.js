import React from 'react';
import AuthContext from '../../context/AuthContext';

const UserInfo = () => {
    return (
        <AuthContext.Consumer>
            {({avatarUrl, firstName, lastName}) =>
                <div className='d-flex align-items-center'>
                    <img src={avatarUrl} width='40' height='40' />
                    <span>{firstName} {lastName}</span>
                </div>
            }
        </AuthContext.Consumer>
    );
}

export default UserInfo;
