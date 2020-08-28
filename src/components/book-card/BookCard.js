import React from 'react';
import SubscribeModal from '../subscribe-modal';
import Authors from '../book-authors';
import Badge from '../badge';
import Title from './title';
import List from './list';

const BookCard = (props) => {
    if (!props.book) {
        return <div>Book is unavailable</div>
    }

    const isPopular = props.book.followers >= 20;

    const {book: {title, pageCount, language, cover, followers, expectedPrice, authors}, onSelect} = props;

    return (
        <div className='card'>
            <img src={cover} className='card-img-top' />
            <div className='card-body'>
                <Title click={() => onSelect()}>
                    {title}
                </Title>
                {isPopular && <Badge type='primary'>Popular</Badge>}
                <List.Group>
                    <List.Item labe='Language'>{language}</List.Item>
                    <List.Item labe='Page count'>{pageCount}</List.Item>
                    <List.Item labe='Price'>${expectedPrice}</List.Item>
                    <List.Item labe='Followers'>{followers}</List.Item>
                    <List.Item labe='Authors:'><Authors authors={authors} /></List.Item>
                </List.Group>
                <SubscribeModal />
            </div>
        </div>
    );
}

export default BookCard;
