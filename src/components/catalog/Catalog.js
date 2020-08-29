import React from 'react';
import BookCard from '../book-card';
import {withLoading} from '../../HOC';
import styles from './catalog.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('catalog');

const Catalog = ({books, onSelect}) => {

    const renderBooks = () => {
        return books.map(book => {
            return (
                <li key={book.id} >
                    <BookCard book={book} onSelect={() => onSelect(book)} />
                </li>)
        });
    }

    return (
        <ul className={styles[bem()]}>
            {renderBooks()}
        </ul>
    );
}

export default withLoading(Catalog);
