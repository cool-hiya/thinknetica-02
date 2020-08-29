import React from 'react';
import Copyright from '../copyright';
import styles from './footer.module.scss';
import { bemNamesFactory } from 'bem-names';
import ThemeSwitcher from '../theme-switcher';
 
const bem = bemNamesFactory('footer');
 
const Footer = () => {
    return (
        <footer className={styles[bem()]}>
            <div className={styles[bem('container')]}>
                <ThemeSwitcher/>
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;
