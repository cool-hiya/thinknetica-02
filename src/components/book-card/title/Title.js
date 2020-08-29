import React from 'react';
import styles from '../book-card.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('book-card');

const Title = (props) => {
    return (
        <h2 className={styles[bem('title')]}>{props.children}</h2>
    );
}

export default Title;
