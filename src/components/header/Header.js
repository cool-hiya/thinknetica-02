import React from 'react';
import UserInfo from '../user-info';
import Logo from '../logo';
import styles from './header.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('header');

const Header = () => {
    return (
        <header className={styles[bem()]}>
            <div className={styles[bem('container')]}>
                <Logo />
                <UserInfo />
            </div>
        </header>
    );

}

export default Header;
