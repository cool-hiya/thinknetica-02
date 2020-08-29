import React from 'react';
import styles from '../contact-form.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('contact-form');

const Button = () => {
    return (
        <button type='submit' className={styles[bem('button')]}>Send</button>
    );
}

export default Button;
