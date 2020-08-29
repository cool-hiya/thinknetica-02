import React from 'react';
import Authors from '../book-authors';
import Badge from '../badge';
import Title from './title';
import List from './list';
import styles from './book-card.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('book-card');

const BookCard = (props) => {

    if (!props.book) {
        return <div>Book is unavailable</div>
    }

    const isPopular = props.book.followers >= 20;

    const {book: {title, pageCount, language, cover, followers, expectedPrice, authors}, onSelect} = props;

    return (
        <div className={styles[bem()]} onClick={() => onSelect()}>
            <img src={cover} className={styles[bem('img')]} />
            <div className={styles[bem('content')]}>
                <Title>{title}  {isPopular && <Badge type='primary'>Popular</Badge>}</Title>
                <List.Group>
                    <List.Item label='Language'>{language}</List.Item>
                    <List.Item label='Page count'>{pageCount}</List.Item>
                    <List.Item label='Price'>${expectedPrice}</List.Item>
                    <List.Item label='Followers'>{authors.map(author => <span key={author.id}>{author.name}</span>)}</List.Item>
                </List.Group>
            </div>
        </div>
    );
}

export default BookCard;
