import React, {Component} from 'react';
import UserInfo from '../user-info/UserInfo';
import Logo from '../logo/Logo';

class Header extends Component {
    render() {
        return (
            <header className='navbar navbar-light bg-light'>
                <div className='container'>
                    <Logo/>
                    <UserInfo/>
                </div>
            </header>
        );
    }
}

export default Header;
