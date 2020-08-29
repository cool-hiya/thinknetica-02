import React from 'react';
import styles from '../contact-form.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('contact-form');

const Title = (props) => {
    return (
        <h2 className={styles[bem('title')]}>{props.children}</h2>
    );
}

export default Title;
