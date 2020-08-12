import React from 'react';
import SubscribeModal from '../subscribe-modal';
import Authors from '../book-authors';
import Badge from '../badge';

const BookCard = (props) => {

    const renderBadges = (followers) => {
        if (followers >= 20) {
            return (
                <Badge type='primary'>Popular</Badge>
            )
        }
    }

    if (!props.book) {
        return <div>Book is unavailable</div>
    }

    const {book: {title, pageCount, language, cover, followers, expectedPrice, authors}, onSelect} = props;

    return (
        <div className='card'>
            <img src={cover} className='card-img-top' />
            <div className='card-body'>
                <h2 className='card-title'><span onClick={() => onSelect()}> {title}</span> {renderBadges(followers)}</h2>
                <div className='list-group'>
                    <div className='list-group-item'>Language: {language}</div>
                    <div className='list-group-item'>Page count: {pageCount}</div>
                    <div className='list-group-item'>Price: ${expectedPrice}</div>
                    <div className='list-group-item'>Followers: {followers}</div>
                    <div className='list-group-item'>Authors:
                            <Authors authors={authors} />
                    </div>
                </div>
                <SubscribeModal />
            </div>
        </div>
    );
}

export default BookCard;
