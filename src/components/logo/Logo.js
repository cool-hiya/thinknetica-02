import React from 'react';
import logoImage from './logo.png';
import styles from './logo.module.scss';
import { bemNamesFactory } from 'bem-names';
 
const bem = bemNamesFactory('logo');

const Logo = () => {
    return (
        <a href='#' className={styles[bem()]}>
            <img className={styles[bem('image')]} src={logoImage} />
        </a>
    );
}

export default Logo;