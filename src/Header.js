import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className='navbar navbar-light bg-light'>
                <div className='container'>
                    <a className='navbar-brand' href='#'>Logo</a>
                </div>
            </header>
        );
    }
}

export default Header;
