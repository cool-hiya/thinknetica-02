import React from 'react';
import ScrollUpButton from '../scroll-up-button';
import styles from './main-container.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('main-container');

const MainContainer = ({children}) => {
    return (
        <main className={styles[bem()]}>
            <div className={styles[bem('container')]}>
                {children}
            </div>
            <ScrollUpButton />
        </main>
    );
}

export default MainContainer;
