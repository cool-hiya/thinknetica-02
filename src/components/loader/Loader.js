import React from 'react';
import styles from './loader.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('loader');

const Loader = () => {
    return (
        <div className={styles[bem()]}>
            <div className={styles[bem('load')]}>
                <div></div><div></div><div></div>
            </div>
        </div>
    );
}

export default Loader;