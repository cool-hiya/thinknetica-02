import React, {Component} from 'react';
import UserInfo from '../user-info/UserInfo';

class Header extends Component {
    render() {
        return (
            <header className='navbar navbar-light bg-light'>
                <div className='container'>
                    <a className='navbar-brand' href='#'>Logo</a>
                    <UserInfo/>
                </div>
            </header>
        );
    }
}

export default Header;
