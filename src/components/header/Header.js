import React, {Component} from 'react';
import UserInfo from '../user-info';
import Logo from '../logo';

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
