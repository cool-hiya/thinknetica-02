import React, {Component} from 'react';
import authContext from '../../context/authContext';

class UserInfo extends Component {
    render() {
        return (
            <authContext.Consumer>
                {({avatarUrl, firstName, lastName}) =>
                    <div className='d-flex align-items-center'>
                        <img src={avatarUrl} width='40' height='40' />
                        <span>{firstName} {lastName}</span>
                    </div>
                }
            </authContext.Consumer>
        );
    }
}

export default UserInfo;
