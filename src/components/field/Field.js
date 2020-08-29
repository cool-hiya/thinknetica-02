import React from 'react';
import styles from './field.module.scss';
import { bemNamesFactory } from 'bem-names';
 
const bem = bemNamesFactory('field');

const Field = (props) => {

    const {name, setValue, label, type: InputType, value} = props;

    return (
        <div className={styles[bem()]}>
            <label htmlFor={name} className={styles[bem('label')]}>{label}</label>
            <InputType className={styles[bem('control')]} id={name} value={value} onChange={(e) => setValue(name, e)} />
        </div>
    );
}

export default Field;
