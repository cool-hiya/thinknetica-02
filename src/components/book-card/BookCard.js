import React from 'react';
import Title from './title';
import List from './list';
import styles from './book-card.module.scss';
import {bemNamesFactory} from 'bem-names';
import Popular from '../popular';

const bem = bemNamesFactory('book-card');

const BookCard = (props) => {

    if (!props.book) {
        return <div className={styles[bem()]}>Book is unavailable</div>
    }

    const isPopular = props.book.followers >= 20;

    const {book: {title, pageCount, language, cover, expectedPrice, authors}, onSelect, onDelete} = props;

    return (
        <div className={styles[bem()]} onClick={() => onSelect()}>
            <img src={cover} className={styles[bem('img')]} />
            <div className={styles[bem('content')]}>
                <Title>{title}  {isPopular && <Popular />}</Title>
                <List.Group>
                    <List.Item label='Language'>{language}</List.Item>
                    <List.Item label='Page count'>{pageCount}</List.Item>
                    <List.Item label='Price'>${expectedPrice}</List.Item>
                    <List.Item label='Followers'>{authors.map(author => <span key={author.id}>{author.name}</span>)}</List.Item>
                </List.Group>
            </div>
            {onDelete && <button type='button' className={styles[bem('close')]} onClick={() => onDelete()}>X</button>}
        </div>
    );
}

export default BookCard;
