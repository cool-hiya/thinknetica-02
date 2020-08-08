import React from 'react';
import Authors from '../book-authors';

const PromoBookCard = React.memo(({book, onDelete}) => {
    const {cover, title, authors} = book;

    return (
        <div className='card'>
            <img src={cover} className='card-img-top' />
            <div className='card-body'>
                <h3 className='card-title'>{title}</h3>
                <Authors authors={authors} />
                <button type='button' onClick={() => onDelete()}>X</button>
            </div>
        </div>
    );
})

export default PromoBookCard;
