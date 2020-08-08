import React from 'react';
import UserInfo from '../user-info';
import Logo from '../logo';

const Header = () => {
    return (
        <header className='navbar navbar-light bg-light'>
            <div className='container'>
                <Logo />
                <UserInfo />
            </div>
        </header>
    );

}

export default Header;
