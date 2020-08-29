import React from 'react';
import styles from '../book-card.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('book-card');

const ListGroup = (props) => {
    return (
        <div className={styles[bem('list')]}>{props.children}</div>
    );
}

const ListItem = (props) => {
    return (
        <React.Fragment>
            <span className={styles[bem('list-item')]}>{props.label}</span>
            <span className={styles[bem('list-item')]}>{props.children}</span>
        </React.Fragment>
    );
}

export default {
    Group: ListGroup,
    Item: ListItem
}