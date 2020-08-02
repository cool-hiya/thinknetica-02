import React, {Component} from 'react';
import AuthContext from '../../context/AuthContext';

class UserInfo extends Component {
    render() {
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
}

export default UserInfo;
