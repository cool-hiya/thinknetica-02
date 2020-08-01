import React, {Component} from 'react';
import Copyright from '../copyright';

class Footer extends Component {
    render() {
        return (
            <footer className='navbar navbar-light bg-light'>
                <div className='container'>
                    <Copyright/>
                </div>
            </footer>
        );
    }
}

export default Footer;
