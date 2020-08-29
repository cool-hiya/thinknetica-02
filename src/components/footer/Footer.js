import React from 'react';
import Copyright from '../copyright';
import styles from './footer.module.scss';
import { bemNamesFactory } from 'bem-names';
 
const bem = bemNamesFactory('footer');
 
const Footer = () => {
    return (
        <footer className={styles[bem()]}>
            <div className={styles[bem('container')]}>
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;
